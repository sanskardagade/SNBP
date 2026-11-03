import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Search, X } from "lucide-react";
import { programPages, schoolPages } from "../../content/programs.js";
import { staticPages } from "../../content/staticPages.js";
import { homeDefaults } from "../../content/homeDefaults.js";
import { primaryNav, secondaryNav } from "../../constants/navigation.js";
import { siteMeta } from "../../constants/siteMeta.js";
import { getNews } from "../../services/api.js";

function navigationEntries(items, category = "Pages") {
  return items.flatMap((item) => {
    const itemCategory = item.label === "Programs" ? "Programmes" : category;
    const current = item.to && !item.to.includes("#")
      ? [{ title: item.label, path: item.to, category: itemCategory }]
      : [];
    return [...current, ...navigationEntries(item.children || [], itemCategory)];
  });
}

function getSearchEntries() {
  const entries = [
    ...navigationEntries(primaryNav),
    ...navigationEntries(secondaryNav),
    ...Object.entries(schoolPages).map(([path, page]) => ({
      title: page.title,
      description: `${page.lead} ${page.bullets.join(" ")} Departments and programmes at ${page.title}.`,
      path,
      category: "Programmes",
    })),
    ...Object.entries(programPages).map(([path, program]) => ({
      title: program.title,
      description: `${program.school} · ${program.summary} ${program.highlights.join(" ")}`,
      path,
      category: "Programmes",
    })),
    ...Object.entries(staticPages).map(([path, page]) => ({
      title: page.title,
      description: [
        page.lead,
        ...(page.sections || []).flatMap((section) => [section.heading, ...section.body]),
      ].join(" "),
      path,
      category: "Pages",
    })),
    ...homeDefaults.leadership.map((person) => ({
      title: person.name,
      description: `${person.role}. ${person.bio}`,
      path: "/our-team",
      category: "People",
    })),
    ...homeDefaults.faqs.map((faq) => ({
      title: faq.question,
      description: faq.answer,
      path: "/",
      category: "Pages",
    })),
    {
      title: "Contact information",
      description: `${siteMeta.email} ${siteMeta.phones.join(" ")} ${siteMeta.address}`,
      path: "/contact-us",
      category: "Pages",
    },
  ];

  return [...new Map(entries.map((entry) => [`${entry.path}:${entry.title}`, entry])).values()];
}

function matches(entry, query) {
  const terms = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const content = `${entry.title} ${entry.description || ""} ${entry.category}`.toLocaleLowerCase();
  return terms.every((term) => content.includes(term));
}

function relevance(entry, query) {
  const search = query.toLocaleLowerCase().trim();
  const title = entry.title.toLocaleLowerCase();
  if (title === search) return 3;
  if (title.includes(search)) return 2;

  const terms = search.split(/\s+/).filter(Boolean);
  return terms.length && terms.every((term) => title.includes(term)) ? 1 : 0;
}

function Highlight({ text, query }) {
  const terms = [...new Set(query.trim().split(/\s+/).filter(Boolean))].sort(
    (first, second) => second.length - first.length
  );
  if (!terms.length) return text;

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matcher = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  return text.split(matcher).map((part, index) =>
    terms.some((term) => term.toLocaleLowerCase() === part.toLocaleLowerCase())
      ? <mark className="search-match" key={`${index}-${part}`}>{part}</mark>
      : part
  );
}

