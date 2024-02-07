'use client';

// image 
import Image from "next/image";

import { useContext } from "react";

// components
import Search from "./Search";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// context
import { SearchContext } from "../context/search";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & image wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }} 
            className="h1"
            >
              Objednajte si svoj <span className="text-accent">termín</span> u nás
            </motion.h1>
            <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }} 
            className="decription max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">Nájdite si ideálnu jazdu na akékoľvek dobrodružstvo s našou rozmanitou ponukou cenovo dostupných a spoľahlivých požičovní áut</motion.p>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }} 
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[800px] xl:max-h-[482px] xl:absolute xl:-right-[40px] min-[1680px]">
            <Image
            src={'/images/hero/car.svg'}
            fill
            alt=''
            style={{ objectFit: 'contain' }}
            priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[53px] z-10 w-full max-w-[1920px]"
        >
          <Search/>
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}  
          >
            <Search/>
          </motion.div>
        </div>
      )}
    </section>
  )
}
