'use client'

//image
import Image from "next/image";

//components
import Form from "./Form";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

const Cotact = () => {
  return (
    <section id="contact" className="section flex items-center">
      <div className="container mx-auto">
        <div className="mb-6 text-center justify-center">
          <motion.div className="flex flex-col justify-center">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }} 
              className="h2 md:h1 text-white">Kontakt<span className="text-accent">.</span></motion.h1>
          </motion.div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 gap-x-16 items-center gap-y-24">
          <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }} 
          >
            <motion.div
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <Image
              className="rounded-xl mx-auto"
              src="/images/contact/contact.png"
              width={370}
              height={150}
              alt=""
              />
            </motion.div>
          </motion.div>
          <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }} 
          >
            <div className="mx-auto xl:pr-16 max-w-[650px] justify-center">
              <div className="text-white mb-8">
                <h2 className="h2 mb-4 text-accent">Ozvite sa</h2>
                <p className="text-sm font-extralight">Som k dispozícii pre projekty na voľnej nohe, komerčne novým aj existujúcim klientom. So sídlom v Spojených arabských emirátoch, dostupné po celom svete.</p>
              </div>
              <Form/>
            </div>
          </motion.div>
          </div>
      </div>
    </section>
  )
}

export default Cotact