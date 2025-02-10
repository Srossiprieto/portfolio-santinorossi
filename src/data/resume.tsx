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
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Gestion de stock, ventas, compras, usuarios, productos, categorias, proveedores, clientes, analíticas, exportación de datos en pdf/excel, interfaz intuitiva, responsive, manejo de sesiones y rutas privadas.Integración de la api Afip para facturación electrónica.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Docker"
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "API - FACTUS facturación electrónica",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Sistema full-stack de facturación electrónica integrado con la API de Halltech Colombia. Incluye autenticación OAuth2, gestión de facturas electrónicas, panel administrativo moderno y sistema de paginación avanzado. Desarrollado con arquitectura modular y diseño responsive.",
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
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfqtt8l2/video/upload/v1739055106/uub8eyjqlktcyyherqfb.mp4",
    },
    {
      title: "ScanOrderly",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Software personalizado diseñado principalmente para restaurantes, pero adaptable a diversos tipos de negocios. Gestión de ordenes en tiempo real, control de inventarios, análisis detallado de ventas y gastos, exportación de datos en pdf/excel e interfaz intuitiva, más información en la landing page.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.youtube.com/watch?v=P0YaegQU62I&t=16s",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Admin Panel - Software",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Panel de administración para gestionar usuarios, productos, categorías, ventas, compras, proveedores, clientes, analíticas, exportación de datos en pdf/excel, interfaz intuitiva, responsive, manejo de sesiones y rutas privadas.",
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
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfqtt8l2/video/upload/v1739055106/uub8eyjqlktcyyherqfb.mp4",
    },
    {
      title: "PixiFi",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "E-commerce full-stack, con un diseño modular y escalable. Redux junto con Redux Toolkit para la gestión eficiente del estado global.El backend utiliza Node.js, Express y MongoDB con Mongoose para la persistencia de datos. Implementación de JWT para autenticación y rutas privadas.",
      technologies: [
        "React",
        "StyledComponents",
        "MongoDB",
        "Mongoose",
        "Express",
        "NodeJS",
        "TypeScript",
        "Redux Toolkit",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixify-swart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Srossiprieto/Integrador-React-Sr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    
    
    {
      title: "ScanOrderly - Landing Page",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Landing page para el software ScanOrderly, con información detallada sobre el producto, características, precios y contacto. Diseño futurista y minimalista, con animaciones y efectos visuales. Totalmente responsive.",
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
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dmfqtt8l2/video/upload/v1739055106/uub8eyjqlktcyyherqfb.mp4",
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
