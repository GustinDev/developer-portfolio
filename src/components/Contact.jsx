import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import swal from 'sweetalert';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      swal({
        title: '¡Mensaje Enviado!',
        text: 'Me comunicaré lo más pronto posible.',
        icon: 'success',
        button: 'Aceptar',
      });

      await emailjs.send(
        'service_15a5mso',
        'template_d6ylcxd',
        {
          from_name: data.name,
          to_name: 'Juan David Gustin',
          from_email: data.email,
          to_email: 'juandgustin@gmail.com',
          from_phone: data.phone,
          message: data.message,
        },
        'u-QBAzeFYmV_VDbW6'
      );

      reset();
    } catch (error) {
      console.error(error);
      swal({
        title: '¡Sucedió un error!',
        text: 'Lo lamento mucho. También puedes contactarme por mis redes sociales.',
        icon: 'error',
        button: 'Aceptar',
      });
    }
  };

  return (
    <div className='m-2 xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 rounded-2xl'
      >
        <p className={styles.sectionSubText}>¿Nos ponemos en contacto?</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-12 flex flex-col'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 -mt-8'>Nombre</span>
            <input
              type='text'
              name='name'
              placeholder='¿Cuál es tu nombre?'
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              {...register('name', { required: 'El nombre es requerido' })}
            />
            {errors.name ? (
              <span className='text-red-500 mb-2'>{errors.name.message}</span>
            ) : (
              <div className='h-[24px] mb-2'></div>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Correo</span>
            <input
              type='email'
              name='email'
              placeholder='¿Cuál es tu correo?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              {...register('email', {
                required: 'El correo electrónico es requerido',
              })}
            />
            {errors.email ? (
              <span className='text-red-500 mb-2'>{errors.email.message}</span>
            ) : (
              <div className='h-[24px] mb-2'></div>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Celular</span>
            <input
              type='tel'
              name='phone'
              placeholder='¿Cuál es tu celular?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              {...register('phone', {
                required: 'El número de celular es requerido',
              })}
            />
            {errors.phone ? (
              <span className='text-red-500 mb-2'>{errors.phone.message}</span>
            ) : (
              <div className='h-[24px] mb-2'></div>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Mensaje</span>
            <textarea
              rows={4}
              name='message'
              placeholder='Envíame un mensaje.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              {...register('message', { required: 'El mensaje es requerido' })}
            />
            {errors.message ? (
              <span className='text-red-500 mb-2'>
                {errors.message.message}
              </span>
            ) : (
              <div className='h-[24px] mb-2'></div>
            )}
          </label>

          <button
            type='submit'
            className='bg-tertiary hover:bg-light py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Enviar
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
