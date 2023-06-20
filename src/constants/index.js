import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    tec,
    cenace,
    mysql,
    corner,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Design and Implementation of Networks",
      icon: backend,
    },
    {
      title: "Design of Software Projects",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },

  ];
  
  const experiences = [
    {
      title: "Java Developer",
      company_name: "1st Approach to Programming",
      icon: java,
      iconBg: "#E6DEDD",
      date: "Feb 2017 - Jun 2019",
      points: [
        "Developing first application desktop with Oriented Object Programming using Netbeans.",
        "Basic mobile app using Android Studio.",
        "Created a desktop app oriented to administrate a Book Store. Customer and Admin version.",
        "Participating in code reviews and providing constructive feedback to other students.",
      ],
    },
    {
      title: "University Degree Engineering In Computer Technologies",
      company_name: "ITESM",
      icon: tec,
      iconBg: "#E6DEDD",
      date: "Aug 2019 - May 2023",
      points: [
        "Resolution of problemas, advanced algoriths.",
        "Documentation of software IEEE, software testing, use of DevOps features as Jira.",
        "Network And Service Management.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "React",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Design of UI utilizating 2D, 3D models aside the structure and color palette.",
        "Always looking for new features, projects or libraries to get the best balance, check out the section Portfolio for more",
      ],
    },
    {
      title: "Software Developer",
      company_name: "CENACE",
      icon: cenace,
      iconBg: "#fff",
      date: "Aug 2022 - Dic 2022",
      points: [
        "Developing web application using .Net Framework, C#, Oracle MySQL, Azure DevOps and other related technologies.",
        "The project consisted of creating a budget management system.",
        "Also to be able to monitor and update monthly expenses this in order to automate the creation of documents and formats for budget planning.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Clothing Corner",
      description:
        "Ecommerce web applicacion developed with react, tailwind, javascript and api from fakestoreapi.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: corner,
      source_code_link: "https://github.com/JArmandoV/Clothing-Corner-Ecommerce",
      link_demo : "https://clothing-corner.netlify.app",
    },
    {
      name: "EafySolutions",
      description:
        "Make an application / web page that shows the financial results of each client company of FLEX BPO based on the information found in its database data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "azure",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/GmoWilliams/EafyHeroku",
      link_demo : "https://marvelapp.com/prototype/hjc363h/screen/85474524",
    },
    {
      name: "Caridapp",
      description:
        "This Caritas project is looking for a web application that can schedule, record and speed up the delivery and receipt process of each donation from the simplicity of a mobile device.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "iOS",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/jesusej/CaridappServer",
      link_demo : "https://github.com/jesusej/CaridappServer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };