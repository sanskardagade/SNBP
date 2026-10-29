import SectionHeading from "../common/SectionHeading.jsx";
import Accordion from "../common/Accordion.jsx";

export default function FaqSection({ faqs = [] }) {
  return (
    <section className="section-pad bg-mist">
      <div className="container-width">
        <SectionHeading title="FAQs" center />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
