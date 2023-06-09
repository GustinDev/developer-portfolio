import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy <span className='text-[#915EFF]'>Juan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desarrollador Frontend (React). <br className='sm:block hidden' />
            Experto en interfaces de <br className='sm:block hidden' />
            usuario y web apps.
          </p>

          <br />
          <p
            className={`-mt-4 sm:text-[16px] text-[14px] text-secondary uppercase tracking-wider`}
          >
            Pro Tip: Puedes mover el escritorio.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* Moble Tocuh Button */}
      <div className='absolute bottom-20 md:bottom-10 lg:bottom-10 w-full flex flex-col justify-center items-center'>
        {/* Moble */}
        <a href='#about'>
          <div className=' w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2  hover:border-slate-300'>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className={`w-2 h-2 rounded-full bg-slate-50 mb-4 hover:bg-slate-300`}
            />
          </div>
        </a>
        <a href='#about'>
          <p
            className={`${styles.sectionSubText} pt-4 text-slate-50 hover:text-stone-300`}
          >
            Clickeame para bajar
          </p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
