export const myProjects = [
  {
    id: 8,
    title: "TogetherPlan - Shared Planning App",
    description: "Web and mobile app for planning time together, with a Couple mode and a Friends mode.",
    subDescription: [
      "Fullstack app built with Next.js (App Router), TypeScript, Prisma ORM and PostgreSQL (Supabase).",
      "Couple mode: shared calendar, availability, date proposals (accept/reject), trips with notes and checklists.",
      "Friends mode: group calendar, invitations, voting on dates, shared events, trips and expense settlements.",
      "Month / week / day / list views, drag & drop, .ics export to the device calendar and in-app notifications.",
      "Google sign-in with Auth.js, Sign in with Apple and native iOS and Android apps.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/togetherplan.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/ts.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 9,
    title: "hackGYM - HackYeah 2026 Hackathon App",
    description: "iPhone app built at the HackYeah hackathon (Sport & Healthcare): AI trainer, workout plan and live technique analysis.",
    subDescription: [
      "Built in a 5-person team during the HackYeah 2026 hackathon (Sport & Healthcare category): an iOS app (SwiftUI) that combines a training plan, a coach and an advisor.",
      "On-device exercise technique scoring from video with Apple Vision: rep counting, 0-100 score and joint angle chart.",
      "Daily recommendation (train / go lighter / rest) based on recovery data from Apple Health and the user's check-in.",
      "Stateless FastAPI backend: plan generation, AI trainer chat with tools and a RAG knowledge base (Google Gemini).",
      "Privacy by design: video, poses and health data stay on the phone; optional account synced with Supabase.",
    ],
    href: "https://github.com/Michal0ss/hackYeah_larp",
    logo: "",
    image: "/assets/projects/hackgym.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 10,
    title: "Trackly - Subscription Tracker Chrome Extension",
    description: "Chrome extension (published in the Chrome Web Store) that detects subscriptions on pricing pages and tracks their costs.",
    subDescription: [
      "Detects the plan, price and billing cycle on the pricing pages of 35+ services (Netflix, Spotify, ChatGPT and more), locally in the browser.",
      "Popup with monthly and yearly cost per currency, upcoming renewals and reminders 1, 3 or 7 days before a payment.",
      "FastAPI backend deployed on Vercel: Google sign-in, JWT, subscriptions API, PostgreSQL (Supabase) or SQLite.",
      "Same recogniser in JavaScript and Python, kept consistent by tests; CI with GitHub Actions.",
      "Privacy first: page content and browsing history never leave the browser. Available in Polish and English.",
    ],
    href: "https://tracklyapp.pl",
    logo: "",
    image: "/assets/projects/trackly.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
    ],
  },
  {
    id: 1,
    title: "Job Portal Fullstack Application",
    description: "Fullstack job portal app with role-based accounts, recruiter profile management, dashboard and admin panel.",
    subDescription: [
      "Built fullstack job portal application with: Backend: Spring Boot, Java Web. ",
      "Framework: Spring MVC + Thymeleaf (server-side HTML rendering)",
      "ORM: Spring Data JPA, Hibernate, MySQL",
      "Security: Spring Security (BCrypt, authentication, authorization)",
      "Implemented user registration/login, role-based flow (Recruiter / Job Seeker), profile data management and recruiter photo upload/display."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/jobPortalProject.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },{
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/spring-boot.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },{
        id: 4,
        name: "Spring Security",
      },
    ],
  },
  {
    id: 2,
    title: "Allegro Sales Automation Bot",
    description: "Allegro sales automation: labels, invoices, shipments, notifications.",
    subDescription: [
      "Developed API integration with Allegro to optimize sales processes, including generating shipments, printing labels, and sending invoices. Designed and implemented backend logic for automation of e-commerce workflows. Worked with REST APIs and handled data exchange between external systems.",
      "Acquired clients and maintained long-term relationships, delivering tailored technical solutions.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/allegroProject.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/python.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Bank Fullstack Application",
    description: "Fullstack banking app with account management, transactions and admin panel.",
    subDescription: [
      "Built fullstack banking application with: Backend: Spring Boot, Java Web",
      "Framework: Spring MVC + Thymeleaf (renderowanie HTML)",
      "Baza danych: PostgreSQL",
      "ORM: Spring Data JPA/Hibernate",
      "Security: Spring Security (BCrypt password encoding and authentication, authorization)",
      "Implemented user authentication, accounts management, transaction features, Blik rendering."
          ],
    href: "",
    logo: "",
    image: "/assets/projects/bankProject.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },{
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/spring-boot.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },{
        id: 4,
        name: "Spring Security",
      },
    ],
  },
  {
    id: 5,
    title: "EPAM Course - Frontend Project",
    description: "EPAM course final: static site using vanilla JS, SCSS and HTML.",
    subDescription: [
      "Built a static site with vanilla JS and modular SCSS.",
      "Implemented responsive layouts and optimized assets.",
      "Reinforced DOM, event handling and basic TS concepts.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/course.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "SCSS",
        path: "/assets/logos/scss.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "EPAM",
        path: "/assets/logos/epam-logo.png",
      },
    ],
  },
  {
    id: 4,
    title: "MathDuo - Tutoring Platform",
    description: "Tutoring site with calendar, contacts and maps for MathDuo.",
    subDescription: [
      "Improved React skills: hooks, state and routing.",
      "Added GSAP animations and responsive UI.",
      "Displayed tutoring slots dynamically from data.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/mathduo.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "GSAP",
        path: "/assets/logos/gsap.png",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Driving School Website",
    description: "Website for a local driving school with a registration form.",
    subDescription: [
      "Built a website with a signup form and contact details.",
      "Led client communication and UI improvements.",
      "Configured hosting and DNS; delivered production-ready site.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/osk.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Hosting",
        path: "/assets/logos/hosting.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Personal Portfolio",
    description: "Personal portfolio showcasing 3D visuals, animations and contact flows.",
    subDescription: [
      "Built with React and Vite for fast development.",
      "Uses GSAP, Framer Motion and Three/drei for animations and 3D.",
      "Tailwind for styling and EmailJS for contact flows.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/logos/gsap.png",
      },
      {
        id: 4,
        name: "Three/drei",
        path: "/assets/logos/threejs.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/michał-białas-264b0b268/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/michal.bialas_/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Fullstack Developer",
    job: "Incat (FinTech)",
    date: "06.2026-Present",
    contents: [
      "Working for 4 months as a Fullstack Developer at Incat, a company building fintech software.",
      "Developing and maintaining backend services, APIs, integrations and frontend features for financial products.",
    ],
  },
  {
    title: "Hackathon Participant",
    job: "HackYeah 2026",
    date: "10.2026",
    contents: [
      "Took part in HackYeah 2026, one of the biggest hackathons in Europe, in the Sport & Healthcare category.",
      "Built hackGYM in a 5-person team: an iPhone app with live exercise technique analysis, an AI trainer and a FastAPI backend.",
    ],
  },
  {
    title: "Student",
    job: "AGH University",
    date: "Present",
    contents: [
      "Studying at AGH University, focusing on web development and software engineering.",
      "Expanding knowledge in algorithms, Python, Java, React and modern frontend tooling.",
    ],
  },
  {
    title: "Math Tutor",
    job: "Private Tutor",
    date: "2022-Present",
    contents: [
      "Providing math tutoring for college and high-school students for over 3 years.",
      "Teaching algebra, calculus and basic computer science concepts; preparing students for exams.",
    ],
  },
  {
    title: "Freelance Web Developer",
    job: "Client Projects",
    date: "Present",
    contents: [
      "Building websites on commission and delivering complete software solutions.",
      "Responsible for requirements, implementation and deployment for small businesses.",
    ],
  },
];
// export const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://robohash.org/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://robohash.org/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://robohash.org/john",
//   },
//   {
//     name: "Alice",
//     username: "@alice",
//     body: "This is hands down the best thing I've experienced. Highly recommend!",
//     img: "https://robohash.org/alice",
//   },
//   {
//     name: "Bob",
//     username: "@bob",
//     body: "Incredible work! The attention to detail is phenomenal.",
//     img: "https://robohash.org/bob",
//   },
//   {
//     name: "Charlie",
//     username: "@charlie",
//     body: "This exceeded all my expectations. Absolutely stunning!",
//     img: "https://robohash.org/charlie",
//   },
//   {
//     name: "Dave",
//     username: "@dave",
//     body: "Simply breathtaking. The best decision I've made in a while.",
//     img: "https://robohash.org/dave",
//   },
//   {
//     name: "Eve",
//     username: "@eve",
//     body: "So glad I found this. It has changed the game for me.",
//     img: "https://robohash.org/eve",
//   },
// ];