export const aboutLinks = [
  { label: "About SNBP University", to: "/about" },
  { label: "SNBP Group", to: "/our-journey" },
  { label: "Sponsoring Body", to: "/sponsoring-body" },
  {
    label: "SNBP Leadership",
    to: "/snbp-leadership",
    children: [
      { label: "Our Team", to: "/our-team" },
      { label: "Chancellor's Message", to: "/chancellor-message" },
      { label: "Vice Chancellor's Message", to: "/vice-chancellor-message" }
    ]
  }
];

export const programLinks = [
  {
    label: "School of Technology",
    to: "/school-of-technology",
    children: [
      { label: "B.Tech Computer Science Engineering", to: "/school-of-technology/btech-cse" },
      { label: "B.Tech Information Technology", to: "/school-of-technology/btech-it" },
      { label: "B.Tech CSE (AI & Machine Learning)", to: "/school-of-technology/btech-cse-aiml" },
      { label: "B.Tech CSE (Data Science)", to: "/school-of-technology/btech-cse-data-science" },
      { label: "B.Tech CSE (Cyber Security)", to: "/school-of-technology/btech-cse-cyber-security" }
    ]
  },
  {
    label: "School of Arts, Commerce & Science",
    to: "/school-of-arts-commerce-science",
    children: [
      { label: "B.Sc. Computer Science", to: "/school-of-arts-commerce-science/bsc-computer-science" },
      { label: "BA Psychology", to: "/school-of-arts-commerce-science/ba-psychology" },
      { label: "BA English", to: "/school-of-arts-commerce-science/ba-english" },
      { label: "BA Economics", to: "/school-of-arts-commerce-science/ba-economics" },
      { label: "BCA", to: "/school-of-arts-commerce-science/bca" },
      { label: "B.Com", to: "/school-of-arts-commerce-science/bcom" },
      { label: "MCA", to: "/school-of-arts-commerce-science/mca" }
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
  { label: "Scholarships", to: "/scholarships" },
  { label: "CONTACT US", to: "/contact-us" }
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

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/SNBP-University/61589293958859/"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/snbpuniversity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/snbp-university/" }
];
