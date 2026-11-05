import { homeDefaults } from "../content/homeDefaults.js";
import { programPages, schoolPages } from "../content/programs.js";
import { staticPages } from "../content/staticPages.js";
import { siteMeta } from "../constants/siteMeta.js";

function normalize(value) {
  return String(value).toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function localReply(answer, path, label) {
  return {
    answer,
    source: "Published SNBP University website content",
    fallback: { path, label },
  };
}

export function getLocalAssistantReply(question) {
  const query = normalize(question);
  const program = Object.entries(programPages).find(([path, detail]) => {
    const slug = normalize(path.split("/").pop().replace(/-/g, " "));
    const title = normalize(detail.title);
    return (slug && query.includes(slug)) || (title && query.includes(title));
  });

  if (/eligib|qualif|entrance|requirement|criteria/.test(query)) {
    return localReply(
      "Eligibility requirements vary by programme. The Admissions page lists the published requirements for each programme.",
      "/admissions",
      "View admission requirements"
    );
  }

  if (/scholarship|financial aid|fee structure/.test(query)) {
    const faq = homeDefaults.faqs.find((item) => normalize(item.question).includes("scholarship"));
    return localReply(
      faq?.answer || "Please contact the admissions team for current scholarship and fee information.",
      "/scholarships",
      "Explore scholarships"
    );
  }

  if (program) {
    const [path, detail] = program;
    return localReply(`${detail.title}: ${detail.summary}`, path, "View programme");
  }

  if (/email|phone|call|contact|address|location|where/.test(query)) {
    return localReply(
      `Email: ${siteMeta.email}\nPhone: ${siteMeta.phones.join(" · ")}\nAddress: ${siteMeta.address}\nOffice hours: ${siteMeta.officeHours}`,
      "/contact-us",
      "Contact the university"
    );
  }

  if (/faculty|teacher|professor|leadership|team/.test(query)) {
    return localReply(
      "The university website publishes leadership and team information on the Our Team page. I can’t confirm individual faculty details from the content available here.",
      "/our-team",
      "View the university team"
    );
  }

  if (/facilit|campus|library|classroom|laborator|sports/.test(query)) {
    const campus = staticPages["/life-at-snbp"];
    return localReply(
      campus.sections.flatMap((section) => section.body).join(" "),
      "/life-at-snbp",
      "Explore campus life"
    );
  }

  if (/announcement|news|event|latest update/.test(query)) {
    return localReply(
      "I don’t have a verified current announcement in the university content available to me. Please check the university website or contact the admissions team for the latest updates.",
      "/contact-us",
      "Contact the university"
    );
  }

  if (/course|program|programme|degree|department|school|study|offer/.test(query)) {
    const schools = Object.values(schoolPages)
      .map((school) => `${school.title}: ${school.bullets.join(", ")}`)
      .join("\n");
    return localReply(schools, "/school-of-arts-commerce-science", "Explore programmes");
  }

  if (/admission|apply|application|enrol|enroll/.test(query)) {
    const faq = homeDefaults.faqs.find((item) => normalize(item.question).includes("apply"));
    return localReply(
      faq?.answer || "Visit the Admissions page to enquire about the application process.",
      "/admissions",
      "Visit admissions"
    );
  }

  return localReply(
    "I can only answer from information published on this website, and I couldn’t find a verified answer to that question. Try asking about programmes, admissions, campus facilities, or contact details.",
    "/contact-us",
    "Contact the university"
  );
}
