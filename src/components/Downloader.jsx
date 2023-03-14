import React from "react";
import { styles } from "../styles";
import Pdf from "../CV.pdf";

const Downloader = () => {
  return (
    <div className="flex items-center justify-center flex-col md:mb-0 sm:mb-10">
      <h2
        className={
          "text-[40px] text-white md:text-[50px] font-bold md:text-[50px] pr-2"
        }
      >
        Hoja de Vida
      </h2>
      <p className={`${styles.sectionSubText} text-center mb-4`}>
        ¿Quieres ver mi CV?
      </p>
      <a href={Pdf} target="_blank">
        <button className="bg-blue-500 hover:bg-blue-700 text-white lg:text-[17px] md:text-[17px] font-bold py-3 px-6 rounded  mt-1">
          ¡Descargalo aqui!
        </button>
      </a>
    </div>
  );
};

export default Downloader;
