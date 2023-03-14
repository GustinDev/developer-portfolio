import React from "react";
import { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologiesMobile } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  {
    /* Pongo isMobile */
  }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  {
    /* Termina isMobile */
  }
  let elementsToRender;
  {
    /* Usamos el codicional */
  }

  if (isMobile) {
    elementsToRender = technologiesMobile;
  } else {
    elementsToRender = technologies;
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={fadeIn("", "", 0.1, 1.5)}>
        <h2 className={styles.sectionHeadText}>Habilidades</h2>
        <br />
        <p className={styles.sectionSubText}>
          (PRO TIP: Sujeta y mueve las skills)
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Se mapean las technologies por el BallCanvas - Que es como una card*/}

        {elementsToRender.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* Each Ball has a Canvas or Card - BallCavas. TODA la textura y personalización está ahí */}
            <h1 className="text-center font-bold">{technology.name}</h1>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
