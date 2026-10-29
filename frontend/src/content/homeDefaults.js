import { asset, heroIntroGif, leaderBhosale, leaderVrushali } from "../constants/assets.js";

export const homeDefaults = {
  hero: {
    title: "Degree Is The Beginning, Character Is The Destination.",
    subtitle:
      "At SNBP University, education transcends classrooms; it shapes character and creates leaders",
    poster: heroIntroGif,
    societyLabel: "Subhadra Educational Society.",
  },
  stats: [
    { value: "29", label: "Years Of Educational Excellence" },
    { value: "20+", label: "Institutes" },
    { value: "30000+", label: "Students Across Campuses" },
  ],
  about: {
    eyebrow: "About SNBP University",
    title: "A Legacy of Excellence, A Vision for Tomorrow",
    paragraphs: [
      "Inspired by Shri Dasharath K. Bhosale, SNBP University builds on a long-standing commitment to education and prepares students to meet a changing world with confidence.",
      "Across technology, arts, commerce and science, students develop knowledge, practical skills and character in a community that values curiosity and lifelong learning.",
    ],
    image: asset("/assets/Layer%204-clean-BIEAtz-e.webp"),
  },
  schools: [
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
    {
      id: "arts-commerce-science",
      name: "School of Arts, Commerce & Science",
      to: "/school-of-arts-commerce-science",
      brochure: asset("/assets/School-Of-Arts-Commerce-Science-SNBP-University-BqD54UwP.pdf"),
      programs: [
        { name: "B.Sc. Computer Science", to: "/school-of-arts-commerce-science/bsc-computer-science" },
        { name: "B.A. Psychology / Economics / English", to: "/school-of-arts-commerce-science/ba-psychology" },
        { name: "BCA", to: "/school-of-arts-commerce-science/bca" },
        { name: "B.Com", to: "/school-of-arts-commerce-science/bcom" },
        { name: "MCA", to: "/school-of-arts-commerce-science/mca" },
      ],
      image: asset("/assets/Untitled%20design-CYPUEzTN.webp"),
    },
  ],
  pillars: [
    {
      title: "Holistic Development",
      description:
        "We nurture the mind, character, creativity, and values that help students grow into well-rounded individuals.",
    },
    {
      title: "Academic Excellence",
      description:
        "Faculty who are researchers, practitioners, and mentors. Curriculum designed for today's world and tomorrow's possibilities.",
    },
    {
      title: "Industry Partnerships",
      description:
        "Live projects, industry mentors and internship opportunities bring classroom learning closer to professional practice.",
    },
    {
      title: "Global Exposure",
      description:
        "International connections and exchange opportunities broaden students' perspectives while keeping them rooted in Indian values.",
    },
    {
      title: "Innovation at Scale",
      description:
        "Research centres and hands-on projects give curious students the space to test ideas and solve real problems.",
    },
    {
      title: "Location Advantage",
      description:
        "Pune's education and technology communities connect students with a wide range of professional opportunities.",
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
      title: "Corporate Collaborations",
      points: [
        "Live projects and case studies from partner companies",
        "Guest lectures and industry insights",
        "Curriculum shaped with input from industry",
        "Consulting projects for faculty and advanced students",
      ],
    },
    {
      id: "certification",
      title: "Certification Partners",
      points: [
        "Industry certifications integrated into learning",
        "Preparation courses alongside programme content",
        "Support for recognised certification exams",
        "Credentials that strengthen career readiness",
      ],
    },
    {
      id: "internship",
      title: "Internship Partners",
      points: [
        "Internship pathways with partner organisations",
        "Mentorship from industry professionals",
        "Practical experience in real work settings",
        "Preparation for future career opportunities",
      ],
    },
    {
      id: "research",
      title: "Research Partners",
      points: [
        "Work on relevant research questions",
        "Explore applied research and emerging ideas",
        "Learn from industry data and challenges",
        "Build skills in inquiry and collaboration",
      ],
    },
  ],
  centreOfExcellence: [
    "Expert Masterclasses",
    "Technology Bootcamps",
    "Corporate Problem Statements",
    "Hackathons & Sprint Challenges",
    "Project Mentoring",
    "Portfolio Reviews",
    "Internship Readiness",
    "Placement-Focused Training",
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
        "What are the undergraduate and postgraduate courses offered at SNBP University, Pune?",
      answer:
        "SNBP University offers programmes through its School of Technology and School of Arts, Commerce & Science. Options include B.Tech specialisations in Computer Science, IT, AI/ML, Data Science and Cyber Security, as well as BCA, MCA, B.Sc. Computer Science, B.Com and BA programmes.",
    },
    {
      question: "How can I apply for admission to SNBP University?",
      answer:
        "Submit the enquiry form or visit the Admissions page to connect with the admissions team about programmes, eligibility and the application process.",
    },
    {
      question: "Does SNBP University provide placement assistance and internships?",
      answer:
        "Students can prepare for careers through industry projects, internships, expert sessions and placement-focused training.",
    },
    {
      question: "Are there any scholarships available for students at SNBP University?",
      answer:
        "Scholarships may be available based on programme and eligibility. Contact the admissions team for current options and application details.",
    },
    {
      question: "Where is the SNBP University campus located in Pune?",
      answer:
        "SNBP University is located in Pune, Maharashtra. Visit the Contact page for directions and campus details.",
    },
    {
      question: "Why should I choose SNBP University over other private universities in Maharashtra?",
      answer:
        "Students benefit from a multidisciplinary learning environment, practical projects, industry engagement and the experience of the SNBP education group.",
    },
  ],
};
