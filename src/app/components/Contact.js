'use client'

//image
import Image from "next/image";

//components
import Form from "./components/Form";

//link
import Link from "next/link";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

const Cotact = () => {
  return (
    <section className="section flex items-center">
      <div className="container mx-auto mt-24">
        <div className="mb-6 xl:mb-24 text-center justify-center">
          <motion.div 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className="container flex flex-col justify-center"
          >
            <h1 className="h2 md:h1 text-white">Poďme do toho spolu</h1>
            <div className="text-white flex flex-wrap gap-y-6 text-center justify-center items-center gap-x-16 my-12">
              <div className="h-full border border-white w-80 py-8 rounded-xl">
                <div className="">
                  <h3 className="subtitle md:text-2xl">Email</h3>
                  <p><Link className="subtitle text-sm" href="mailto:harvey.cafe.tapas@gmail.com">harvey.cafe.tapas@gmail.com</Link></p>
                </div>
              </div>
              <div className="h-full border border-white w-80 py-8 rounded-xl">
                <div className="">
                  <h3 className="subtitle md:text-2xl">Telofón</h3>
                  <p><Link className="subtitle text-sm" href="tel:+421944641938">+421944641938</Link></p>
                </div>
              </div>
              <div className="h-[146px] border border-white w-80 py-8 rounded-xl">
                <div className="">
                  <h3 className="subtitle md:text-2xl ">Kde ma nájdete</h3>
                  <div>
                    <Socials
                    containerStyles='flex gap-x-4 justify-center'
                    iconStyles='text-primary text-[18px] hover:text-muted-foreground duration-500'
                    />
                </div>
                </div>
            </div>
            </div>
          </motion.div>
            <Link href="https://wa.me/421944641938?text=Ahoj" target='_blank' className="z-30 right-5 fixed bottom-6 p-3 bg-[#25D366] rounded-full">
              <FaWhatsapp className='text-primary-foreground text-2xl'/>
            </Link>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 gap-x-16 items-center my-24 gap-y-24">
          <motion.div
          initial={{ opacity: 0, x: '-250' }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            <Image
            className="rounded-tl-[8.5rem] rounded-br-[8.5rem] mx-auto"
            src="/contact/contact.png"
            width={450}
            height={350}
            alt="Martin Čulen"
            />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: '250' }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            <div className="mx-auto xl:pr-16 max-w-[650px] justify-center">
              <div className="text-white mb-8 ">
                <h2 className="h2 mb-4">Ozvite sa</h2>
                <p className="text-sm font-extralight">Som k dispozícii pre projekty na voľnej nohe, komerčne novým aj existujúcim klientom. So sídlom v Spojených arabských emirátoch, dostupné po celom svete.</p>
              </div>
              <Form/>
            </div>
          </motion.div>
          </div>
            <motion.div 
            className=" justify-center items-center text-muted-foreground mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
              <div className="flex flex-col items-center text-center">
                <Logo/>
                  <h3 className="h4 md:h3 max-w-xl text-center my-8">Návahajte ma kedykoľvek kontaktovať</h3>
                  <p className="text-xs md:text-sm">Som k dispozícii pre projekty na voľnej nohe, komerčne novým aj existujúcim klientom. So sídlom v Spojených arabských emirátoch, dostupné po celom svete.</p>
                  <Socials 
                      containerStyles='flex gap-x-4 justify-center xl:justify-start'
                      iconStyles='text-primary mt-8 text-[20px] hover:text-muted-foreground duration-500'
                    />
              </div>
            </motion.div>
      </div>
    </section>
  )
}

export default Cotact