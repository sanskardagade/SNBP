import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Maximize,
  Minus,
  Plus,
} from "lucide-react";
import { asset } from "../constants/assets.js";

const feeStructurePdf = asset("/assets/SNBP_Programs_Fee_Structure_2026-DGZltOzJ.pdf");
const scholarshipPdf = asset("/assets/SNBP%20Scholarship-4KCjclOU.pdf");
const scholarshipHero = asset("/assets/scholarship%20hero-CjPZXLq7.png");

function FeeStructureViewer() {
  const viewerRef = useRef(null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(85);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

  useEffect(() => {
    function syncFullscreen() {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    }

    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  async function toggleFullscreen() {
    setFullscreenError("");
    try {
      if (document.fullscreenElement === viewerRef.current) {
        await document.exitFullscreen();
      } else {
        await viewerRef.current?.requestFullscreen();
      }
    } catch (error) {
      setFullscreenError(
        error instanceof Error ? error.message : "Unable to change fullscreen mode."
      );
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:gap-6">
      <aside className="rounded-2xl border border-[#2e1a47]/10 bg-white p-4 shadow-[0_8px_24px_rgba(46,26,71,0.06)] md:p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#2e1a47]">
          Documents
        </h2>
        <ul aria-label="Fee structure documents">
          <li>
            <a
              href="#fee-structure-document"
              className="block rounded-xl border border-[#2e1a47]/10 bg-[#f7f4fb] px-4 py-4 text-left"
              aria-current="true"
            >
              <span className="block font-semibold text-[#2e1a47]">Fee Structure</span>
              <span className="mt-1 block text-sm leading-6 text-slate-600">
                Programme-wise tuition and fee details for 2026
              </span>
            </a>
          </li>
        </ul>
      </aside>

      <div
        ref={viewerRef}
        id="fee-structure-document"
        className="min-w-0 overflow-hidden rounded-2xl border border-[#2e1a47]/10 bg-white shadow-[0_8px_24px_rgba(46,26,71,0.08)]"
      >
        <div className="flex flex-wrap items-center gap-2 bg-[#2e1a47] px-3 py-3 text-white sm:px-4">
          <p className="mr-auto min-w-0 truncate text-sm font-medium md:text-[15px]">
            Fee Structure
          </p>
          <div className="flex items-center gap-1 rounded-lg bg-white/10 p-1">
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              className="rounded-md px-2.5 py-1.5 text-sm transition hover:bg-white/15"
            >
              <ChevronLeft size={17} />
            </button>
            <label className="flex items-center gap-1.5 px-1 text-xs text-white/80">
              <span className="sr-only">Page</span>
              <input
                type="number"
                min="1"
                value={page}
                onChange={(event) => {
                  const nextPage = Number(event.target.value);
                  if (Number.isFinite(nextPage) && nextPage >= 1) setPage(nextPage);
                }}
                className="w-12 rounded border border-white/20 bg-white/10 px-1.5 py-1 text-center text-sm text-white outline-none focus:border-[#e6c96f]"
              />
            </label>
            <button
              type="button"
              aria-label="Next page"
              onClick={() => setPage((current) => current + 1)}
              className="rounded-md px-2.5 py-1.5 text-sm transition hover:bg-white/15"
            >
              <ChevronRight size={17} />
            </button>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-white/10 p-1">
            <button
              type="button"
              aria-label="Zoom out"
              onClick={() => setZoom((current) => Math.max(50, current - 10))}
              className="rounded-md px-2 py-1.5 transition hover:bg-white/15"
            >
              <Minus size={16} />
            </button>
            <span className="min-w-10 text-center text-xs text-white/85">{zoom}%</span>
            <button
              type="button"
              aria-label="Zoom in"
              onClick={() => setZoom((current) => Math.min(150, current + 10))}
              className="rounded-md px-2 py-1.5 transition hover:bg-white/15"
            >
              <Plus size={16} />
            </button>
          </div>
          <a
            href={feeStructurePdf}
            download="SNBP-Programs-Fee-Structure-2026.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
          >
            <ArrowDownToLine size={16} />
            <span className="sr-only sm:not-sr-only">Download</span>
          </a>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
          >
            <Maximize size={16} />
            <span className="sr-only sm:not-sr-only">
              {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            </span>
          </button>
        </div>
        {fullscreenError ? (
          <p role="alert" className="bg-red-50 px-4 py-2 text-sm text-red-800">
            {fullscreenError}
          </p>
        ) : null}
        <iframe
          title="SNBP University 2026 fee structure"
          src={`${feeStructurePdf}#page=${page}&zoom=${zoom}`}
          className="block h-[65vh] min-h-[480px] w-full bg-[#f1eff4] lg:h-[720px]"
        />
        <div className="flex justify-end border-t border-[#2e1a47]/10 px-4 py-3">
          <a
            href={feeStructurePdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b245b] hover:text-[#c9a84c]"
          >
            Open <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ title, children }) {
  return (
    <article>
      <h2 className="placement-heading text-xl font-semibold leading-snug text-[#2e1a47] md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 flex min-h-[150px] items-center rounded-xl bg-[#3b245b] px-6 py-7 text-white md:min-h-[180px] md:px-8 md:py-8 lg:min-h-[200px] lg:px-10">
        <div className="w-full space-y-5 text-sm font-light leading-[1.4] text-white/90 md:text-base">
          {children}
        </div>
      </div>
    </article>
  );
}

function ScholarshipHighlights() {
  return (
    <section className="bg-[#faf8f5] px-4 py-14 md:px-6 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BenefitCard title="Scholarships">
            <p>
              <BadgeCheck className="mr-2 inline-block text-[#e6c96f]" size={18} />
              Merit, Sports, Staff Ward &amp; University Scholarships available
            </p>
            <p>
              <BadgeCheck className="mr-2 inline-block text-[#e6c96f]" size={18} />
              Up to 30% waiver on 1st year tuition fee, subject to eligibility and approval
            </p>
          </BenefitCard>

          <BenefitCard title="Education Loan Assistance">
            <p>
              <BadgeCheck className="mr-2 inline-block text-[#e6c96f]" size={18} />
              Support with admission letter, fee structure, bonafide certificate, and course
              details for bank/NBFC applications.
            </p>
          </BenefitCard>

          <BenefitCard title="Career Guidance & Certification">
            <p>
              <BadgeCheck className="mr-2 inline-block text-[#e6c96f]" size={18} />
              Guidance for certifications from:
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pl-7 text-sm font-semibold text-white/90">
              {["Google", "Microsoft", "AWS", "CISCO", "IBM", "GitHub"].map((provider) => (
                <li key={provider}>{provider}</li>
              ))}
            </ul>
          </BenefitCard>
        </div>
      </div>
    </section>
  );
}

export default function Scholarships() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="relative overflow-hidden bg-[#2e1a47] md:min-h-[420px] lg:min-h-[480px]">
        <img
          src={scholarshipHero}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="pointer-events-none absolute bottom-0 right-8 hidden h-full max-w-[50%] object-contain object-bottom object-right md:block lg:right-16 lg:max-w-[46%]"
        />
        <div className="relative z-10 mx-auto max-w-[1500px] px-4 py-10 md:flex md:min-h-[420px] md:items-center md:px-6 md:py-20 lg:min-h-[480px] lg:px-10 lg:py-24">
          <div className="relative max-w-[640px] md:max-w-[52%] lg:max-w-[50%]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[38%] top-0 h-[min(320px,65vw)] w-[min(400px,82vw)] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl md:left-[40%] md:h-[380px] md:w-[480px] lg:h-[420px] lg:w-[540px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(212, 184, 90, 0.22) 0%, rgba(180, 145, 75, 0.12) 42%, rgba(46, 26, 71, 0) 72%)",
              }}
            />
            <div className="relative z-10">
              <h1 className="placement-heading text-[2.2rem] font-semibold leading-tight text-[#f3e8c8] md:text-[2.8rem] lg:text-[3.2rem]">
                Fee Structure and Scholarships
              </h1>
              <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/80 md:text-base">
                Review programme-wise tuition and fee details below. Use the toolbar to navigate
                pages, zoom, download, or view fullscreen.
              </p>
            </div>
          </div>
          <img
            src={scholarshipHero}
            alt="Graduate celebrating with a diploma"
            loading="eager"
            decoding="async"
            className="relative z-10 mx-auto mt-10 block w-full max-w-[360px] object-contain sm:max-w-[400px] md:hidden"
          />
        </div>
      </section>

      <section id="fee-structure" className="bg-[#faf8f5] px-4 py-12 md:px-6 md:py-16 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <FeeStructureViewer />
        </div>
      </section>

      <ScholarshipHighlights />

      <section className="bg-[#faf8f5] px-4 pb-16 md:px-6 md:pb-24 lg:px-10">
        <div className="relative mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-[#2e1a47] px-6 py-10 text-center text-white shadow-[0_16px_45px_rgba(46,26,71,0.16)] md:flex-row md:px-10 md:py-12 md:text-left">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#c9a84c]/15 blur-3xl"
          />
          <div className="relative flex items-center gap-4">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#e6c96f] sm:flex">
              <GraduationCap size={30} />
            </div>
            <div>
              <p className="placement-heading text-xl text-[#e6c96f] md:text-2xl">
                SNBP University Scholarships : 2026
              </p>
              <p className="mt-2 text-sm text-white/75">
                Download the scholarship details and explore available support.
              </p>
            </div>
          </div>
          <a
            href={scholarshipPdf}
            download="SNBP-Scholarships-2026.pdf"
            className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#e6c96f] px-6 py-3 text-sm font-bold text-[#2e1a47] transition hover:bg-[#f1dc94]"
          >
            <ArrowDownToLine size={18} />
            Download
          </a>
        </div>
      </section>
    </div>
  );
}
