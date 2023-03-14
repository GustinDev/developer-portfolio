import Footer from "./Footer";
import Downloader from "./Downloader";
import { styles } from "../styles";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Personal = () => {
  return (
    <motion.div variants={fadeIn("", "", 0.1, 1.5)}>
      <h2
        className={`${styles.sectionHeadText} text-center border-white mb-20`}
      >
        Información Personal
      </h2>
      <div className="flex flex-col items-center justify-center space-x-4 text-center md:flex-row ">
        <div className="w-1/2  border-white h-1/2">
          <Downloader />
        </div>
        <div className="w-1/2 h-1/2 lg:border-l border-white  md:border-t-0 md:border-l border-gray-400 sm:border-t-0 m-0">
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Personal, "");
