export const myProjects = [
  {
    id: 1,
    title: "TogetherPlan - Shared Planning App",
    description: "App for planning time together with a partner or a group of friends: shared calendar, trips and expense settlements. Web app plus a native iOS app that passed App Store review.",
    subDescription: [
      "Web app built with Next.js 16 (App Router), React 19 and TypeScript, deployed on Vercel at togetherplan.eu.",
      "Backend in Next.js Server Actions and REST API routes (also used by the mobile apps), Prisma ORM with 40 models on PostgreSQL (Supabase), Zod validation and per-group access checks.",
      "Modes: Couple, Friends (any number of groups) and Personal - group events with RSVP, availability and finding a common free date, date polls.",
      "Trips: day-by-day plan, places on a map with voting, accommodation proposals, private PDF tickets, packing and to-do lists.",
      "Expense settlements (equal or custom split, who owes whom) with currency conversion at the official NBP exchange rate.",
      "Native iOS app in SwiftUI (WidgetKit widget, MapKit, EventKit export to the iPhone calendar), Sign in with Apple and Google (Auth.js). Android app (Kotlin, Jetpack Compose) in progress.",
    ],
    href: "https://togetherplan.eu",
    logo: "",
    image: "/assets/projects/togetherplan.png",
    gallery: [
      "/assets/projects/togetherplan/01-dashboard.jpg",
      "/assets/projects/togetherplan/02-kalendarz.jpg",
      "/assets/projects/togetherplan/03-dostepnosc.jpg",
      "/assets/projects/togetherplan/04-wyjazd.jpg",
      "/assets/projects/togetherplan/05-rozliczenia.jpg",
      "/assets/projects/togetherplan/06-bilety.jpg",
    ],
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/ts.svg",
      },
      {
        id: 3,
        name: "Prisma",
        path: "/assets/logos/prisma.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 5,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 6,
        name: "Swift",
        path: "/assets/logos/swift.svg",
      },
      {
        id: 7,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "hackGYM - HackYeah 2026 Hackathon App",
    description: "iPhone app built at the HackYeah 2026 hackathon (Sport & Healthcare): AI trainer, workout plan and exercise technique analysis from the camera.",
    subDescription: [
      "Built in a 5-person team during the HackYeah 2026 hackathon.",
      "iOS app in Swift and SwiftUI: on-device technique scoring from video with Apple Vision - rep counting, 0-100 score and joint angle chart for squats, push-ups, pull-ups and dips.",
      "Live set with the camera and a tempo coach: audio cues for the down and up phase based on the tempo from the plan.",
      "Daily recommendation (train / go lighter / rest) from a rules engine using recovery data from Apple Health (HealthKit) and the user's check-in.",
      "Stateless FastAPI backend: plan generation as validated JSON, AI trainer chat streamed over SSE with tools and a RAG knowledge base, using Google Gemini.",
      "Privacy by design: video, poses and health data stay on the phone; optional Google account synced with Supabase under row-level security.",
    ],
    href: "https://github.com/Michal0ss/hackYeah_larp",
    logo: "",
    image: "/assets/projects/hackgym.png",
    tags: [
      {
        id: 1,
        name: "Swift",
        path: "/assets/logos/swift.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 4,
        name: "Gemini",
        path: "/assets/logos/gemini.svg",
      },
      {
        id: 5,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Trackly - Subscription Tracker Chrome Extension",
    description: "Chrome extension published in the Chrome Web Store that recognises subscriptions on pricing pages and tracks what you pay.",
    subDescription: [
      "Recognises the plan, price, currency and billing cycle on the pricing pages of 35+ services (Netflix, Spotify, ChatGPT, Disney+ and more), locally in the browser with no network calls.",
      "Popup with monthly and yearly cost per currency (PLN, EUR, USD, GBP), renewals in the next 7 days and reminders 1, 3 or 7 days before a payment.",
      "FastAPI backend deployed on Vercel: Google sign-in, JWT, subscriptions API, PostgreSQL (Supabase) or SQLite locally.",
      "The same recogniser in JavaScript and Python, kept in sync by tests run in GitHub Actions.",
      "Page content and browsing history never leave the browser. Extension and website (tracklyapp.pl) in Polish and English.",
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
        name: "Chrome Extension",
        path: "/assets/logos/chrome.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 6,
        name: "Vercel",
        path: "/assets/logos/vercel.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Job Portal Fullstack Application",
    description: "Job portal web app with registration, login and role-based flow for recruiters and job seekers.",
    subDescription: [
      "Java 25 and Spring Boot 4 with Spring MVC and Thymeleaf (server-side rendering), Bootstrap and Font Awesome on the frontend.",
      "Spring Data JPA / Hibernate on MySQL.",
      "Spring Security: BCrypt password hashing, custom UserDetailsService and a success handler redirecting by user type.",
      "Registration as Recruiter or Job Seeker, login/logout, dashboard and recruiter profile management with photo upload and display.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/jobPortalProject.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/spring-boot.svg",
      },
      {
        id: 3,
        name: "Spring Security",
        path: "/assets/logos/spring-security.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 5,
        name: "Thymeleaf",
        path: "/assets/logos/thymeleaf.svg",
      },
      {
        id: 6,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap.svg",
      },
    ],
  },
  {
    id: 5,
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
        path: "/assets/logos/fastapi.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Bank Database Application",
    description: "Banking web app for managing accounts and payment cards and making transfers, with business logic in the database.",
    subDescription: [
      "Java 25 and Spring Boot with Spring MVC and Thymeleaf, Spring Data JPA / Hibernate and Maven.",
      "PostgreSQL with stored procedures in SQL and PL/pgSQL for creating, freezing and deleting cards.",
      "Transfers run in transactions with FOR UPDATE row locks, taken in a fixed order to avoid deadlocks.",
      "Transaction report built with a native SQL query (incoming / outgoing per account and date range).",
      "Spring Security login and registration, account dashboard with details and a BLIK code generator with a 30-second timer.",
    ],
    href: "https://github.com/Michal0ss/bank",
    logo: "",
    image: "/assets/projects/bankProject.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/spring-boot.svg",
      },
      {
        id: 3,
        name: "Spring Security",
        path: "/assets/logos/spring-security.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 5,
        name: "Thymeleaf",
        path: "/assets/logos/thymeleaf.svg",
      },
    ],
  },
  {
    id: 7,
    title: "EPAM Course - Frontend Project",
    description: "Capstone project of the EPAM front-end course: responsive educational website in HTML, SCSS and vanilla JavaScript.",
    subDescription: [
      "Course data, statistics and partners loaded from JSON files and rendered dynamically with JavaScript modules.",
      "Category filtering, interactive statistics and a course slider.",
      "Styles written in SCSS (compiled with Sass), code checked with ESLint and Stylelint.",
    ],
    href: "https://github.com/Michal0ss/CourseSite",
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
        name: "ESLint",
        path: "/assets/logos/eslint.svg",
      },
      {
        id: 5,
        name: "EPAM",
        path: "/assets/logos/epam-logo.png",
      },
    ],
  },
  {
    id: 8,
    title: "MathDuo - Tutoring Platform",
    description: "Website of the MathDuo math tutoring business, built together with my business partner and live at mathduo.eu.",
    subDescription: [
      "React 18 with Vite and Tailwind CSS, responsive on mobile and desktop.",
      "Calendar of free tutoring slots (react-big-calendar with date-fns, Polish locale) loaded from JSON data.",
      "Offer and pricing sections, tutor contact cards with click-to-call and an embedded Google Map.",
      "Animations with GSAP (ScrollTrigger, @gsap/react) and Framer Motion.",
    ],
    href: "https://www.mathduo.eu",
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
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "GSAP",
        path: "/assets/logos/gsap.png",
      },
    ],
  },
  {
    id: 9,
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
    id: 10,
    title: "Personal Portfolio",
    description: "This portfolio: one-page site with 3D visuals, animations and a contact form.",
    subDescription: [
      "React 19 and Vite, styled with Tailwind CSS 4.",
      "3D scenes with Three.js, React Three Fiber and drei; animations with GSAP and Motion.",
      "Contact form sent through EmailJS, deployed on GitHub Pages under michalbialasdev.pl.",
    ],
    href: "https://github.com/Michal0ss/wdai_portfolio",
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
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 5,
        name: "GSAP",
        path: "/assets/logos/gsap.png",
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
    title: "Backend Developer",
    job: "Incat (FinTech)",
    date: "06.2026-Present",
    contents: [
      "Working for 4 months as a Backend Developer at Incat, a company building fintech software.",
      "Developing and maintaining backend services, APIs and integrations for financial products.",
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