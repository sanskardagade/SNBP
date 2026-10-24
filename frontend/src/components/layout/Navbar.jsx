import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { logoWebp } from "../../constants/assets.js";
import { primaryNav, secondaryNav, socialLinks } from "../../constants/navigation.js";

function isActivePath(pathname, to) {
  if (to.includes("#")) return false;
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function NavDropdown({ item, pathname, onNavigate }) {
  const [open, setOpen] = useState(false);
  const active = isActivePath(pathname, item.to);

  if (!item.children?.length) {
    const isHash = item.to.includes("#");
    const className = ({ isActive }) =>
      `nav-link whitespace-nowrap !text-white/90 hover:!text-gold ${isActive || active ? "!text-gold" : ""}`;

    if (isHash) {
      return (
        <a href={item.to} className="nav-link !text-white/90 hover:!text-gold">
          {item.label}
        </a>
      );
    }
    return (
      <NavLink to={item.to} end={item.to === "/"} className={className} onClick={onNavigate}>
        {item.label}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 nav-link !text-white/90 hover:!text-gold ${active ? "!text-gold" : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown size={14} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-50 min-w-[260px] rounded-lg border border-white/10 bg-purpledark py-2 shadow-xl">
          {item.children.map((child) =>
            child.children?.length ? (
              <div key={child.label} className="border-b border-white/5 px-3 py-2 last:border-0">
                <Link
                  to={child.to}
                  className="block text-xs font-bold uppercase tracking-wide text-gold"
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
                <div className="mt-2 space-y-1">
                  {child.children.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      className="block rounded px-2 py-1.5 text-sm text-white/85 hover:bg-white/10 hover:text-gold"
                      onClick={onNavigate}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={child.to}
                to={child.to}
                className="block px-4 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:text-gold"
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}

function MobileNavGroup({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    if (item.to.includes("#")) {
      return (
        <a href={item.to} className="nav-link !text-white" onClick={onNavigate}>
          {item.label}
        </a>
      );
    }
    return (
      <Link to={item.to} className="nav-link !text-white" onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10 pb-3">
      <button
        type="button"
        className="flex w-full items-center justify-between py-2 text-left font-bold text-white"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown size={16} className={open ? "rotate-180" : ""} />
      </button>
      {open ? (
        <div className="mt-2 space-y-2 pl-3">
          {item.children.map((child) =>
            child.children?.length ? (
              <MobileNavGroup key={child.label} item={child} onNavigate={onNavigate} />
            ) : (
              <Link
                key={child.to}
                to={child.to}
                className="block text-sm text-white/80 hover:text-gold"
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const allMobileLinks = [...primaryNav.filter((l) => l.to !== "/"), ...secondaryNav];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="hidden border-b border-white/10 bg-[#802030] text-[#f4eac8] lg:block">
        <div className="container-width flex min-h-10 items-center justify-between gap-4 text-xs">
          <span className="font-medium tracking-wide">Connect with us :-</span>
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-7 w-7 place-items-center rounded-full bg-[#802030] text-[#d9c077] ring-1 ring-[#d9c077]/40 hover:opacity-90"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-purpledark text-white">
        <div className="container-width flex min-h-[72px] items-center justify-between gap-4 lg:min-h-[88px]">
          <Link to="/" className="relative shrink-0" onClick={closeMenu}>
            <span className="flex h-[72px] w-[118px] items-center justify-center bg-[#2e1a47] md:h-[90px] md:w-[140px]">
              <img src={logoWebp} alt="SNBP University" className="h-full w-full object-contain" fetchPriority="high" />
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {primaryNav.map((item) => (
              <NavDropdown key={item.label} item={item} pathname={pathname} onNavigate={closeMenu} />
            ))}
            {secondaryNav.slice(0, 3).map((item) => (
              <NavDropdown key={item.label} item={item} pathname={pathname} onNavigate={closeMenu} />
            ))}
          </nav>

          <Link to="/contact-us" className="btn-primary hidden !py-2.5 !text-xs lg:inline-flex">
            Contact
          </Link>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-purpledark px-5 py-6 lg:hidden">
          <div className="container-width flex flex-col gap-4">
            <Link to="/" className="nav-link !text-white" onClick={closeMenu}>
              Home
            </Link>
            {allMobileLinks.map((item) => (
              <MobileNavGroup key={item.label} item={item} onNavigate={closeMenu} />
            ))}
            <Link to="/admissions" className="btn-primary w-full" onClick={closeMenu}>
              Enquire Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
