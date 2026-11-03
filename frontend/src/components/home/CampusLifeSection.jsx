import { useEffect, useRef, useState } from "react";
import { Expand, X } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function CampusLifeSection({ campusGalleries = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogRef = useRef(null);
  const active = campusGalleries[activeIndex] || campusGalleries[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (dialogOpen && !dialog.open) dialog.showModal();
    else if (!dialogOpen && dialog.open) dialog.close();
  }, [dialogOpen]);

  if (!active) return null;

  function moveGallery(direction) {
    setActiveIndex((index) => (index + direction + campusGalleries.length) % campusGalleries.length);
  }

  return (
    <section className="home-campus section-pad" id="campus-life">
      <div className="container-width">
        <SectionHeading
          eyebrow="Step outside the timetable"
          title="Beyond the classroom, a world of possibilities."
          description="Take a look at the spaces and campus moments that make up everyday life at SNBP."
          center
        />

        <div className="home-campus-feature campus-feature mt-10 overflow-hidden bg-purpledark">
          <img
            src={active.image}
            alt={`${active.title} gallery`}
            className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            loading="lazy"
          />
          <div className="campus-feature-caption">
            <div>
              <p>{active.title}</p>
              <span>{active.count} photos</span>
            </div>
            <button type="button" onClick={() => setDialogOpen(true)} aria-label={`View ${active.title} gallery full screen`}>
              <Expand size={18} aria-hidden="true" />
              <span>View gallery</span>
            </button>
          </div>
        </div>
        <div className="home-campus-galleries mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" aria-label="Campus photo collections">
          {campusGalleries.map((gallery, index) => (
            <button
              key={`${gallery.title}-${gallery.count}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              className={`home-campus-gallery group overflow-hidden border text-left transition ${
                index === activeIndex
                  ? "is-active"
                  : ""
              }`}
            >
              <img
                src={gallery.image}
                alt=""
                className="h-24 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-32"
                loading="lazy"
              />
              <span className="block p-3">
                <span className="block text-sm font-bold text-purplebrand">{gallery.title}</span>
                <span className="mt-1 block text-xs text-slate-500">{gallery.count} photos</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="campus-dialog"
        aria-label={`${active.title} campus gallery`}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") moveGallery(1);
          if (event.key === "ArrowLeft") moveGallery(-1);
        }}
        onClose={() => setDialogOpen(false)}
      >
        <div className="campus-dialog-content">
          <button type="button" className="campus-dialog-close" onClick={() => setDialogOpen(false)} aria-label="Close campus gallery">
            <X size={21} />
          </button>
          {campusGalleries.length > 1 ? (
            <>
              <button type="button" className="campus-dialog-prev" onClick={() => moveGallery(-1)} aria-label="Previous campus image">‹</button>
              <button type="button" className="campus-dialog-next" onClick={() => moveGallery(1)} aria-label="Next campus image">›</button>
            </>
          ) : null}
          <img src={active.image} alt={`${active.title} at SNBP University`} />
          <div className="campus-dialog-caption">
            <span>{active.title}</span>
            <span>{activeIndex + 1} / {campusGalleries.length} · {active.count} photos</span>
          </div>
        </div>
      </dialog>
    </section>
  );
}
