import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";
import { staticPages } from "../content/staticPages.js";

export default function StaticPage({ pageKey }) {
  const page = staticPages[pageKey];
  if (!page) {
    return (
      <main className="container-width py-24 text-center">
        <h1 className="font-heading text-3xl text-purplebrand">Page not found</h1>
        <Link to="/" className="btn-primary mt-6">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />
      <section className="section-pad">
        <div className="container-width grid gap-12 lg:grid-cols-2">
          {page.image ? (
            <img src={page.image} alt="" className="h-[380px] w-full rounded-xl object-cover shadow-soft" loading="lazy" />
          ) : (
            <div className="hidden lg:block" />
          )}
          <div className="space-y-10">
            {page.sections?.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-2xl font-semibold text-purplebrand">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/admissions" className="btn-primary">
              Apply for 2026
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
