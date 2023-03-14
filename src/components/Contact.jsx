import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import swal from "sweetalert";

const Contact = () => {
  {
    /* Estado inicial de lo que recibimos*/
  }
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  {
    /* Loading  */
  }
  const [loading, setLoading] = useState(false);

  {
    /* Hacemos el update de los cambios del form, para que se vaya cambiando a medida de que el user los cambie */
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    {
      /* EMAILJS - CREAR Y DARLE DIRECCIÓN*/
    }
    {
      /* Dentro del send van 4 parámetros: Primero el service ID, luego template ID, los parámetros y luego el Public Key. Luego ponemos el then con las alertas y lo reseteamos.*/
    }
    emailjs
      .send(
        "service_0nxhlth",
        "template_mwvejec",
        {
          from_name: form.name,
          to_name: "Juan David Gustin",
          from_email: form.email,
          to_email: "juandgustin@gmail.com",
          message: form.message,
        },
        "u-QBAzeFYmV_VDbW6"
      )
      .then(
        () => {
          setLoading(false);
          swal({
            title: "¡Mensaje Enviado!",
            text: "Me comunicaré lo más pronto posible.",
            icon: "success",
            button: "Aceptar",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(
            "Lo siento, sucedió un error. Por favor comúniquemonos por otro medio, en la página también encontrarás mis redes sociales."
          );
        }
      );
  };
  {
    /* CREAR FORM DE CONTACTO(ESTILOS) - SUBMIT FORM, SLIDE y HANDLE CHANGE  */
  }
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>¿Nos ponemos en contacto?</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        {/* Formulario*/}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Correo</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Envíame un mensaje."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          {/* Enviar */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* Render Planeta*/}
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
