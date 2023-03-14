import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

{
  /* Creación y especificación de la cartas, para luego mapear projects*/
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Movement */}
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 150,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Card */}
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="relative w-full h-[230px] cursor-pointer"
        >
          {/* Image Project */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl "
          />
          {/* Image - Link - Github */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Card Text */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        {/* Hastags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

{
  /* Titulo, descripción y mapeo de projects*/
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          ¿Quieres conocer mi trabajo?
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos</h2>
      </motion.div>
      {/* Párrafo - Descripción de proyectos */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-4xl leading-[30px]"
        >
          Todos mi proyectos han sido diseñados para ofrecer una experiencia de
          usuario intuitiva y fácil de usar en una amplia gama de dispositivos.
          ¡Espero que disfrutes explorando mi trabajo!
        </motion.p>
      </div>
      {/* Mapeo de cada proyecto por cada carta. */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
