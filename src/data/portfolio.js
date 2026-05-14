export const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Java', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Angular', 'ASP.NET', 'three.js', '.NET Core', 'SpringBoot'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Docker', 'CI/CD Pipelines', 'Git', 'Vercel'],
  },
  {
    category: 'Testing',
    items: ['TDD', 'Unit Testing', 'Integration Testing', 'Postman', 'Swagger'],
  },
  {
    category: 'Practices',
    items: ['Clean Architecture', 'DDD', 'OWASP', 'Agile/ Scrum', 'GitHub Copilot'],
  },
];

export const experience = [
  {
    period: 'Aug 2025 - Present',
    role: 'Web Developer',
    company: 'Academic Dress Hire',
    location: 'New Zealand',
    current: true,
    bullets: [
      'Built and maintained full-stack applications using React, .NET, and PostgreSQL with modular, domain-driven architecture.',
      'Designed REST APIs that streamlined order processing, eliminating a category of customer-facing input errors.',
      'Applied TDD across frontend and backend layers, reducing production defects and improving test coverage.',
      'Managed Azure deployment pipelines ensuring smooth rollouts with minimal downtime.',
      'Leveraged GitHub Copilot to accelerate feature delivery and produce cleaner, more consistent code.',
    ],
    stack: ['React.js', 'D3.js', '.NET C#', 'PostgreSQL', 'Azure', 'GitHub Copilot'],
  },
  {
    period: 'Mar 2023 - Jun 2024',
    role: 'Associate Software Engineer',
    company: 'LB Finance PLC',
    location: 'Sri Lanka',
    current: false,
    bullets: [
      'Built full-stack financial applications in Angular, .NET, and SQL Server supporting high-volume transactions on a mission-critical platform.',
      'Applied OWASP secure coding practices across all features, proactively identifying and mitigating risks.',
      'Optimised SQL queries and database indexing, significantly reducing report generation time on large datasets.',
      'Contributed to blameless postmortems and root cause analysis to drive proactive system improvements.',
    ],
    stack: ['Angular', '.NET Core C#', 'SQL Server', 'TypeScript', 'Azure'],
  },
  {
    period: 'Jul 2022 - Feb 2023',
    role: 'Intern Software Engineer',
    company: 'LB Finance PLC',
    location: 'Sri Lanka',
    current: false,
    bullets: [
      'Developed frontend and backend features using Angular, .NET, and SQL Server in a real production environment.',
      'Assisted with API integrations and database operations, improving system connectivity and data flow.',
      'Participated in Agile ceremonies and code reviews, building core engineering practices from the ground up.',
    ],
    stack: ['Angular', '.NET Core', 'SQL Server', 'TypeScript'],
  },
];

export const projects = [
  {
    icon: '🎓',
    type: 'Client Project (On-going)',
    title: 'Hire & Buy Regalia Web Application and CMS Platform for Academic Dress Hire',
    description:
      'Full-stack order management platform for academic regalia rentals. Built with React, .NET, and PostgreSQL using modular domain-driven design. Features a multi-step ordering UX, REST APIs, and Azure CI/CD pipelines for reliable deployments.',
    stack: ['React.js', '.NET(C#)', 'PostgreSQL', 'Azure', 'CI/CD'],
  },
  {
    icon: '🎥',
    type: 'Client Project',
    title: 'Photo Gallary for Fern Lens Photography',
    description:
      'Built a client-facing photography portfolio website featuring a dynamic masonry gallery with category filtering, lightbox viewer, and slideshow, demonstrating strong front-end UI/UX skills. Integrated Koalendar booking API to enable seamless client session scheduling, connecting front-end interactions with third-party service workflows and dark/light theme toggle and fully responsive design, ensuring a polished, accessible experience across all devices. Applied CSS pre-processors and modern JavaScript techniques for maintainable, performant styling and animations.',
    link: 'https://www.fernlensphotography.nz/',
    stack: ['React.js', 'JavaScript', 'Vite', 'CSS', 'Vercel'],
  },
  {
    icon: '🤝',
    type: 'Academic Project',
    title: 'Charity Community Management System',
    description:
      'Full-stack community operations platform built in Angular, .NET C#, and SQL Server. Designed structured database models and scalable APIs to handle user data and transactions reliably across multiple modules.',
    stack: ['Angular', '.NET C#', 'SQL Server', 'TypeScript'],
  },
  {
    icon: '🎸',
    type: 'Client Project',
    title: 'Music Instrument Rental & Stock System',
    description:
      'C# Windows desktop application for instrument rental and inventory management. Built with object-oriented design principles and relational database models, ensuring accurate stock tracking and full data consistency.',
    stack: ['C#', 'Windows App', 'SQL', 'OOP'],
  },
];

export const education = [
  {
    degree: 'Master of Information Sciences',
    school: 'Massey University',
    location: 'Auckland, NZ',
    period: 'Jul 2024 - Nov 2025',
    distinction: true,
    grade: '🏅 Graduated with Distinction',
    note: '60-credit industry capstone project covering the full software delivery lifecycle.',
  },
  {
    degree: 'BSc in Management Information Systems (Special)',
    school: 'NSBM Green University',
    location: 'Sri Lanka',
    period: 'Oct 2019 - Nov 2023',
    distinction: false,
    grade: '🏅 Graduated with Second Class Upper',
    note: 'Covered ERP, SaaS, system integration, and data-driven workflows across both business and IT domains.',
  },
];
