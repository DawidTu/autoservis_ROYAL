'use client'

//image
import Image from "next/image";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

export default function Services() {
  return (
    <section id="services" className="section flex">
      <div className="container mx-auto">
        <div className="mb-6 text-left justify-center">
          <motion.div className="flex flex-col justify-center">
            <motion.h3
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }} 
              className="h3 md:h2 text-black">Naše služby<span className="text-accent">.</span></motion.h3>
          </motion.div>
          <div className="grid grid-cols-2 justify-center">
            <div>
              {/* image */}
              <div>
                <Image
                  src={'/icons/services/PREDAJ.png'}
                  width={80}
                  height={89}
                  alt=""
                />
              </div>
              {/* text */}
              <div>Predaj vozidiel</div>
            </div>
            <div>
              {/* image */}
              <div>
                <Image
                  src={'/icons/services/POISTENIE.png'}
                  width={80}
                  height={89}
                  alt=""
                />
              </div>
              {/* text */}
              <div>Poistenie vozidiel</div>
            </div>
            <div>
              {/* image */}
              <div>
                <Image
                  src={'/icons/services/DOVOZ.png'}
                  width={80}
                  height={89}
                  alt=""
                />
              </div>
              {/* text */}
              <div>Dovoz vozidiel</div>
            </div>
            <div>
              {/* image */}
              <div>
                <Image
                  src={'/icons/services/VYKUP.png'}
                  width={80}
                  height={89}
                  alt=""
                />
              </div>
              {/* text */}
              <div>Výkup vozidiel</div>
            </div>
            <div>
              {/* image */}
              <div>
                <Image
                  src={'/icons/services/FINANCOVANIE.png'}
                  width={80}
                  height={89}
                  alt=""
                />
              </div>
              {/* text */}
              <div>Financovanie vozidiel</div>
            </div>
            <div>
              {/* image */}
              <div>
                <Image
                  src={'/icons/services/ZARUKA.png'}
                  width={80}
                  height={89}
                  alt=""
                />
              </div>
              {/* text */}
              <div>Záruka na vozidlo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
