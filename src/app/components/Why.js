'use client';

// next image 
import Image from "next/image";

// icons 
import { 
  MdHandshake,
  MdKey,
  MdTrendingUp,
} from 'react-icons/md';

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

export default function Why() {
  return (
    <section className="section flex items-center">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }} 
          className="h2 text-center">Bezkonkurenčná dokonalosť a spokojnosť zákazníkov
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }} 
          className="max-w-[680px] text-center mx-auto mb-2">
          Naša oddanosť poskytovaniu výnimočných služieb nás odlišuje od konkurencie. Od chvíle, keď sa s nami spojíte, sa snažíme pri každej interakcii prekročiť vaše očakávania
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }} 
          className="hidden md:flex justify-center mb-6 xl:mb-2">
          <Image
          src={'/images/why/car.svg'}
          width={1060}
          height={420}
          alt=""
          />
        </motion.div>
        {/* grid items */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          {/* item 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Predávame jednoducho a rýchlo</h3>
            <p className="hidden xl:flex">Uprednostňujeme vaše potreby a ideme nad rámec toho, aby sme zaistili, že vaša skúsenosť s nami bude len vynikajúca</p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Predávame jednoducho a rýchlo</h3>
            <p className="hidden xl:flex">Uprednostňujeme vaše potreby a ideme nad rámec toho, aby sme zaistili, že vaša skúsenosť s nami bude len vynikajúca</p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Predávame jednoducho a rýchlo</h3>
            <p className="hidden xl:flex">Uprednostňujeme vaše potreby a ideme nad rámec toho, aby sme zaistili, že vaša skúsenosť s nami bude len vynikajúca</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
