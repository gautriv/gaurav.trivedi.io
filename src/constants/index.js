import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitImage2,
    htmlcsslogo,
    javascriptlogo,
    jekyll,
    linux,
    visualstudiocode,
    bootstrap,
    python,
    framemaker,
    project1,
    project4,
    twitter,
    linkedin,
    github,
    gmail,
    geeksforgeeks,
    scaler,
    tutorialspoint,
    peppercontent,
    proelevate,
    unlockpdf,
  } from "../assets";

  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#about",
    },
    {
      id: "1",
      title: "Services",
      url: "#services",
    },
    {
      id: "2",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "3",
      title: "Blog",
      url: "#blog",
      onlyMobile: true,
    },
    {
      id: "4",
      title: "Resume",
      url: "#resume",
      onlyMobile: true,
    },
  ];
  
  export const companyLogos = [geeksforgeeks, scaler, tutorialspoint, peppercontent, proelevate];
  
  export const projects = [
    {
      id: "0",
      title: "API documentation - From zero to hero",
      text: "Crafted for beginners and aspiring technical writers who want to master the art of creating clear and user-friendly API",
      date: "May 2024",
      status: "done",
      imageUrl: project4,
      url: "https://beingtechnicalwriter.com/apidocumentation/",
    },
    {
      id: "1",
      title: "Git Essentials for Technical Communicators: Streamlining Documentation Excellence",
      text: "Learn the ins and outs of version control, collaboration, and seamless documentation workflows.",
      date: "December 2023",
      status: "done",
      imageUrl: project1,
      url: "https://beingtechnicalwriter.com/gitfortechnicalwriters/",
    },
    {
      id: "2",
      title: "PDF Password Brute Force Tool",
      text: "This tool allows you to unlock password-protected PDF files by brute-forcing the password.",
      date: "June 2024",
      status: "done",
      imageUrl: unlockpdf,
      url: "https://github.com/gautriv/unlockpdf",
    },
    
  ];
  
  export const collabText =
    "I am the bridge between complex code and clear communication, a technical writer fluent in the language of programmers and users alike. I weave intricate algorithms into accessible narratives, transforming technical jargon into engaging, understandable stories that empower and inspire. My role is to turn the dense forest of code into a navigable path, guiding users with precision and creativity through the ever-evolving landscape of technology.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Learn About Me",
      text: "Enter my universe, where words unravel tech mysteries. More than a Technical Writer, I'm your guide through uncharted code realms.",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "HTML/CSS",
      icon: htmlcsslogo,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Javascript",
      icon: javascriptlogo,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Jekyll",
      icon: jekyll,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Visual Studio Code",
      icon: visualstudiocode,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Bootstrap",
      icon: bootstrap,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Python",
      icon: python,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framemaker",
      icon: framemaker,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Linux",
      icon: linux,
      width: 38,
      height: 32,
    },
  ];
  
  export const services = [
    {
      id: "0",
      title: "Technical writing",
      text: "Craft top-tier software documentation, templates, user guides, and manuals to demystify complex systems.",
      exploreMoreUrl: "https://github.com/gautriv",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Documentation site development",
      text: "Tailor documentation sites for enhanced clarity, improved functionality, and an optimal user experience.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      exploreMoreUrl: "https://github.com/gautriv",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Community building",
      text: "Create connections and drive engagement through strategic initiatives and inclusive platforms. Build and nurture thriving online communities.",
      exploreMoreUrl: "https://github.com/gautriv",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
      light: true,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "LinkedIn",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/in/gauravtrivedi88/",
    },
    {
      id: "1",
      title: "GitHub",
      iconUrl: github,
      url: "https://github.com/gautriv",
    },
    {
      id: "2",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://twitter.com/beingtechwriter",
    },
    {
      id: "4",
      title: "Gmail",
      iconUrl: gmail,
      url: "mailto:trivedi.gaurav30@gmail.com",
    },
  ];