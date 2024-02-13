'use client';

// next image 
import Image from "next/image";

// icons 
import { 
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from 'react-icons/md';

// react count up
import CountUp from "react-countup";

// react intersection observe
import { useInView } from "react-intersection-observer";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

//Link
import Link from "next/link";

import Worker from "./Worker";
export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={ref} id="about" className="section flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }} 
            className="flex-1 mb-8 xl:mb-0">
            <Image
              className="rounded-[20px]"
              src={'/images/about/car01.png'}
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
          {/* text & stats */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }} 
                className="h2">
                  Autoservis <span className="text-accent uppercase">royl</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }} 
                className="mb-4 max-w-md">
                  V Auroservice <span className="font-bold uppercase">royal</span> spojili sme vášeň k automobilom s odborným know-how, aby sme priniesli našim zákazníkom prvotriedne služby v oblasti údržby a opravy vozidiel. Naša oddanosť kvalite a spokojnosti zákazníkov nás posúva k tomu, aby sme každý servisný zákrok realizovali s precíznosťou a starostlivosťou. Ponúkame široký rad služieb vrátane pravidelných servisov, diagnostiky, opráv a údržby. 
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }} 
                className="flex items-center gap-x-8 mb-6">
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent"/>
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1}/>
                    ) : null }
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    druhov áut
                  </div>
                </div>
                {/* rental */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent"/>
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={150} duration={3} delay={1}/>
                    ) : null }
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    predaných áut
                  </div>
                </div>
                {/* repair */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent"/>
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={1150} duration={3} delay={1}/>
                    ) : null }
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    opravených áut
                  </div>
                </div>
              </motion.div>
                {/* btn */}
                <motion.button
                  variants={fadeIn('up', 1)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }} 
                  className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
                >
                  <Link href="vsetky_vozidla">
                    Prejsť na všetky autá
                  </Link>
                </motion.button>
            </div>
          </div>
        </div>
          <div>
            <Worker/>
          </div>
      </div>
    </section>
  )
}
