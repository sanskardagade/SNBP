import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { logoWebp } from "../../constants/assets.js";
import { primaryNav, secondaryNav, socialLinks } from "../../constants/navigation.js";

const mobileNavLinkClass = "block py-2 text-sm font-bold leading-5 text-white";

function isActivePath(pathname, to) {
  if (to.includes("#")) return false;
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function DesktopProgramSchool({ school, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        to={school.to}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center justify-between gap-5 rounded px-4 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-gold focus-visible:bg-white/10 focus-visible:text-gold"
        onClick={onNavigate}
      >
        <span>{school.label}</span>
        <ChevronRight size={16} className="shrink-0" />
      </Link>
      {open ? (
        <ul className="absolute left-full top-0 z-50 max-h-[calc(100dvh-6rem)] min-w-[280px] overflow-y-auto overscroll-contain rounded-lg border border-white/10 bg-purpledark py-2 shadow-xl">
          {school.children.map((course) => (
            <li key={course.to}>
              <Link
                to={course.to}
                className="block px-4 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:text-gold focus-visible:bg-white/10 focus-visible:text-gold"
                onClick={onNavigate}
              >
                {course.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
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
              <DesktopProgramSchool
                key={child.label}
                school={child}
                onNavigate={onNavigate}
              />
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
        <a href={item.to} className={mobileNavLinkClass} onClick={onNavigate}>
          {item.label}
        </a>
      );
    }
    return (
      <Link to={item.to} className={mobileNavLinkClass} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10 pb-3">
      <button
        type="button"
        className={`${mobileNavLinkClass} flex w-full items-center justify-between text-left`}
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
                className={`${mobileNavLinkClass} text-white/80 hover:text-gold`}
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
          <Link to="/" className="relative shrink-0 py-2" onClick={closeMenu}>
            <img
              src={logoWebp}
              alt="SNBP University"
              className="h-14 w-auto max-w-[130px] object-contain sm:h-16 md:h-[72px] md:max-w-[150px]"
              fetchPriority="high"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {primaryNav.map((item) => (
              <NavDropdown key={item.label} item={item} pathname={pathname} onNavigate={closeMenu} />
            ))}
            {secondaryNav.slice(0, 3).map((item) => (
              <NavDropdown key={item.label} item={item} pathname={pathname} onNavigate={closeMenu} />
            ))}
          </nav>

          <Link to="/contact-us" className="btn-primary !hidden !py-2.5 !text-xs lg:!inline-flex">
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
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-purpledark px-5 pb-24 pt-6 lg:hidden">
          <div className="container-width flex flex-col gap-4">
            <Link to="/" className={mobileNavLinkClass} onClick={closeMenu}>
              Home
            </Link>
            {allMobileLinks.map((item) => (
              <MobileNavGroup key={item.label} item={item} onNavigate={closeMenu} />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
