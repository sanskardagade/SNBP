import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { footerQuickLinks, regulatoryLinks, socialLinks } from "../../constants/navigation.js";
import { siteMeta as defaultMeta } from "../../constants/siteMeta.js";

export default function Footer({ meta = defaultMeta }) {
  const email = meta.email;
  const phones = meta.phones;
  const address = meta.address;
  const legal = meta.legalNote;
  const hours = meta.officeHours;

  return (
    <footer className="bg-purpledark text-white">
      <div className="container-width grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-heading text-xl font-semibold text-gold">SNBP University</div>
          <p className="mt-4 text-sm leading-7 text-white/70">{legal}</p>
          <p className="mt-4 text-sm leading-7 text-white/70">{address}</p>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gold">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/75">
            {footerQuickLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="regulatory">
          <h3 className="mb-4 font-bold text-gold">Regulatory Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/75">
            {regulatoryLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gold">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/75">
            <li className="flex gap-2">
              <Phone className="shrink-0 text-gold" size={16} />
              {phones.join(" | ")}
            </li>
            <li className="flex gap-2">
              <Mail className="shrink-0 text-gold" size={16} />
              <a href={`mailto:${email}`} className="hover:text-gold">
                {email}
              </a>
            </li>
            <li>
              <a href="https://snbpuniversity.com/" className="hover:text-gold" target="_blank" rel="noreferrer">
                www.snbpuniversity.com
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/55">Office Hours: {hours}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-xs font-bold hover:border-gold hover:text-gold"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width py-5 text-center text-xs text-white/45">
          © {new Date().getFullYear()} SNBP University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
