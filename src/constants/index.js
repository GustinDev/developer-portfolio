import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  bt,
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
} from "../assets";

export const navLinks = [
  {
    id: "works",
    title: "Proyectos",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  ,
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "WEB DEVELOPER",
    icon: web,
  },
  {
    title: "FRONTEND DEVELOPER",
    icon: mobile,
  },
  {
    title: "REACT DEVELOPER",
    icon: creator,
  },
  {
    title: "UX DESIGNER",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bt,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const technologiesMobile = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bt,
  },
];

const experiences = [
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
    name: "Laura Mora",
    designation: "Administradora",
    company: "Colombia",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Una persona apasionada por lo que hace, proactivo y motivado por aprender sobre cosas nuevas.",
    name: "Andrés Lucero",
    designation: "Developer",
    company: "Colombia",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Buen diseñador, paciente y con buenas habilidades por mostrar.",
    name: "Keneth Portilla",
    designation: "Ingeniero",
    company: "Colombia",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
