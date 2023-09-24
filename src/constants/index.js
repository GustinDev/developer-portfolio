import {
  Kenke,
  Lucero,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  nest,
  tailwind,
  nodejs,
  git,
  starbucks,
  tesla,
  cimaxcol,
  todoapp,
  teesa,
  ultragym,
  portfolio,
  dogworld,
  carrent,
  jobit,
  tripguide,
  mysql,
  ap,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "works",
    title: "Proyectos",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "data",
    title: "Info",
  },
  ,
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "FULL STACK DEVELOPER",
    icon: web,
  },
  {
    title: "FRONTEND DEVELOPER",
    icon: mobile,
  },
  {
    title: "BACKEND DEVELOPER",
    icon: creator,
  },
  {
    title: "MOBILE DEVELOPER",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML & CSS",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nest,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git & Github",
    icon: git,
  },
];

const technologiesMobile = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nest,
  },
];

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company_name: "Ant Pack S.A.S",
    icon: ap,
    iconBg: "#E6DEDD",
    date: "Agosto 2023 - Actualmente",
    points: [
      "Crear interfaces visuales que sean intuitivas, atractivas y adaptables con Typescript, React y NextJS.",
      "Construir APIs rápidas y estables, además de sus respectivas bases de datos, todo mediante el uso de Typescript, Nest y MySQL.",
      "Trabajar en equipo y colaborar con otros desarrolladores, escribiendo código claro y con buenas prácticas para crear aplicaciones web sólidas y eficientes.",
    ],
  },
  {
    title: "Bilingual Agent",
    company_name: "Teleperformance",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Septiembre 2022 - Noviembre 2022",
    points: [
      "Traducción simúltanea: Proporcionar interpretación en tiempo real durante las llamadas telefónicas, reuniones y chat.",
      "Traducción de documentos: Traducir documentos importantes de la empresa, como contratos, informes y correos electrónicos, del inglés al español o viceversa",
      "Resolución de Problemas: Proporcionar asistencia en la solución de problemas o transferir al cliente a alguien especializado en el tema.",
    ],
  },
  {
    title: "Web Developer Freelancer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Noviembre 2022 - Actualmente",
    points: [
      "Crear y diseñar interfaces de usuario interactivas, atractivas y responsive utilizando diferentes tenologías actuales.",
      "Optimizar el rendimiento de los sitios web y aplicaciones para una mejor experiencia del usuario.",
      "Trabajar en estrecha colaboración con los desarrolladores de back-end para integrar la funcionalidad del servidor con la interfaz de usuario.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Gran profesional con buena capacidad adaptativa, es amigable y dedicado.",
    name: "Patricia Andino",
    designation: "RRHH",
    company: "Colombia",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    testimonial:
      "Alguien apasionado por lo que hace, proactivo y motivado por aprender habilidades nuevas.",
    name: "Andrés Lucero",
    designation: "Developer",
    company: "Colombia",
    image: Lucero,
  },
  {
    testimonial:
      "Es un buen diseñador y programador, paciente y con buenos talentos por demostrar.",
    name: "Keneth Portilla",
    designation: "Ingeniero",
    company: "Colombia",
    image: Kenke,
  },
];

const projects = [
  {
    name: "Teesa S.A.S",
    description:
      "Aplicación Web E-commerce responsive creada para el negocio Teesa S.A.S., empresa dedicada a la comercialización de equipos alimenticios.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: teesa,
    source_code_link: "https://www.teesa.online/",
    githubl: "https://github.com/LauraCayuelaT/PFTeesa_Front",
  },
  {
    name: "UltraGym",
    description:
      "Aplicación Web responsive creada para el gimnasio en surgimiento Ultragym, se descataca por una UX-UI moderna e intuitiva.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: ultragym,
    source_code_link: "https://ultra-gym-ts-react.vercel.app/",
    githubl: "https://github.com/GustinDev/ultra-gym-ts-react",
  },
  {
    name: "Cimaxcol S.A.S",
    description:
      "Aplicación Web responsive creada para el negocio Cimaxcol S.A.S, empresa dedicada a la comercialización de acabados de construcción.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: cimaxcol,
    source_code_link: "https://euphonious-pithivier-1b0cfd.netlify.app/",
    githubl: "https://euphonious-pithivier-1b0cfd.netlify.app/",
  },
  {
    name: "DogWorld",
    description:
      "Aplicación Web responsive Wiki para los amantes de los perros. Se puede navegar, filtrar, y crear datos acerca de los perros.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: dogworld,
    source_code_link: "https://dogworld-gamma.vercel.app/home",
    githubl: "https://github.com/GustinDev/dogworld",
  },
  {
    name: "Portafolio",
    description:
      "Portafolio en línea responsive para destacar mis proyectos como desarrollador web frontend. ¡Tú estás aquí! Gracias por entrar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://www.gustindev.tech/",
    githubl: "https://github.com/GustinDev/developer-portfolio",
  },
  {
    name: "Awesome To Do App",
    description:
      'Aplicación Web orientada a ayudarte a organizar tareas, puedes crear, editar, borrar y filtrar "To Dos".',
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ts",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: todoapp,
    source_code_link: "https://ultra-mega-awesome-todo-app.vercel.app/",
    githubl: "https://github.com/GustinDev/ultra-mega-awesome-todo-app",
  },
  {
    name: "Diario de las Pesadillas",
    description:
      "Aplicación Web orientada a un público infantil, alberga cuentos, audiolibros y cortometrajes de terror.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://gustindev.github.io/DiarioDeLasPesadillas/index.html",
    githubl: "https://github.com/GustinDev/DiarioDeLasPesadillas",
  },
  {
    name: "Esto Nos Cuentan",
    description:
      "Aplicación Web que permite compartir historias de forma anónima a través de las redes sociales.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://gustindev.github.io/EstoNosCuentan/",
    githubl: "https://github.com/GustinDev/EstoNosCuentan",
  },
  {
    name: "Pastelitos Dulces",
    description:
      "Aplicación Web creada para 'Pastelitos', un emprendimiento de venta de resposteria y panaderia.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://gustindev.github.io/PastelitosDulces/",
    githubl: "https://github.com/GustinDev/PastelitosDulces",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  technologiesMobile,
};
