/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import nestjs from "../src/assets/images/nestjs.png";
import nextjs from "../src/assets/images/next.png";
import html from "../src/assets/images/html5.svg";
import css from "../src/assets/images/css.svg";

import angular from "../src/assets/images/angular.svg";
import flutter from "../src/assets/images/flutter.svg";
import node from "../src/assets/images/nodejs.svg";
import mysql from "../src/assets/images/mysql.svg";
import mongodb from "../src/assets/images/mongodb-wordmark.svg";

import JavaScript from "../src/assets/images/javascript.svg";
import React from "../src/assets/images/react.svg";
import firebase from "../src/assets/images/firebase.svg";
import expressjs from "../src/assets/images/expressjs.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rami Jawadi",
  title: "Hi all, I'm Rami",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ramijawadi",
  linkedin: "https://www.linkedin.com/in/jawadi-rami/",
  gmail: "ramijawadi104@gmail.com",
  facebook: "https://www.facebook.com/choukou.aljawadi/"
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party free and paiyed services such as Firebase/ Nettfily and others"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html-5",
      fontAwesomeClassname: html
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: css
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: JavaScript
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: React
    },
    {
      skillName: "Angularjs",
      fontAwesomeClassname: angular
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: nextjs
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: node
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: expressjs
    },
    {
      skillName: "Nestjs",
      fontAwesomeClassname: nestjs
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: flutter
    },

    {
      skillName: "MongoDb",
      fontAwesomeClassname: mongodb
    },
    {
      skillName: "Mysql",
      fontAwesomeClassname: mysql
    },

    {
      skillName: "Firebase",
      fontAwesomeClassname: firebase
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Monastir University",
      logo: require("./assets/images/fsm.png"),
      subHeader: "Licence of Science in Computer Science",
      duration: "September 2013 - Juin 2018"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Sidi Bouzid - Tunisie high school",
      logo: require("./assets/images/lyceee.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2012 - juin 2013"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web developer, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Mobile",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "FrontEnd Web Developer (Reactjs)",

      company: "Bansco Consulting",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "Jan 2021 – Dec 2022",
      location: "Tunisie - Sousse "
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "FrontEnd Web Developer (Full stack js)",
      company: "Tanit",
      location: "Tunisie - Monastir",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "Jan 2023 – Oct 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      // role: "FrontEnd Web Developer (Reactjs)",
      role: "FrontEnd Web Developer (Angular)",
      company: "BonGest",
      location: "Tunisie - Monastir",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Mar 2024 – Sep 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have developed.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dashboard-react-tau-two.vercel.app/",
      title: "Dashboard Panel",
      description:
        "A robust and intuitive admin panel built with ReactJS  designed for efficient management and monitoring of application data. The panel includes features like user and subscription management, customizable dashboards, and real-time updates."
    },
    {
      url: "https://ramijawadi.netlify.app/",
      title: "Personal Folio",
      description:
        "With Reactjs  library I builded an awesome User Interface Folio containing nested Personal Projets hosted online."
    },
    {
      url: "https://wael-academy-landing.vercel.app/",
      title: "Education Academy",
      description:
        "Thanks to Reactjs + vite I developed a dynamic and interactive landing page Academy containing Some features for The Academy offers."
    },
    {
      url: "https://deltacloud.vercel.app/",
      title: "Your Cloud App",
      description:
        "Welcome on  DELTA  Your cloud  platform hosted on a cloud service (such as Vercel or AWS), designed to provide scalable and efficient web hosting, continuous integration, and deployment (CI/CD) high security for your application."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 51276993",
  email_address: "ramijawadi104@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  contactInfo,
  twitterDetails,
  talkSection,
  podcastSection,
  isHireable,
  resumeSection,
  achievementSection
};
