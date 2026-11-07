export const aboutLinks = [
  { label: "About SNBP University", to: "/about" },
  { label: "SNBP Group", to: "/our-journey" },
  { label: "Sponsoring Body", to: "/sponsoring-body" },
  { label: "Our Team", to: "/our-team" },
  { label: "Chancellor's Message", to: "/chancellor-message" },
  { label: "Vice Chancellor's Message", to: "/vice-chancellor-message" }
  // {
  //   label: "SNBP Leadership",
  //   to: "/snbp-leadership",
  //   children: [
  //     { label: "Our Team", to: "/our-team" },
  //     { label: "Chancellor's Message", to: "/chancellor-message" },
  //     { label: "Vice Chancellor's Message", to: "/vice-chancellor-message" }
  //   ]
  // }
];

export const programLinks = [
  // {
  //   label: "School of Technology",
  //   to: "/school-of-technology",
  //   children: [
  //     { label: "B.Tech Computer Science Engineering", to: "/school-of-technology/btech-cse" },
  //     { label: "B.Tech Information Technology", to: "/school-of-technology/btech-it" },
  //     { label: "B.Tech CSE (AI & Machine Learning)", to: "/school-of-technology/btech-cse-aiml" },
  //     { label: "B.Tech CSE (Data Science)", to: "/school-of-technology/btech-cse-data-science" },
  //     { label: "B.Tech CSE (Cyber Security)", to: "/school-of-technology/btech-cse-cyber-security" }
  //   ]
  // },
  {
    label: "School of Business Management",
    to: "/school-of-management",
    children: [
      { label: "BBA", to: "/school-of-management/bba" },
      { label: "BCA", to: "/school-of-management/bca" },
      { label: "MCA", to: "/school-of-management/mca" },
      { label: "MBA", to: "/school-of-management/mba" }
    ]
  }
];

export const admissionsLinks = [
  { label: "Admission & Eligibility", to: "/admissions" },
  { label: "Fees & Scholarships", to: "/scholarships" }
];

/** Desktop primary bar (matches live site grouping). */
export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about", children: aboutLinks },
  { label: "Programs", to: "/#schools", children: programLinks },
  { label: "Placements", to: "/placements" }
];

export const secondaryNav = [
  { label: "Life at SNBP", to: "/life-at-snbp" },
  { label: "Admissions", to: "/admissions", children: admissionsLinks },
  { label: "Mandatory Disclosure", to: "/mandatory-disclosure" },
  { label: "Contact Us", to: "/contact-us" }
];

export const footerQuickLinks = [
  { label: "About", to: "/about" },
  { label: "Placements", to: "/placements" },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact-us" }
];

export const regulatoryLinks = [
  { label: "University Act", href: "/mandatory-disclosure?doc=university-act" },
  { label: "Gazette Notification", href: "/mandatory-disclosure?doc=gazette-notification" },
  { label: "Fee Structure", href: "/scholarships" }
];

import { Facebook, Instagram, Linkedin } from "lucide-react";

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61596119767381",
    icon: Facebook
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/snbpwakadcampus/",
    icon: Instagram
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/snbp-wakad-9565b2449/", icon: Linkedin }
];
