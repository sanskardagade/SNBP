import SectionHeading from "../common/SectionHeading.jsx";

const galleryImages = [
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
];

export default function CampusLifeSection({ campusGalleries = [] }) {
  return (
    <section className="section-pad">
      <div className="container-width">
        <SectionHeading
          eyebrow="Life At SNBP"
          title="Where modern amenities meet an inspiring community"
          description="Unforgettable student experiences on campus — galleries and highlights inspired by the official SNBP University site."
          center
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {galleryImages.map((src, i) => (
            <img key={src} src={src} alt="" className="h-56 w-full rounded-xl object-cover shadow-soft" loading="lazy" />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {campusGalleries.map((g) => (
            <a
              key={g.title}
              href="#gallery"
              className="rounded-lg border border-purplebrand/15 bg-white px-4 py-3 text-sm font-bold text-purplebrand shadow-sm hover:border-gold"
            >
              Open {g.title} · {g.count} gallery
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
