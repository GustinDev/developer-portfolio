import { styles } from "../styles";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col pb-2 pt-10">
      <p className="text-[40px] text-white md:text-[50px] font-bold md:text-[50px] pl-4">
        Redes Sociales
      </p>
      <p className={`${styles.sectionSubText} text-center`}>
        Links a mis redes
      </p>
      <div className="flex items-center justify-center flex-row ">
        <a
          target="_blank"
          href="
          https://wa.link/oqn6tk"
        >
          <i className="fa-brands fa-whatsapp fa-4x m-4 hover:text-green-500 "></i>
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/juan-david-gustin-andino?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4B86%2FrY%2BTZCqOrwEVdtsKQ%3D%3D"
        >
          <i className="fa-brands fa-linkedin fa-4x m-4  hover:text-blue-500 "></i>
        </a>

        <a target="_blank" href="https://github.com/GustinDev">
          <i className="fa-brands fa-github fa-4x m-4  hover:text-purple-500 "></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
