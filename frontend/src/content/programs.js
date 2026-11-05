import { asset } from "../constants/assets.js";

const techImage = asset(
  "/assets/shot-young-student-with-college-certifiicate-standing-studio-high-quality-photo-D1Z7fejE.webp"
);
const artsImage = asset("/assets/School-Of-Arts-Commerce-Science-SNBP-University-BqD54UwP.webp");

function program(slug, title, school, summary, highlights = []) {
  return { slug, title, school, summary, highlights, heroImage: school.includes("Technology") ? techImage : artsImage };
}

export const schoolPages = {
  /*
  "/school-of-technology": {
    title: "School of Technology",
    eyebrow: "Programs",
    lead: "Industry-aligned B.Tech programmes with labs, projects, and placement-focused training.",
    bullets: [
      "B.Tech Computer Science Engineering",
      "B.Tech Information Technology",
      "B.Tech CSE (AI & Machine Learning)",
      "B.Tech CSE (Data Science)",
      "B.Tech CSE (Cyber Security)"
    ]
  },
  */
  "/school-of-arts-commerce-science": {
    title: "School of Arts, Commerce & Science",
    eyebrow: "Programs",
    lead: "Four AI-first programs for future business leaders, developers, AI engineers and managers.",
    bullets: [
      "BBA: Business + AI",
      "BCA: Code + AI",
      "MCA: Advanced Computing + AI",
      "MBA: Management + AI"
    ]
  }
};

export const programPages = {
  /*
  "/school-of-technology/btech-cse": program(
    "btech-cse",
    "B.Tech Computer Science Engineering",
    "School of Technology",
    "Build software, systems, and digital products with a curriculum aligned to industry needs.",
    ["Programming & software engineering", "Databases & cloud fundamentals", "Projects & internships"]
  ),
  "/school-of-technology/btech-it": program(
    "btech-it",
    "B.Tech Information Technology",
    "School of Technology",
    "Focus on enterprise systems, networking, and IT infrastructure for modern organisations.",
    ["Networking & systems", "Enterprise applications", "Industry certifications"]
  ),
  "/school-of-technology/btech-cse-aiml": program(
    "btech-cse-aiml",
    "B.Tech CSE (AI & Machine Learning)",
    "School of Technology",
    "Learn intelligent systems, data pipelines, and applied machine learning.",
    ["ML foundations", "AI project labs", "Industry problem statements"]
  ),
  "/school-of-technology/btech-cse-data-science": program(
    "btech-cse-data-science",
    "B.Tech CSE (Data Science)",
    "School of Technology",
    "Turn data into decisions with analytics, visualisation, and engineering skills.",
    ["Data engineering", "Analytics & visualisation", "Capstone projects"]
  ),
  "/school-of-technology/btech-cse-cyber-security": program(
    "btech-cse-cyber-security",
    "B.Tech CSE (Cyber Security)",
    "School of Technology",
    "Secure digital ecosystems with hands-on security labs and enterprise scenarios.",
    ["Security fundamentals", "Network defence", "Compliance & governance basics"]
  ),
  */
  "/school-of-arts-commerce-science/bba": program(
    "bba",
    "BBA: Business + AI",
    "School of Arts, Commerce & Science",
    "Lead tomorrow’s businesses with today’s AI.",
    ["AI startup studio", "Marketing with AI", "Data-driven decisions", "Business simulation games"]
  ),
  "/school-of-arts-commerce-science/bca": program(
    "bca",
    "BCA: Code + AI",
    "School of Arts, Commerce & Science",
    "Learn to code. Then teach machines to think.",
    ["Python and web development", "AI pair-programming", "Semester hackathons", "Applied AI mini projects"]
  ),
  "/school-of-arts-commerce-science/mca": program(
    "mca",
    "MCA: Advanced Computing + AI",
    "School of Arts, Commerce & Science",
    "From developer to AI architect.",
    ["Generative AI and LLM lab", "MLOps and cloud", "Research track", "Industry capstone"]
  ),
  "/school-of-arts-commerce-science/mba": program(
    "mba",
    "MBA: Management + AI",
    "School of Arts, Commerce & Science",
    "Management for the age of intelligent machines.",
    ["AI for managers", "Live case lab", "Business analytics studio", "Leadership lab"]
  ),
  /*
  "/school-of-arts-commerce-science/bsc-computer-science": program(
    "bsc-computer-science",
    "B.Sc. Computer Science",
    "School of Arts, Commerce & Science",
    "Strong computing foundations with flexibility for higher studies and industry roles.",
    ["Core CS & mathematics", "Software development", "Research orientation"]
  ),
  "/school-of-arts-commerce-science/ba-psychology": program(
    "ba-psychology",
    "BA Psychology",
    "School of Arts, Commerce & Science",
    "Understand behaviour, cognition, and wellbeing with applied learning.",
    ["Counselling basics", "Research methods", "Community projects"]
  ),
  "/school-of-arts-commerce-science/ba-english": program(
    "ba-english",
    "BA English",
    "School of Arts, Commerce & Science",
    "Develop communication, literature, and critical thinking for diverse careers.",
    ["Language & literature", "Media & communication", "Creative writing"]
  ),
  "/school-of-arts-commerce-science/ba-economics": program(
    "ba-economics",
    "BA Economics",
    "School of Arts, Commerce & Science",
    "Analyse markets, policy, and development with quantitative tools.",
    ["Micro & macroeconomics", "Data interpretation", "Policy perspectives"]
  ),
  "/school-of-arts-commerce-science/bca": program(
    "bca",
    "BCA",
    "School of Arts, Commerce & Science",
    "Application-focused computing degree for software and IT careers.",
    ["Application development", "Web & mobile stacks", "Internship pathways"]
  ),
  "/school-of-arts-commerce-science/bcom": program(
    "bcom",
    "B.Com",
    "School of Arts, Commerce & Science",
    "Commerce education with finance, accounting, and business technology exposure.",
    ["Accounting & finance", "Business law", "Digital business tools"]
  ),
  "/school-of-arts-commerce-science/mca": program(
    "mca",
    "MCA",
    "School of Arts, Commerce & Science",
    "Postgraduate programme for advanced software, systems, and leadership roles.",
    ["Advanced programming", "Enterprise architecture", "Placement support"]
  )
  */
};
