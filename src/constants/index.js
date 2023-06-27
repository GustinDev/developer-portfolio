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
  wordpress,
  cimaxcol,
  teesa,
  dogworld,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'works',
    title: 'Proyectos',
  },
  {
    id: 'work',
    title: 'Experiencia',
  },
  {
    id: 'data',
    title: 'Info',
  },
  ,
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const services = [
  {
    title: 'WEB DEVELOPER',
    icon: web,
  },
  {
    title: 'FRONTEND DEVELOPER',
    icon: mobile,
  },
  {
    title: 'REACT DEVELOPER',
    icon: creator,
  },
  {
    title: 'UX DESIGNER',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML & CSS',
    icon: html,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bt,
  },
  {
    name: 'Node Express',
    icon: nodejs,
  },
  {
    name: 'Git & Github',
    icon: git,
  },
  {
    name: 'Wordpress',
    icon: wordpress,
  },
];

const technologiesMobile = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
];

const experiences = [
  {
    title: 'Bilingual Agent',
    company_name: 'Teleperformance',
    icon: starbucks,
    iconBg: '#E6DEDD',
    date: 'Septiembre 2022 - Noviembre 2022',
    points: [
      'Traducción simúltanea: Proporcionar interpretación en tiempo real durante las llamadas telefónicas, reuniones y chat.',
      'Traducción de documentos: Traducir documentos importantes de la empresa, como contratos, informes y correos electrónicos, del inglés al español o viceversa',
      'Resolución de Problemas: Proporcionar asistencia en la solución de problemas o transferir al cliente a alguien especializado en el tema.',
    ],
  },
  {
    title: 'Web Developer Freelancer',
    company_name: 'Freelancer',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Noviembre 2022 - Actualmente',
    points: [
      'Crear y diseñar interfaces de usuario interactivas, atractivas y responsive utilizando diferentes tenologías actuales.',
      'Optimizar el rendimiento de los sitios web y aplicaciones para una mejor experiencia del usuario.',
      'Trabajar en estrecha colaboración con los desarrolladores de back-end para integrar la funcionalidad del servidor con la interfaz de usuario.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Gran profesional con buena capacidad adaptativa, es amigable y dedicado.',
    name: 'Patricia Andino',
    designation: 'RRHH',
    company: 'Colombia',
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
  {
    testimonial:
      'Alguien apasionado por lo que hace, proactivo y motivado por aprender habilidades nuevas.',
    name: 'Andrés Lucero',
    designation: 'Developer',
    company: 'Colombia',
    image: Lucero,
  },
  {
    testimonial:
      'Es un buen diseñador y programador, paciente y con buenos talentos por demostrar.',
    name: 'Keneth Portilla',
    designation: 'Ingeniero',
    company: 'Colombia',
    image: Kenke,
  },
];

const projects = [
  {
    name: 'Teesa S.A.S',
    description:
      'Aplicación Web E-commerce Responsive creada para el negocio Teesa S.A.S., empresa dedicada a la comercialización de equipos alimenticios.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: teesa,
    source_code_link: 'https://pf-teesa-front.vercel.app/',
  },
  {
    name: 'Cimaxcol S.A.S',
    description:
      'Aplicación Web Responsive creada para el negocio Cimaxcol S.A.S, empresa dedicada a la comercialización de acabados de construcción.',
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
    ],
    image: cimaxcol,
    source_code_link: 'https://euphonious-pithivier-1b0cfd.netlify.app/',
  },
  {
    name: 'DogWorld',
    description:
      'Aplicación Web Responsive en formato Wiki para los amantes de los perros, el usuario puede navegar, filtrar, y crear datos acerca de los perros.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: dogworld,
    source_code_link: 'https://dogworld-gamma.vercel.app/home',
  },
  {
    name: 'Diario de las Pesadillas',
    description:
      'Aplicación Web orientada a un público infantil, alberga cuentos, audiolibros y cortometrajes de terror.',
    tags: [
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
      {
        name: 'js',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: carrent,
    source_code_link:
      'https://gustindev.github.io/DiarioDeLasPesadillas/index.html',
  },
  {
    name: 'Esto Nos Cuentan',
    description:
      'Aplicación Web que permite compartir historias de forma anónima a través de las redes sociales.',
    tags: [
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
      {
        name: 'js',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://gustindev.github.io/EstoNosCuentan/',
  },
  {
    name: 'Pastelitos Dulces',
    description:
      "Aplicación Web creada para 'Pastelitos', un emprendimiento de venta de resposteria y panaderia.",
    tags: [
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
      {
        name: 'js',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://gustindev.github.io/PastelitosDulces/',
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
