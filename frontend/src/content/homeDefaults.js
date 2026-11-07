import {
  aboutCampusImage,
  asset,
  heroIntroGif,
  leaderBhosale,
  leaderVrushali,
} from "../constants/assets.js";

export const homeDefaults = {
  hero: {
    title: "Big questions. Clear direction. Your next chapter starts here.",
    subtitle:
      "Explore programmes across technology, arts, commerce and science—and find a next step that feels like yours.",
    poster: heroIntroGif,
    societyLabel: "Subhadra Educational Society.",
  },
  stats: [
    { value: "29", label: "Years in education" },
    { value: "20+", label: "Institutes across the SNBP Group" },
    { value: "30000+", label: "Students across SNBP campuses" },
  ],
  about: {
    eyebrow: "Our point of view",
    title: "An environment where curiosity finds direction.",
    paragraphs: [
      "At SNBP University, learning begins with a question: what could you do with what you discover? Our roots in the Subhadra Educational Society bring a long-standing commitment to education into a university shaped for today's learners.",
      "Across technology, arts, commerce and science, students can explore ideas, build practical knowledge and develop the character to put learning to thoughtful use.",
    ],
    image: aboutCampusImage,
  },
  schools: [
    /*
    {
      id: "technology",
      name: "School of Technology",
      to: "/school-of-technology",
      brochure: asset("/assets/SNBP%20UNIVERSITY%20BROCHURE%20B.TECH%20(2)-DNIxMGRG.pdf"),
      programs: [
        { name: "B.Tech Computer Science Engineering", to: "/school-of-technology/btech-cse" },
        { name: "B.Tech Information Technology", to: "/school-of-technology/btech-it" },
        { name: "B.Tech CSE Artificial Intelligence & Machine Learning", to: "/school-of-technology/btech-cse-aiml" },
        { name: "B.Tech CSE Artificial Intelligence & Data Science", to: "/school-of-technology/btech-cse-data-science" },
        { name: "B.Tech CSE Cyber Security", to: "/school-of-technology/btech-cse-cyber-security" },
      ],
      image: asset("/assets/Layer%205-clean-CYIX52QV.png"),
    },
    */
    {
      id: "arts-commerce-science",
      name: "School of Arts, Commerce & Science",
      to: "/school-of-management",
      brochure: asset("/assets/school-of-management-SNBP-University-BqD54UwP.pdf"),
      programs: [
        { name: "BBA", to: "/school-of-management/bba" },
        { name: "BCA", to: "/school-of-management/bca" },
        { name: "MCA", to: "/school-of-management/mca" },
        { name: "MBA", to: "/school-of-management/mba" },
      ],
      image: asset("/assets/Untitled%20design-CYPUEzTN.webp"),
    },
  ],
  pillars: [
    {
      title: "Grow beyond the syllabus",
      description:
        "Build knowledge, character, creativity and values as part of a broader education.",
    },
    {
      title: "Learn with purpose",
      description:
        "Explore academic foundations with guidance from faculty, researchers and practitioners.",
    },
    {
      title: "Take ideas into practice",
      description:
        "Projects and industry perspectives can connect classroom learning with professional practice.",
    },
    {
      title: "Keep a wider view",
      description:
        "Broaden your perspective while staying grounded in the values and communities around you.",
    },
    {
      title: "Make room for ideas",
      description:
        "Hands-on projects give curious students space to test questions and develop thoughtful solutions.",
    },
    {
      title: "Study in Pune",
      description:
        "Pune's education and technology communities give students a wider context for their studies.",
    },
  ],
  leadership: [
    {
      name: "Dr. D. K. Bhosale",
      role: "President, SNBP University",
      bio: "A pioneer in education who has helped establish schools, junior colleges and higher education institutes across Maharashtra. Recipient of the Excellence in Education Award 2022 in Mauritius.",
      image: leaderBhosale,
    },
    {
      name: "Dr. Vrishali Bhosale",
      role: "President, SE Society",
      bio: "An education leader and President of the Nehru Hockey Federation, New Delhi. Recipient of the Lifetime Achievement Award at the MIMANSA Award Ceremony 2025.",
      image: leaderVrushali,
    },
  ],
  partnershipTabs: [
    {
      id: "corporate",
      title: "See ideas in practice",
      points: [
        "Live projects and case studies from partner companies",
        "Guest lectures and industry insights",
        "Curriculum shaped with input from industry",
        "Consulting projects for faculty and advanced students",
      ],
    },
    {
      id: "certification",
      title: "Build a skills toolkit",
      points: [
        "Industry certifications integrated into learning",
        "Preparation courses alongside programme content",
        "Support for recognised certification exams",
        "Credentials that strengthen career readiness",
      ],
    },
    {
      id: "internship",
      title: "Learn beyond the timetable",
      points: [
        "Internship pathways with partner organisations",
        "Mentorship from industry professionals",
        "Practical experience in real work settings",
        "Preparation for future career opportunities",
      ],
    },
    {
      id: "research",
      title: "Start with a better question",
      points: [
        "Work on relevant research questions",
        "Explore applied research and emerging ideas",
        "Learn from industry data and challenges",
        "Build skills in inquiry and collaboration",
      ],
    },
  ],
  centreOfExcellence: [
    "Masterclasses that open new perspectives",
    "Technology bootcamps for deeper practice",
    "Real-world questions to work through",
    "Hackathons and focused sprint challenges",
    "Project mentoring, one step at a time",
    "Portfolio reviews with a fresh perspective",
    "Get ready to make the most of internships",
    "Build skills for the move from study to work",
  ],
  recognitions: [
    {
      title: "Lokmat School Icon Awards",
      description: "Recognising excellence and leadership in education.",
      image: asset("/assets/recognition-ribbon-a-CTBSz7Mn.png"),
    },
    {
      title: "London Book Of Records 2025",
      description: "Celebrating a milestone achievement by the SNBP community.",
      image: asset("/assets/recognition-ribbon-b-Dtzwfvn1.png"),
    },
    {
      title: "School Chain Of The Years 2023",
      description: "Celebrating the SNBP group's contribution to education.",
      image: asset("/assets/recognition-ribbon-a-CTBSz7Mn.png"),
    },
    {
      title: "Excellence In Education Award",
      description: "Recognising innovation in education and student achievement.",
      image: asset("/assets/recognition-ribbon-b-Dtzwfvn1.png"),
    },
    {
      title: "Guinness World Record",
      description: "A record honouring the courage of the Kargil heroes.",
      image: asset("/assets/recognition-trophy-DBhSOfP0.png"),
    },
    {
      title: "London Book Of World Records 2025",
      description: "A milestone celebrating achievements across the SNBP community.",
      image: asset("/assets/recognition-trophy-DBhSOfP0.png"),
    },
  ],
  campusGalleries: [
    {
      title: "Campus View",
      count: 10,
      image: asset("/assets/Screenshot%202026-05-09%20at%2012.11.31%E2%80%AFPM-CVS5MS2j.png"),
    },
    {
      title: "Campus View",
      count: 7,
      image: asset("/assets/Screenshot%202026-05-09%20at%2012.12.54%E2%80%AFPM-GCLF8IaP.png"),
    },
    {
      title: "Campus Life",
      count: 19,
      image: asset("/assets/WhatsApp%20Image%202026-05-04%20at%2012.01.09%20(3)-Cqvly5uz.jpeg"),
    },
    {
      title: "Campus Life",
      count: 5,
      image: asset("/assets/WhatsApp%20Image%202026-05-04%20at%2012.01.05%20(1)-CMddgNKV.jpeg"),
    },
    {
      title: "Campus Life",
      count: 17,
      image: asset("/assets/WhatsApp%20Image%202026-05-04%20at%2012.01.09%20(2)-C4c075gD.jpeg"),
    },
  ],
  faqs: [
    {
      question:
        "Which programmes can I explore at SNBP University?",
      answer:
        "Explore four AI-first programs at the School of Arts, Commerce & Science: BBA, BCA, MCA and MBA.",
    },
    {
      question: "What is my first step toward applying?",
      answer:
        "Submit the enquiry form or visit the Admissions page to connect with the admissions team about programmes, eligibility and the application process.",
    },
    {
      question: "How can I prepare for life after my programme?",
      answer:
        "Students can prepare for careers through industry projects, internships, expert sessions and placement-focused training.",
    },
    {
      question: "Can I ask about scholarships and fees?",
      answer:
        "Scholarships may be available based on programme and eligibility. Contact the admissions team for current options and application details.",
    },
    {
      question: "Where will I be studying?",
      answer:
        "SNBP University is located in Pune, Maharashtra. Visit the Contact page for directions and campus details.",
    },
    {
      question: "What makes the SNBP learning experience distinct?",
      answer:
        "Students benefit from a multidisciplinary learning environment, practical projects, industry engagement and the experience of the SNBP education group.",
    },
  ],
};
