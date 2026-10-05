import {
  SiJavascript,
  SiPython,
  SiRuby,
  SiElixir,
  SiHtml5,
  SiCss,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiRubyonrails,
  SiPhp,
  SiMysql,
  SiJira,
  SiClaude,
  SiGit,
  SiDocker,
  SiJenkins,
  SiDatadog,
  SiVercel,
  SiVite,
  SiMui,
  SiGoogle,
  SiPhoenixframework,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

export const profile = {
  name: 'Jamal Apicha',
  photo: '/images/jamal-apicha.png',
  headline: 'B.S. in Computer Science and Engineering',
  introduction: [
    { text: "I'm a Computer Science and Engineering student at " },
    {
      text: 'The Ohio State University',
      bold: true,
    },
    {
      text: " who enjoys building things and solving problems through technology. I'm especially interested in ",
    },
    { text: 'full-stack development, cloud technologies, and AI' },
    {
      text: ". I also enjoy learning new tools and figuring out how to use them to build useful applications. I'm always looking for opportunities to grow as a developer, take on new challenges, and work on projects that can make a real impact.",
    },
  ],
  email: 'jamalapicha1@gmail.com',
  phone: '+1 (347) 355-3059',
  phoneHref: 'tel:+13473553059',
  github: 'https://github.com/jamalmohadinho',
  linkedin: 'https://www.linkedin.com/in/jamalapicha/',
  graduation: 'December 2027',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  university: 'The Ohio State University',
  resume: '/documents/Jamal-Apicha-Resume.pdf',
  availability:
    'Seeking full-time software engineering opportunities and a remote internship for Spring 2027.',
};

export const about = {
  heading: 'Hello World! 👋',
  introduction:
    'a Computer Science and Engineering student at The Ohio State University with a passion for full-stack development and creating useful solutions.',
  technologies: ['Python', 'JavaScript', 'Node.js', 'Express.js', 'React'],
  hackathonHighlight: "JPMorgan Chase's Code for Good hackathon",
  hackathon:
    "At JPMorgan Chase's Code for Good hackathon, I led frontend development on a team of six to build The Lilabean Impact Center, a platform supporting a nonprofit focused on pediatric brain cancer research. We built a dashboard to help stakeholders explore funding and research insights.",
  experience:
    "Currently, I'm gaining hands-on experience as a Software Developer Intern, working in an Agile development environment. I'm always excited about the opportunity to create something unique and meaningful.",
};

const tech = (name, icon) => ({ name, icon });

export const technologies = {
  JavaScript: tech('JavaScript', SiJavascript),
  Python: tech('Python', SiPython),
  Java: tech('Java', FaJava),
  SQL: tech('SQL', FaDatabase),
  Ruby: tech('Ruby', SiRuby),
  Elixir: tech('Elixir', SiElixir),
  HTML: tech('HTML', SiHtml5),
  CSS: tech('CSS', SiCss),
  React: tech('React', SiReact),
  Redux: tech('Redux', SiRedux),
  'Tailwind CSS': tech('Tailwind CSS', SiTailwindcss),
  'Node.js': tech('Node.js', SiNodedotjs),
  Express: tech('Express', SiExpress),
  MongoDB: tech('MongoDB', SiMongodb),
  PostgreSQL: tech('PostgreSQL', SiPostgresql),
  SQLite: tech('SQLite', SiSqlite),
  'Ruby on Rails': tech('Ruby on Rails', SiRubyonrails),
  PHP: tech('PHP', SiPhp),
  MySQL: tech('MySQL', SiMysql),
  Jira: tech('Jira', SiJira),
  Claude: tech('Claude', SiClaude),
  Git: tech('Git', SiGit),
  Docker: tech('Docker', SiDocker),
  Jenkins: tech('Jenkins', SiJenkins),
  Datadog: tech('Datadog', SiDatadog),
  Vercel: tech('Vercel', SiVercel),
  Vite: tech('Vite', SiVite),
  'Material UI': tech('Material UI', SiMui),
  'Google OAuth': tech('Google OAuth', SiGoogle),
  Phoenix: tech('Phoenix', SiPhoenixframework),
};

export const skills = {
  Languages: [
    'JavaScript',
    'Python',
    'Java',
    'SQL',
    'Ruby',
    'Elixir',
    'HTML',
    'CSS',
  ].map((n) => technologies[n]),
  'Frameworks & Libraries': [
    'React',
    'Redux',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'Phoenix',
  ].map((n) => technologies[n]),
  'DevOps & Tools': [
    'Jira',
    'Claude',
    'Git',
    'Docker',
    'Jenkins',
    'Datadog',
    'Vercel',
    'Vite',
  ].map((n) => technologies[n]),
  Databases: ['MongoDB', 'PostgreSQL', 'SQLite'].map((n) => technologies[n]),
};

export const projects = [
  {
    title: "Memories App",
    subtitle: "PHOTO SHARING APP",
    description:
      "A full-stack space for sharing personal memories through photos, captions, and tags. Create, edit, delete, and like posts, with Google sign-in, MongoDB storage, and Redux state management.",
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "Google OAuth",
    ],
    github: "https://github.com/jamalmohadinho/memories",
    live: null,
  },
  {
    title: "Banking Database App",
    subtitle: "DATABASE CLASS PROJECT",
    description:
      "A PHP and MySQL application for viewing account and loan balances, transferring funds, borrowing, and making loan payments. Uses relational tables, parameterized queries, and database transactions with row locking to coordinate balance updates.",
    stack: ["PHP", "MySQL", "SQL", "HTML", "CSS"],
    github: "https://github.com/jamalmohadinho/banking-database-app",
    live: null,
  },
  {
    title: "Movie Discovery",
    subtitle: "FIND YOUR NEXT WATCH",
    description:
      "Browse popular movies and search for titles with the TMDB API. Loading indicators, clear error handling, and debounced search keep the experience responsive and reduce unnecessary requests.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite", "TMDB API"],
    github: "https://github.com/jamalmohadinho/React_Movie-App",
    live: "https://react-movie-app-eta-ashen.vercel.app/",
  },
  {
    title: "Meme Generator",
    subtitle: "MAKE IT YOUR OWN",
    description:
      "Create custom memes from an image URL with top and bottom captions. Add multiple memes to the page and remove them with a click, using JavaScript form handling and DOM updates.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/jamalmohadinho/Meme-Generator-Project",
    live: "https://meme-generator-project-two.vercel.app/",
  },
  {
    title: "Split the Bill",
    subtitle: "SHARED TRIP EXPENSES",
    description:
      "A web development class project for organizing trips and shared expenses. Users can sign up, log in, manage trips and participants, and record expenses with amounts, categories, and who paid, backed by a relational database.",
    stack: ["Ruby", "Ruby on Rails", "SQLite", "HTML", "CSS"],
    github: "https://github.com/jamalmohadinho/split-the-bill",
    live: null,
  },
  {
    title: "Tic-Tac-Toe",
    subtitle: "A CLASSIC, BUILT WITH REACT",
    description:
      "A two-player game with alternating turns, automatic winner detection, and a board reset. Reusable React components manage gameplay and prevent moves on occupied squares.",
    stack: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/jamalmohadinho/TicTacToe",
    live: "https://tictactoe-project-h7jr.vercel.app/",
  },
];
export const experience = [
  {
    company: "CoverMyMeds / McKesson",
    logo: "/images/companies/covermymeds.ico",
    logoName: "CoverMyMeds",
    logoStyle: "covermymeds",
    role: "Software Engineering Intern",
    date: "June – August 2026",
    location: "Columbus, OH",
    bullets: [
      "Built a vector embedding solution to extract insurer data from policy documents and improve matching across 337 insurance companies.",
      "Gained hands-on experience in Agile development, worked on real-world projects, and contributed to team goals.",
    ],
  },
  {
    company: "JPMorgan Chase · Code for Good",
    logo: "/images/companies/jpmorgan-chase.png",
    logoName: "JPMorgan Chase",
    logoStyle: "chase",
    role: "Software Engineer, Hackathon Participant",
    date: "November 2025",
    location: "Columbus, OH",
    bullets: [
      "Led frontend development in a cross-university team of six for The Lilabean Impact Center, supporting pediatric brain cancer research.",
      "Built a data visualization dashboard with Flask, PostgreSQL, and Chart.js to surface funding and research insights.",
    ],
  },
  {
    company: "Springboard",
    role: "Software Development Fellow",
    date: "May 2025 – August 2025",
    logo: "/images/companies/springboard.svg",
    logoName: "Springboard",
    logoStyle: "springboard",
    certificate: "/documents/Springboard-Software-Development-Certificate.pdf",
    bullets: [
      "Selected as one of 25 participants from 750+ applicants for a competitive, intensive full-stack development program and completed a capstone project to strengthen my web development and problem-solving skills.",
    ],
  },
  {
    company: "Walmart",
    logo: "/images/companies/walmart.svg",
    logoName: "Walmart",
    logoStyle: "walmart",
    role: "Systems Associate",
    date: "February 2022 – December 2025",
    location: "Groveport, OH",
    bullets: [
      "Administered Global Logistics Systems and partnered with systems experts to troubleshoot distribution-center issues, contributing to a 15% reduction in operational downtime.",
    ],
  },
];
// Add verified entries: { title, issuer, date, file: '/documents/name.pdf', verification: null }.
export const certificates = [];

// Leadership details are sourced from the resume and confirmed by Jamal.
export const leadership = [
  {
    company: 'Minorities in Tech',
    role: 'Event Organizer',
    date: 'January - April 2025',
    location: 'The Ohio State University',
    logo: '/images/companies/minorities-in-tech.png',
    logoName: 'Minorities in Tech',
    logoStyle: 'minorities',
    bullets: [
      'Organized events connecting minority CS students with company representatives, coordinating outreach to bring recruiters and engineers on campus.',
    ],
  },
  {
    company: 'ColorStack',
    role: 'Member',
    date: 'December 2024 – Present',
    logo: '/images/companies/colorstack.png',
    logoName: 'ColorStack',
    logoStyle: 'colorstack',
  },
  {
    company: 'CodePath',
    role: 'Technical Interview Prep',
    date: 'August 2025',
    logo: '/images/companies/codepath.png',
    logoName: 'CodePath',
    logoStyle: 'codepath',
  },
];
