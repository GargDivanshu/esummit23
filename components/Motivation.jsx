'use client';

import React from 'react'
import Image  from 'next/image';
import {motion} from 'framer-motion';
import { FadeIn , TextVariant, TextContainer} from './../utils/Motion';

const Motivation = () => {
  return (
    <>
    {/* laptop viww */}
    <motion.div
    variants={TextContainer}
    initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
     className="
     bg-[url('/saturn.gif')] bg-center font-poppins bg-background/50 bg-cover
     flex flex-row whitespace-pre text-white mx-auto justify-center items-center
     ">
     {/* bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink1 to-transparent */}
      <motion.div
      variants={FadeIn('right', 'tween', 0.4, 0.9)}
      >
      {/* <Image
      src="/purpleplanet.png"
      alt="planet"
      width={450}
      height={450}
      className="" /> */}
      </motion.div>
      <div className="flex flex-col my-4 text-4xl justify-center">
      <motion.div className="p-3 mx-auto "
      variants={TextVariant(0.8)}>
      AIM FOR THE MOON, 
      </motion.div>
        <motion.div className="p-3 mx-auto "
        variants={TextVariant(0.8)}>
        IF YOU MISS,
        </motion.div>
        <motion.div className="p-3 mx-auto"
        variants={TextVariant(0.8)}>
        YOU MAY REACH THE STARS
        </motion.div>
      </div>
    </motion.div>
   

   {/* mobile viww */}
    {/* <div className="md:hidden flex flex-row text-white">
      view 2
    </div> */}
    </>
  )
}

export default Motivation
