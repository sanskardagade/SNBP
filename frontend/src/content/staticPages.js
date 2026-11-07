import { asset } from "../constants/assets.js";

const campus = asset("/assets/shot-young-student-with-college-certifiicate-standing-studio-high-quality-photo-D1Z7fejE.webp");
export const staticPages = {
  "/about": {
    title: "About SNBP University",
    eyebrow: "About Us",
    lead: "A legacy of educational excellence rooted in Indian values and modern, world-class learning.",
    image: asset("/assets/school-of-management-SNBP-University-BqD54UwP.webp"),
    sections: [
      {
        heading: "A Legacy of Excellence, A Vision for Tomorrow",
        body: [
          "SNBP University is more than an institute. It is a movement rooted in the wisdom of ancient Indian philosophy and powered by modern, world-class education. Founded on the vision of Shri Dasharath K. Bhosale, we nurture leaders who combine knowledge with character.",
          "For nearly three decades, we have been shaping brilliant minds across Arts, Commerce, and Science. Our 29-year track record speaks not only through numbers, but also through the careers built, innovations created, and communities strengthened by our graduates."
        ]
      }
    ]
  },
  "/snbp-leadership": {
    title: "SNBP Leadership",
    eyebrow: "Leadership",
    lead: "Leaders who combine decades of educational service with national recognition in sports and social impact.",
    sections: [
      {
        heading: "Guiding the university",
        body: [
          "Dr. D. K. Bhosale, President of SNBP University, has pioneered multiple schools and institutes across Maharashtra.",
          "Dr. Vrishali Bhosale leads the SE Society with distinguished contributions to sports administration and community leadership."
        ]
      }
    ]
  },
  "/life-at-snbp": {
    title: "Life at SNBP",
    eyebrow: "Campus",
    lead: "Modern amenities, inspiring community, and galleries that capture everyday student life.",
    image: campus,
    sections: [
      {
        heading: "Campus experience",
        body: [
          "Smart classrooms, labs, library resources, sports facilities, and cultural activities create unforgettable student experiences.",
          "Browse campus galleries for infrastructure highlights and moments from student life at SNBP University, Chikhali, Pune."
        ]
      }
    ]
  },
  "/mandatory-disclosure": {
    title: "Mandatory Disclosure",
    eyebrow: "Regulatory",
    lead: "Statutory disclosures for SNBP University as a Maharashtra State Private University.",
    sections: [
      {
        heading: "Regulatory information",
        body: [
          "University establishment under the Maharashtra Private Universities Act, 2023 (as amended).",
          "Refer to regulatory links in the footer for the University Act, Gazette Notification, and Fee Structure documents."
        ]
      }
    ]
  }
};
