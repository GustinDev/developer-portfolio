import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//HIGHER ORDER COMPONENT - CONTAINS ALL ABOUT
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.7, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 0.5,
            speed: 50,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Sobre mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-4xl leading-[30px] "
      >
        ¡Hola! Soy un Desarrollador Web Frontend bilingüe. Me considero un
        apasionado por la tecnología y la programación. Si necesitas un
        desarrollador confiable, altamente motivado y especializado en React, no
        dudes en contactarme.
        <br></br>
        <br></br>¡Estoy emocionado por trabajar contigo!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 flex items-center justify-center">
        {
          //Go to services to change experience
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
