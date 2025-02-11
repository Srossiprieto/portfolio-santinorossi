import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Santino Rossi Prieto",
  initials: "SRP",
  url: "https://santinorossi.vercel.app/",
  location: "Junín, Buenos Aires Argentina",
  locationLink: "https://www.google.com.ar/maps/place/Jun%C3%ADn",
  description:
    "Software Developer and CEO of FusionDevs, a company specialized in custom software development. Passionate about creating scalable and high-performance solutions, with a focus on innovation and technical excellence. I combine my technical expertise with business vision to lead projects and teams toward exceptional results.",
  summary:
    "Technology entrepreneur with strong full-stack development background and experience in creating customized solutions. As founder and CEO of FusionDevs, I lead a team dedicated to transforming ideas into robust and scalable software products. My approach combines technical expertise with strategic business vision.",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "CSS",
    "TailwindCSS",
    "Node.js",
    "Deno",
    "Express",
    "Postgres",
    "mySQL",
    "Sqlite",
    "Prisma",
    "Sequelize",
    "MongoDB",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "santirossip@gmail.com",
    tel: "+54 2355647692",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/srossiprieto",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santino-rossi/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_santirossip",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@srossicode",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:santirossip@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      phone: {
        name: "Call Me",
        url: "tel:+54 2355647692",
        icon: Icons.phone,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "FusionDevs",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "CO Founder & Software Engineer",
      logoUrl: "/fusiondev-blanco.png",
      start: "Oct 2024",
      end: undefined,
