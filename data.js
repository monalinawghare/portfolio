/**
 * Monali Nawghare - Portfolio Data Store
 * Authentic structured data for Full Stack Developer portfolio
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Monali Nawghare",
    title: "Full Stack Developer",
    subline: "Python & Django Developer | REST API Developer | React",
    subtitle: "Python | Django | REST APIs | React | JavaScript | MySQL | SQLite",
    email: "monalinawghare04@gmail.com",
    phone: "+918010496485",
    phoneFormatted: "+91 80104 96485",
    location: "Nagpur, Maharashtra, India",
    locationDetail: "Nagpur, Maharashtra, India (UTC +05:30)",
    openToWork: true,
    statusText: "Available for Opportunities",
    summary: "I’m a Full Stack Developer with hands-on experience in Python, Django, REST APIs, React, JavaScript, HTML, CSS, MySQL, and SQLite. I build responsive, database-driven web applications with a focus on clean frontend experiences, reliable backend systems, REST API development, and practical solutions.",
    socials: {
      github: "https://github.com/monalinawghare",
      linkedin: "https://www.linkedin.com/in/monali-nawghare-8ba374376/",
      email: "mailto:monalinawghare04@gmail.com",
      phone: "tel:+918010496485",
      whatsapp: "https://wa.me/918010496485?text=Hi%20Monali,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect."
    },
    declaration: "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief."
  },

  about: {
    summary: "I’m a Full Stack Developer focused on building practical, database-driven web applications using Python, Django, REST APIs, React, JavaScript, and SQL databases. I enjoy developing backend systems, authentication workflows, database structures, APIs, and responsive frontend interfaces.",
    capabilities: [
      {
        title: "Backend Development",
        icon: "server",
        technologies: ["Python", "Django", "Django REST Framework", "REST APIs"]
      },
      {
        title: "Frontend Development",
        icon: "layout",
        technologies: ["React", "JavaScript", "HTML5", "CSS3"]
      },
      {
        title: "Database Development",
        icon: "database",
        technologies: ["MySQL", "SQLite", "PostgreSQL"]
      },
      {
        title: "Development Tools",
        icon: "tool",
        technologies: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "JIRA"]
      }
    ]
  },

  skills: [
    {
      category: "Backend & Programming",
      id: "backend",
      icon: "server",
      badges: ["Python", "Django", "Django REST Framework", "REST APIs", "C", "C++"]
    },
    {
      category: "Frontend",
      id: "frontend",
      icon: "layout",
      badges: ["React", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Databases",
      id: "databases",
      icon: "database",
      badges: ["MySQL", "SQLite", "PostgreSQL"]
    },
    {
      category: "Tools & Development",
      id: "devtools",
      icon: "tool",
      badges: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "JIRA"]
    },
    {
      category: "Development Practices",
      id: "practices",
      icon: "activity",
      badges: ["RESTful Architecture", "Agile", "Scrum", "CRUD", "Authentication", "Role-Based Access Control"]
    }
  ],

  projects: [
    {
      id: "student-management-crm",
      title: "Student Management CRM",
      category: "Full Stack / CRM",
      shortDesc: "A web-based Student Management CRM designed to manage student information and academic workflows through a centralized system.",
      fullDesc: "A web-based Student Management CRM developed with Python and Django to streamline academic administration. The system enables administrators, faculty members, and students to securely manage student profiles, course assignments, attendance, and academic grades through role-based access control and relational database integration.",
      techStack: ["Python", "Django", "Django REST Framework", "MySQL / SQLite", "HTML", "CSS", "JavaScript"],
      keyFeatures: [
        "User authentication with Role-Based Access Control (RBAC) for Admin, Faculty, and Students",
        "Student record management, profile directory, and semester tracking",
        "Faculty course and subject assignment workflows",
        "Attendance tracking and verification module",
        "Academic grade recording and report generation",
        "RESTful API endpoints for secure, structured data queries",
        "Full CRUD operations on student and academic entities"
      ],
      role: "Full Stack Developer - Backend Architecture, Database Schema Design, REST API Development & UI Integration",
      highlights: [
        "Implemented strict RBAC guards ensuring data isolation across Admin, Faculty, and Student roles.",
        "Designed structured relational models linking student profiles, courses, attendance records, and grade reports.",
        "Built administrative dashboards for streamlined academic tracking."
      ],
      github: "https://github.com/monalinawghare"
    },
    {
      id: "ecommerce-website",
      title: "GrandMart E-Commerce",
      category: "Full Stack (Django REST & React)",
      shortDesc: "A full-stack e-commerce application built with Django REST Framework and React + Vite. Features JWT auth, category browsing, cart checkout, Razorpay payments, and vendor dashboards.",
      fullDesc: "A complete full-stack e-commerce platform built with Django REST Framework for the backend and React + Vite for the frontend. It provides a modern online shopping experience featuring JWT-based authentication (SimpleJWT) for customers and vendors, category-based product browsing, dynamic cart management, order history tracking, vendor product management dashboards, and integrated Razorpay payment gateway processing.",
      techStack: ["Python", "Django", "Django REST Framework", "SimpleJWT", "React", "Vite", "Axios", "Razorpay", "PostgreSQL / SQLite", "React Router 6"],
      keyFeatures: [
        "User & Vendor Authentication: Secure signup and login with JWT-based API token authentication (SimpleJWT)",
        "Product Catalog & Categories: Category-based filtering, product details, image handling, and search",
        "Shopping Cart & Checkout: Interactive cart state management with real-time pricing and order placement",
        "Razorpay Payment Gateway: Secure payment checkout integration with order verification workflows",
        "Order Management & History: Comprehensive customer order tracking and vendor dashboard overviews",
        "Vendor Product Management: Dedicated vendor flows to create, update, and manage product inventory",
        "Responsive React Frontend: Modern UI powered by Vite, Axios API layer, and real-time alert notifications"
      ],
      role: "Full Stack Developer - Django REST API, JWT Auth, Database Schema, React Frontend & Razorpay Integration",
      highlights: [
        "Engineered modular Django backend architecture split into dedicated apps: accounts, categories, products, cart, orders, payments, and dashboard.",
        "Implemented JWT authentication with SimpleJWT, protecting private API endpoints and managing user/vendor permissions.",
        "Built responsive React + Vite interface with Axios API client for seamless state and asynchronous data flow.",
        "Integrated Razorpay payment processing with backend order creation and payment verification endpoints."
      ],
      liveDemo: "https://e-commerce-website-ten-pink.vercel.app/",
      github: "https://github.com/monalinawghare"
    },
    {
      id: "employee-task-dashboard",
      title: "Employee Task Dashboard",
      category: "React & Vite Dashboard",
      shortDesc: "A production-ready task management dashboard built with React + Vite. Employees can create, organize, filter, and track tasks with persistent localStorage state and zero backend requirements.",
      fullDesc: "A production-ready task management dashboard built with React 18 and Vite. Employees can create, organize, filter, reorder, and track tasks with a clean, responsive UI that works across mobile, tablet, and desktop. All data is persisted to browser localStorage, ensuring tasks survive page refreshes with no backend required. Built with React Router DOM 6, Context API (TaskContext), validated Add/Edit forms, HTML5 Drag & Drop reordering, dark mode toggle, and an Error Boundary.",
      techStack: ["React 18", "Vite 8", "React Router DOM 6", "Context API", "JavaScript", "LocalStorage", "CSS/html"],
      keyFeatures: [
        "Dashboard Overview: At-a-glance stat cards (Total, Completed, Pending, High Priority) & overall progress completion bar",
        "Full Task CRUD: Add, view, edit, delete (with 2-click confirm), and toggle complete/incomplete status",
        "Validated Add/Edit Form: Required-field validation with inline error messages preventing invalid submissions",
        "Search + Multi-Filter: Search by task title while filtering simultaneously by status and priority chips",
        "HTML5 Drag & Drop: Reorder tasks directly in the Task List view with persistent array state",
        "Dark Mode: Global theme toggle in navbar with preference persisted via CSS custom properties and data-theme",
        "Toast Notification Stack: In-context lightweight queue providing immediate action feedback",
        "Resilient Architecture: App-wide Error Boundary protection with try/catch wrapped localStorage operations"
      ],
      role: "Frontend / React Developer - Architecture, Component Design, Context State Management, Validation & Persistence",
      highlights: [
        "Engineered global state using React Context API (TaskContext) and custom useTasks() hook for predictable, single-source data flow.",
        "Built a shared, reusable TaskForm component for Add and Edit workflows to eliminate duplicate validation logic.",
        "Implemented instant Dark Mode switching with zero stylesheet duplication using CSS custom properties.",
        "Wrapped all localStorage operations in defensive try/catch blocks ensuring graceful degradation in incognito or quota-limited environments."
      ],
      liveDemo: "https://employee-task-dashboard-eight.vercel.app/",
      github: "https://github.com/monalinawghare"
    }
  ],

  whatIBuild: [
    {
      title: "Django Web Applications",
      icon: "server",
      description: "Database-driven web applications with authentication, CRUD operations and business workflows."
    },
    {
      title: "REST APIs",
      icon: "code",
      description: "Structured REST APIs for frontend integration, data management and application workflows."
    },
    {
      title: "Full Stack Applications",
      icon: "layers",
      description: "Responsive applications combining Django backend systems with modern frontend technologies."
    },
    {
      title: "Database-Driven Systems",
      icon: "database",
      description: "Applications backed by relational databases with structured models and reliable data management."
    }
  ],

  experience: [
    {
      role: "Web Developer Intern",
      period: "2026 – Present",
      type: "Internship",
      location: "Tars Technologies Pvt. Ltd. · Nagpur, India",
      activities: [
        "Assist in developing and maintaining responsive web applications.",
        "Work with frontend and backend technologies to implement web features.",
        "Develop and integrate REST APIs and work with databases.",
        "Write clean, maintainable and reusable code following development best practices.",
        "Perform testing, debugging and troubleshooting to improve application quality.",
        "Collaborate with team members throughout the development and maintenance process.",
        "Use Git/GitHub for version control and code management."
      ]
    },
    {
      role: "Python Full Stack Training",
      period: "2024 – 2025",
      type: "Professional Training",
      location: "CodyMake Solutions · Nagpur, India",
      activities: [
        "Learned Python programming and core programming concepts.",
        "Studied Django, HTML, CSS and JavaScript for web development.",
        "Learned database management, SQL and REST API fundamentals.",
        "Gained knowledge of frontend-backend integration and full-stack development."
      ]
    },
    {
      role: "C & C++ Programming Course",
      period: "2023 – 2024",
      type: "Technical Certification",
      location: "Unisoft Technologies · Nagpur, India",
      activities: [
        "Learned programming fundamentals using C and C++.",
        "Studied object-oriented programming and data structures.",
        "Developed understanding of programming logic, algorithms and problem-solving.",
        "Built a strong foundation in software programming concepts."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nagpur, Maharashtra",
      period: "Pursuing",
      status: "In Progress",
      type: "Master's Degree",
      badge: "Current Degree",
      icon: "award",
      description: "Advanced coursework in Software Engineering, Relational Database Management Systems, Distributed Architecture, and Scalable Application Design."
    },
    {
      degree: "Bachelor of Science (Information Technology)",
      institution: "Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) • Nagpur, MH",
      period: "Graduated: 2025",
      status: "Completed",
      type: "Bachelor's Degree",
      badge: "Graduated 2025",
      icon: "book-open",
      description: "Comprehensive foundation in Computer Science fundamentals, Object-Oriented Programming, Data Structures, Relational Database Systems (SQL), and Web Technologies."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board • Pune, MH",
      period: "2020 - 2022",
      status: "Completed 2022",
      type: "Junior College",
      badge: "Completed 2022",
      icon: "check-circle",
      description: "Science & Information Technology stream with focus on Mathematics, Computer Fundamentals, and Analytical problem solving."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board • Pune, MH",
      period: "2020",
      status: "Completed 2020",
      type: "High School",
      badge: "Completed 2020",
      icon: "check-circle",
      description: "Solid foundational education in Mathematics, Science, and English with distinction."
    }
  ],

  certifications: [
    {
      title: "Python Full Stack Development",
      issuer: "CodyMake Solutions",
      badge: "Verified Certificate",
      skills: ["Python Core & OOP", "Django", "Django REST Framework", "React / JavaScript", "REST APIs", "MySQL / SQLite"],
      description: "Comprehensive training in Python Full Stack Web Development covering Python OOP, Django, Django REST Framework, React, JavaScript, HTML5/CSS3, relational database design (MySQL/SQLite), and RESTful API development.",
      certificateUrl: "assets/certificates/Monali_Nawghare_Python_Certificate.pdf"
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte · Forage",
      badge: "Verified Certificate",
      skills: ["Software Development", "Technology Simulation", "Coding Practices", "Problem Solving", "Enterprise Standards"],
      description: "Completed practical engineering tasks in Coding and Development through Deloitte's virtual job simulation, demonstrating real-world software architecture and development practices.",
      certificateUrl: "assets/certificates/Monali_Nawghare_Deloitte_Technology_Certificate.png"
    },
    {
      title: "AI Tools & Claude Workshop",
      issuer: "be10x",
      badge: "Verified Certificate",
      skills: ["AI Tools", "Claude AI", "AI-Assisted Coding", "AI Debugging", "Data Analysis", "Productivity Tools"],
      description: "Hands-on certification in AI-assisted rapid coding, debugging, automated data analysis, presentation generation, and AI productivity workflows using Claude and modern generative AI tools.",
      certificateUrl: "assets/certificates/Monali_Nawghare_be10x_AI_Certificate.png"
    },
    {
      title: "C & C++ Programming",
      issuer: "Unisoft Technologies",
      badge: "Grade 'A' (Excellent)",
      skills: ["C Programming", "C++ OOP", "Pointers & Memory", "Data Structures", "Algorithms", "Cert #1040862372"],
      description: "Comprehensive training in C & C++ systems programming, cleared with 'A' Grade. Covered memory management, pointers, object-oriented concepts, data structures, and algorithmic problem solving.",
      certificateUrl: "assets/certificates/Monali_Nawghare_C_Cpp_Certificate.pdf"
    }
  ]
};


if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
