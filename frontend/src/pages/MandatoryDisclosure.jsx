import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Download, Maximize2, Minus, Plus } from "lucide-react";

const documents = [
  {
    id: "university-act",
    title: "University Act",
    description: "Legislation establishing SNBP University",
    href: "https://snbpuniversity.com/assets/Act8of2024MH%20(1)%20(1)-DyF1oXLS.pdf",
  },
  {
    id: "gazette-notification",
    title: "Gazette Notification",
    description: "Official notification for the university",
    href: "https://snbpuniversity.com/assets/GazetteSearch-1%20(2)%20(1)-C2G8zAsI.pdf",
    note: "Official Gazette notification document.",
  },
];

export default function MandatoryDisclosure() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const requestedId = searchParams.get("doc");
  const activeId = documents.some((document) => document.id === requestedId)
    ? requestedId
    : documents[0].id;
  const activeDocument =
    documents.find((document) => document.id === activeId) || documents[0];
  const isPdf = activeDocument.href.toLowerCase().includes(".pdf");

  return (
    <div className="bg-[#f7f5f1]">
      <header className="ai-tadka bg-purpledark px-5 py-14 text-white sm:py-20">
        <div className="container-width">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            University information
          </p>
          <h1 className="heading-serif mt-4 text-4xl font-bold sm:text-5xl">
            Mandatory Disclosure
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Browse official university acts and notifications. Select a document
            to view the available disclosure.
          </p>
        </div>
      </header>

      <section className="ai-tadka container-width py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-purplebrand/10 bg-white p-5 shadow-soft">
            <h2 className="heading-serif text-xl font-bold text-purplebrand">
              Documents
            </h2>
            <ul aria-label="Disclosure documents" className="mt-5 space-y-3">
              {documents.map((document) => {
                const selected = document.id === activeDocument.id;
                return (
                  <li key={document.id}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setSearchParams({ doc: document.id });
                        setZoom(100);
                        setPage(1);
                      }}
                      className={`w-full rounded-xl border p-4 text-left transition ${
                        selected
                          ? "border-gold bg-[#faf7ed]"
                          : "border-slate-200 hover:border-gold/60 hover:bg-[#faf9f6]"
                      }`}
                    >
                      <span className="block font-bold text-purplebrand">
                        {document.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {document.description}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div
            className={`overflow-hidden rounded-2xl border border-purplebrand/10 bg-white shadow-soft ${
              fullscreen ? "fixed inset-4 z-50 flex flex-col" : ""
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-5">
              <h2 className="font-semibold text-purplebrand">
                {activeDocument.title}
              </h2>
              {isPdf ? (
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center rounded-lg border border-slate-200">
                    <button
                      type="button"
                      className="p-2 text-purplebrand hover:bg-mist"
                      aria-label="Previous page"
                      onClick={() => setPage((value) => Math.max(1, value - 1))}
                    >
                      ‹
                    </button>
                    <label className="flex items-center gap-1 text-xs text-slate-600">
                      Page
                      <input
                        aria-label="Page"
                        type="number"
                        min="1"
                        value={page}
                        onChange={(event) =>
                          setPage(Math.max(1, Number(event.target.value) || 1))
                        }
                        className="w-12 border-0 bg-transparent p-1 text-center text-xs outline-none"
                      />
                    </label>
                    <button
                      type="button"
                      className="p-2 text-purplebrand hover:bg-mist"
                      aria-label="Next page"
                      onClick={() => setPage((value) => value + 1)}
                    >
                      ›
                    </button>
                  </div>
                  <div className="flex items-center rounded-lg border border-slate-200">
                    <button
                      type="button"
                      className="p-2 text-purplebrand hover:bg-mist"
                      aria-label="Zoom out"
                      onClick={() => setZoom((value) => Math.max(50, value - 10))}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="min-w-12 text-center text-xs text-slate-600">
                      {zoom}%
                    </span>
                    <button
                      type="button"
                      className="p-2 text-purplebrand hover:bg-mist"
                      aria-label="Zoom in"
                      onClick={() => setZoom((value) => Math.min(150, value + 10))}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <a
                    href={activeDocument.href}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-purplebrand hover:bg-mist"
                  >
                    <Download size={15} />
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={() => setFullscreen((value) => !value)}
                    className="rounded-lg border border-slate-200 p-2 text-purplebrand hover:bg-mist"
                    aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
                  >
                    <Maximize2 size={15} />
                  </button>
                </div>
              ) : null}
            </div>

            {isPdf ? (
              <iframe
                key={`${activeDocument.id}-${page}-${zoom}`}
                title={activeDocument.title}
                src={`${activeDocument.href}#page=${page}&toolbar=0&zoom=${zoom}`}
                className={`w-full bg-slate-100 ${
                  fullscreen ? "min-h-0 flex-1" : "h-[65vh] min-h-[480px]"
                }`}
              />
            ) : (
              <div className="flex min-h-[480px] flex-col items-start justify-center p-8 sm:p-12">
                <p className="max-w-2xl leading-7 text-slate-600">
                  {activeDocument.note}
                </p>
                <a
                  href={activeDocument.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-6"
                >
                  View official disclosure
                  <ArrowUpRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