export default function UniversitySearch() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [news, setNews] = useState([]);
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState(false);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const baseEntries = useMemo(getSearchEntries, []);

  useEffect(() => {
    if (!open || newsLoaded) return undefined;
    let active = true;
    setNewsLoading(true);
    getNews()
      .then(({ data }) => {
        if (active && Array.isArray(data)) {
      setNews(data
        .filter((item) => typeof item.title === "string" && item.title.trim())
        .map((item) => {
        const topic = `${item.title} ${item.category || ""} ${item.type || ""}`.toLowerCase();
        const path = topic.includes("admission")
          ? "/admissions"
          : topic.includes("campus") || topic.includes("event")
            ? "/life-at-snbp"
            : topic.includes("scholarship")
              ? "/scholarships"
              : topic.includes("placement")
                ? "/placements"
                : "/";

        return {
          title: item.title,
          description: item.description || item.date || "",
          path,
          category: "News",
        };
      }));
    }
      })
      .catch(() => {
        if (active) setNewsError(true);
      })
      .finally(() => {
        if (active) {
          setNewsLoading(false);
          setNewsLoaded(true);
        }
      });

    return () => {
      active = false;
    };
  }, [newsLoaded, open]);

  useEffect(() => {
    function handleShortcut(event) {
      if (event.key === "Escape" && open) {
        event.preventDefault();
        setOpen(false);
        setQuery("");
        setCategory("All");
        return;
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const results = useMemo(() => {
    const allEntries = [...baseEntries, ...news];
    const filtered = allEntries.filter((entry) => category === "All" || entry.category === category);
    const matched = query.trim()
      ? filtered.filter((entry) => matches(entry, query)).sort(
          (first, second) => relevance(second, query) - relevance(first, query)
        )
      : filtered;

    return matched.slice(0, 8);
  }, [baseEntries, category, news, query]);

  useEffect(() => setActiveIndex(0), [category, query]);

  function close() {
    setOpen(false);
    setQuery("");
    setCategory("All");
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      navigate(results[activeIndex].path);
      close();
    }
  }

  return (
    <>
      <button
        type="button"
        className="search-trigger"
        onClick={() => setOpen(true)}
        aria-label="Search the university website"
        aria-keyshortcuts="Control+K Meta+K"
      >
        <Search size={17} aria-hidden="true" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden 2xl:inline">Ctrl K</kbd>
      </button>

      {open
        ? createPortal(
            <dialog
              ref={dialogRef}
              className="search-dialog"
              aria-labelledby="university-search-title"
              onCancel={(event) => {
                event.preventDefault();
                close();
              }}
              onClick={(event) => {
                if (event.target === event.currentTarget) close();
              }}
              onClose={() => setOpen(false)}
            >
              <div className="search-panel">
                <div className="search-heading">
                  <div>
                    <p className="eyebrow">SNBP University</p>
                    <h2 id="university-search-title">What are you looking for?</h2>
                  </div>
                  <button type="button" className="search-close" onClick={close} aria-label="Close search">
                    <X size={20} />
                  </button>
                </div>

                <label className="search-input-wrap">
                  <Search size={20} aria-hidden="true" />
                  <span className="sr-only">Search programmes, pages, and news</span>
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search programmes, pages, and more"
                    autoComplete="off"
                  />
                  <kbd>ESC</kbd>
                </label>

                <div className="search-categories" aria-label="Search categories">
                  {["All", "Pages", "Programmes", "People", "News"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={category === item}
                      className={category === item ? "search-category active" : "search-category"}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="search-results" role="listbox" aria-label="Search results">
                  {results.length ? (
                    results.map((entry, index) => (
                      <button
                        key={`${entry.path}:${entry.title}:${entry.category}`}
                        type="button"
                        role="option"
                        aria-selected={index === activeIndex}
                        className={`search-result${index === activeIndex ? " selected" : ""}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => {
                          navigate(entry.path);
                          close();
                        }}
                      >
                        <span className="search-result-copy">
                          <span className="search-result-title"><Highlight text={entry.title} query={query} /></span>
                          {entry.description ? <span className="search-result-description">{entry.description}</span> : null}
                        </span>
                        <span className="search-result-meta">
                          <span>{entry.category}</span>
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </span>
                      </button>
                    ))
                  ) : newsLoading && (category === "All" || category === "News") ? (
                    <p className="search-empty" role="status">Searching university updates…</p>
                  ) : (
                    <p className="search-empty" role="status">
                      No matching {category === "All" ? "results" : category.toLowerCase()} found. Try a programme or page name.
                    </p>
                  )}
                  {newsError && (category === "All" || category === "News") ? (
                    <p className="search-note" role="status">News results are temporarily unavailable.</p>
                  ) : null}
                </div>

                <div className="search-footer">
                  <span>Use ↑ ↓ to navigate</span>
                  <span>Enter to open · Esc to close</span>
                </div>
              </div>
            </dialog>,
            document.body
          )
        : null}
    </>
  );
}
