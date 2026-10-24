import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { mainNavLinks } from "../../constants/navigation.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-purpledark text-white shadow-md">
      <div className="container-width flex min-h-[72px] items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 flex-col items-center" onClick={() => setOpen(false)}>
          <div className="relative -mb-3 rounded-b-lg bg-purplebrand px-4 pb-3 pt-2 shadow-md">
            <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-gold bg-purpledark text-[10px] font-black leading-tight text-gold">
              SNBP
            </div>
          </div>
          <span className="mt-4 hidden text-[10px] font-bold uppercase tracking-[.2em] text-gold sm:block">
            University
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link !text-white/90 hover:!text-gold ${isActive ? "!text-gold" : ""}`
            }
          >
            Home
          </NavLink>
          {mainNavLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link !text-white/90 hover:!text-gold ${isActive ? "!text-gold" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-purpledark px-5 py-4 lg:hidden">
          <div className="container-width flex flex-col gap-4">
            <NavLink to="/" end onClick={() => setOpen(false)} className="nav-link !text-white">
              Home
            </NavLink>
            {mainNavLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className="nav-link !text-white">
                {label}
              </NavLink>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="btn-primary w-full">
              Enquire Now
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
