import { Clock3, Globe2, Mail, MapPin, Phone } from "lucide-react";
import AdmissionEnquiryForm from "../components/forms/AdmissionEnquiryForm.jsx";
import { siteMeta } from "../constants/siteMeta.js";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteMeta.address)}`;
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteMeta.address)}&output=embed`;

function ContactCard({ icon: Icon, label, children, className = "" }) {
  return (
    <div
      className={`group flex gap-4 rounded-[18px] border border-[#2e1a47]/10 bg-white/85 p-5 shadow-[0_10px_30px_rgba(46,26,71,0.06)] transition hover:border-[#c9a84c]/50 hover:shadow-[0_16px_40px_rgba(46,26,71,0.12)] md:p-6 ${className}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2e1a47] text-[#d4af37] transition group-hover:bg-[#802030] group-hover:text-white">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#802030]">{label}</p>
        <div className="mt-2 text-[15px] font-normal leading-relaxed text-[#3a3a3a] md:text-base">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#2e1a47]">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-16 text-center md:px-6 md:py-20 lg:px-10 lg:py-24">
          <p className="placement-heading text-[14px] uppercase tracking-[0.28em] text-[#d4af37] md:text-base">
            Get In Touch
          </p>
          <h1 className="placement-heading mt-4 text-[2.5rem] font-normal leading-[1.1] text-white md:text-[3.25rem] lg:text-[3.75rem]">
            Contact Us
          </h1>
          <div aria-hidden="true" className="mx-auto mt-5 h-px w-24 bg-[#c9a84c]" />
          <p className="mx-auto mt-5 max-w-[60ch] text-[15px] font-light leading-relaxed text-white/85 md:text-[17px]">
            Whether you are exploring programmes, planning a campus visit, or ready to apply, our admissions team in Pune
            is here to help you take the next step.
          </p>
        </div>
      </section>

      <section
        id="contact-details"
        className="relative overflow-hidden bg-[#faf6ef] px-4 py-14 md:px-6 md:py-20 lg:px-10 lg:py-24"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-[560px] w-[560px] rounded-full bg-[#d4af37]/[0.06] blur-3xl md:h-[680px] md:w-[680px]" />
        <div className="relative z-10 mx-auto grid max-w-[1320px] items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <h2 className="placement-heading text-[1.9rem] font-medium leading-[1.15] text-[#2e1a47] md:text-[2.35rem]">
              Reach The Campus
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] font-normal leading-[1.8] text-[#3a3a3a] md:text-base">
              Our campus sits on the Dehu–Alandi Road in Chikhali, Pimpri–Chinchwad, well connected to Pune&apos;s
              education and technology corridor.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ContactCard icon={MapPin} label="Campus Address" className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <p>{siteMeta.address}</p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-[#802030] transition hover:text-[#6b1a28]"
                >
                  Get Directions <span aria-hidden="true">→</span>
                </a>
              </ContactCard>

              <ContactCard icon={Phone} label="Call Us">
                {siteMeta.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block transition hover:text-[#802030]"
                  >
                    {phone.replace(/(\+91) ?(\d{5})(\d{5})/, "$1 $2 $3")}
                  </a>
                ))}
              </ContactCard>

              <ContactCard icon={Mail} label="Email Us">
                <a href={`mailto:${siteMeta.email}`} className="break-all transition hover:text-[#802030]">
                  {siteMeta.email}
                </a>
              </ContactCard>

              <ContactCard icon={Clock3} label="Office Hours">
                <p>{siteMeta.officeHours}</p>
              </ContactCard>

              <ContactCard icon={Globe2} label="Website">
                <a
                  href="https://www.snbpuniversity.com"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all transition hover:text-[#802030]"
                >
                  www.snbpuniversity.com
                </a>
              </ContactCard>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <AdmissionEnquiryForm variant="contact" />
          </div>
        </div>
      </section>

      <section id="campus-map" className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#802030]">Find Us</p>
              <h2 className="placement-heading mt-2 text-[1.9rem] font-medium leading-[1.15] text-[#2e1a47] md:text-[2.35rem]">
                SNBP University, Pune
              </h2>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#802030] px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-[#6b1a28]"
            >
              Open In Google Maps
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-[#2e1a47]/[0.12] shadow-[0_20px_50px_rgba(46,26,71,0.14)]">
            <iframe
              title="SNBP University campus location"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[340px] w-full border-0 md:h-[440px] lg:h-[500px]"
            />
            <div className="flex flex-col gap-2 bg-[#2e1a47] px-5 py-4 text-white md:flex-row md:items-center md:gap-4 md:px-7 md:py-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d4af37]">
                <MapPin size={20} aria-hidden="true" />
              </span>
              <p className="text-[14px] font-light leading-relaxed text-white/90 md:text-[15px]">{siteMeta.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
