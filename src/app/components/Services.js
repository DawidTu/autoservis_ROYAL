'use client'

//image
import Image from "next/image";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

//Link
import Link from "next/link";

//data
const Data = [
  {
    image: '/icons/services/PREDAJ.png',
    name: 'Predaj vozidiel',
    link: '/',
  },
  {
    image: '/icons/services/DOVOZ.png',
    name: 'Dovoz vozidiel',
    link: '/',
  },
  {
    image: '/icons/services/FINANCOVANIE.png',
    name: 'Financovanie vozidiel',
    link: '/',
  },
  {
    image: '/icons/services/POISTENIE.png',
    name: 'Poistenie vozidiel',
    link: '/',
  },
  {
    image: '/icons/services/VYKUP.png',
    name: 'Výkup vozidiel',
    link: '/',
  },
  {
    image: '/icons/services/ZARUKA.png',
    name: 'Záruka na vozidlo',
    link: '/',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="mb-6 justify-center items-center">
          <motion.div className="flex flex-col justify-center">
            <motion.h3
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }} 
              className="h3 md:h2 text-black">Naše služby<span className="text-accent">.</span></motion.h3>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }} 
            className="items-center grid grid-cols-2 xl:grid-cols-3 gap-6">
            {Data.map((item, index) => {
              return (
                <div className="mt-10 text-center hover:border hover:border-accent" key={index}>
                  {/* image */}
                  <Link href={item.link}>
                    <div className="my-4 flex items-center justify-center">
                      <Image
                        src={item.image}
                        width={98}
                        height={98}
                        alt=""
                      />
                    </div>
                    {/* text */}
                    <div className="flex items-center justify-center">
                      <h3 className="h3 text-accent">{item.name}</h3>
                    </div>
                  </Link>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
