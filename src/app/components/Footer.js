'use client';

// next image 
import Image from "next/image";

// icons 
import {FaPhone, FaEnvelope} from 'react-icons/fa6';

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// components
import Copyright from "./Copyright";

// link / react scroll
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }} 
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={'home'}
              smooth={true}
              spy={true}
              classID="cursor-poiner"
            >
              <Image src={'/icons/logo.svg'} width={200} height={200} alt=""/>
            </Link>
            {/* text */}
            <div className="text-secondary">
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            {/* phone & email */}
            <div className="flex flex-col  gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone/>
                <div className="font-medium">+421944641938</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope/>
                <div className="font-medium">priklad@gmail.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Spoločnosť</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">Sekule</a>
                </li>
                <li>
                  <a href="">Kariéra</a>
                </li>
                <li>
                  <a href="">Telefón</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Otváracie hodiny</a>
                </li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Otváracie hodiny</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Pon-Pia:</div>
                <div className="font-semibold">08:00 - 16:00</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sob-Ned:</div>
                <div className="uppercase font-semibold">zatvorené</div>
              </div>
            </div>
          </div>
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary">Ipsum passages, and more recently with desktop publishing software.</div>
            {/* form */}
            <form className="flex gap-x-2 h-14">
              <input 
                type="text" 
                placeholder="Váš mail"
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"/>
              <button type="submit" className="btn btn-sm btn-accent w-24">Odoslať</button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright/>
    </footer>
  )
}