description: `
Led and developed management software for a wine store, integrated with the AFIP API.
Designed and implemented a system for restaurants with stock management, sales, and exportable analytics.
Created a customizable administration panel to manage stock, orders, and reports across multiple sectors.
Developed various custom software solutions utilizing APIs such as FACTUS, AFIP, MercadoPago, and Strapi.
Applied agile methodologies and best development practices within the team.`,
    }
  ],
  education: [
    {
      school: "UNNOBA",
      href: "https://unnoba.edu.ar/",
      degree: "Programming Technician",
      logoUrl: "/unnoba.png",
      start: "2024",
      end: 'Present',
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Full Stack Developer",
      logoUrl: "/udemy.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "Dev Talles",
      href: "https://cursos.devtalles.com/",
      degree: "Full Stack Developer",
      logoUrl: "/devtalles.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "Platzi",
      href: "https://platzi.com/",
      degree: "Full Stack Developer",
      logoUrl: "/platzi.webp",
      start: "2023",
      end: "Present",
    },
    
    {
      school: "Nucba",
      href: "https://www.nucba.com.ar/",
      degree: "Full Stack Developer",
      logoUrl: "/nucba_logo.jpeg",
      start: "2023",
      end: "2024",
    },
  ],
    projects: [
      {
        title: "FusionDevs - Software",
        dates: "📌 2025",
        href: "https://res.cloudinary.com/dmfqtt8l2/video/upload/v1739248554/SalesSystemFusionDevs_lzbgwl.mp4",
        active: true,
        description: "Stock management, sales, purchases, users, products, categories, suppliers, customers, analytics, data export in PDF/Excel, intuitive and responsive interface, session handling, and private routes. Integration with the AFIP API for electronic invoicing.",
        technologies: [
          "Java",
          "Spring Boot",
          "PostgreSQL",
          "React",
          "TypeScript",
          "TailwindCSS",
          "PHP",
          "Docker"
        ],
        image: "",
        video: "https://res.cloudinary.com/dmfqtt8l2/video/upload/v1739248554/SalesSystemFusionDevs_lzbgwl.mp4"
      },
      {
        title: "API - FACTUS Electronic Invoicing",
        href: "https://youtu.be/iW-4369aX4s?si=u1pLrXyuXHtKxUBL",
        dates: "📌 2025",
        active: true,
        description: "Full-stack electronic invoicing system integrated with the Halltech Colombia API. Includes OAuth2 authentication, electronic invoice management, a modern admin panel, and an advanced pagination system. Developed with modular architecture and a responsive design.",
        technologies: [
          "React",
          "Typescript",
          "TailwindCSS",
          "NodeJS",
          "Express",
          "PostgreSQL",
          "Prisma",
          "Docker"
        ],
        links: [
          {
            type: "Website",
            href: "https://youtu.be/iW-4369aX4s?si=qv2bkC-AS_45m26i",
            icon: <Icons.globe className='size-3' />
          }
        ],
        image: "",
        video: "https://res.cloudinary.com/dmfqtt8l2/video/upload/v1739250241/FactusVideo_w5gr7l.mp4"
      },
      {
        title: "ScanOrderly",
        href: "https://youtu.be/P0YaegQU62I?si=dQHmbjwSiqPC6Bva",
        dates: "📌 2024",
        active: true,
        description: "Custom software primarily designed for restaurants but adaptable to various types of businesses. Real-time order management, inventory control, detailed sales and expense analysis, data export in PDF/Excel, and an intuitive interface. More information is available on the landing page.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Zustand"
        ],
        links: [
          {
            type: "Website",
            href: "https://youtu.be/P0YaegQU62I?si=rw9yu2Rid-LMWn8Z",
            icon: <Icons.globe className='size-3' />
          }
        ],
        image: "/softwareScan.png",
        video: ""
      },
      {
        title: "Admin Panel - Software",
        href: "https://www.youtube.com/@srossicode",
        dates: "📌 2024",
        active: true,
        description: "Admin panel for managing users, products, categories, sales, purchases, suppliers, customers, analytics, data export in PDF/Excel, intuitive and responsive interface, session handling, and private routes.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Zustand"
        ],
        image: "/softwareAdmin.png",
        video: ""
      },
      {
        title: "PixiFi",
        href: "https://pixify-swart.vercel.app/",
        dates: "📌 2023",
        active: true,
        description: "Full-stack e-commerce with a modular and scalable design. Redux combined with Redux Toolkit for efficient global state management. The backend uses Node.js, Express, and MongoDB with Mongoose for data persistence. JWT authentication implementation for private routes.",
        technologies: [
          "React",
          "StyledComponents",
          "MongoDB",
          "Mongoose",
          "Express",
          "NodeJS",
          "TypeScript",
          "Redux Toolkit"
        ],
        links: [
          {
            type: "Website",
            href: "https://pixify-swart.vercel.app/",
            icon: <Icons.globe className='size-3' />
          },
          {
            type: "Source",
            href: "https://github.com/Srossiprieto/Integrador-React-Sr",
            icon: <Icons.github className='size-3' />
          }
        ],
        image: "/pixify.png",
        video: ""
      },
      {
        title: "ScanOrderly - Landing Page",
        href: "https://scan-orderly.vercel.app/",
        dates: "📌 2024",
        active: true,
        description: "Landing page for the ScanOrderly software, with detailed information about the product, features, pricing, and contact details. Futuristic and minimalist design, with animations and visual effects. Fully responsive.",
        technologies: [
          "React",
          "Typescript",
          "TailwindCSS",
          "NodeJS",
          "Express"
        ],
        links: [
          {
            type: "Website",
            href: "https://scan-orderly.vercel.app/",
            icon: <Icons.globe className='size-3' />
          }
        ],
        image: "",
        video: "https://res.cloudinary.com/dmfqtt8l2/video/upload/v1739247595/Santino_s_video_nfy7xb.mp4"
      }
    ],
  
  Youtube: [
    {
      title: "Srossicode",
      dates: "February 10th, 2025",
      location: "Argentina",
      description: "Youtube channel where I explain my projects and share my knowledge.",
      image: "/santidev.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      videos: [
        {
          title: "Software - Facturación Electrónica",
          icon: <Icons.youtube className="h-4 w-4" />,
          link: "https://youtu.be/iW-4369aX4s?si=lSHyXlZkciLW81S2",
        },
        {
          title: "Software - ScanOrderly Restaurantes",
          icon: <Icons.youtube className="h-4 w-4" />,
          link: "https://youtu.be/P0YaegQU62I?si=pEIMnND6UcUYDiWN",
        },
      ],
    },
  ],
} as const;
