'use client';
import { useContext, useEffect, useState } from "react";

//next image
import Image from 'next/image';

// react scroll
import { Link } from "react-scroll";

//components
import Socials from "./Socials";

//icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

//media query hook
import { useMediaQuery } from "react-responsive";

// search context
import { SearchContext } from "../context/search";

export default function Header() {
  const {setSearchActive} = useContext(SearchContext)

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  });

  useEffect(() => {
    const hendelescroll = () => {
      //header
      if(window.scrollY > 40){
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    // add event listener
    window.addEventListener('scroll', hendelescroll);

    // remove event listener
    return () => {
      window.removeEventListener('scroll', hendelescroll);
    }
  })
  return (
    <header className={`${ header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link 
          to="home"
          smooth={desktopMode}
          spy={true}
          className="cursor-pointer"
          >
            <Image src={'/icons/logo.svg'} width={114} height={34} alt='' />
          </Link>
          {/* nav open menu */}
          <div 
          onClick={() => (setNav(!nav))} 
          className="xl:hidden cursor-pointer">
            { nav ? ( 
              <BiX className="text-4xl"/> 
            ) : ( 
              <BiMenuAltRight className="text-4xl"/> 
            )}
          </div>
        </div>
        {/* nav */}
        <nav className={`${ nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} items-center flex flex-col w-full text-center uppercase bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-sm xl:text-[15px] xl:normal-case`}>
          <Link
          className="cursor-pointer"
          to="home"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
          >
              Domov
          </Link>
          <Link
          className="cursor-pointer"
          to="offer"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
          >
              Ponuka
          </Link>
          <Link
          className="cursor-pointer"
          to="about"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
          >
              O nás
          </Link>
          <Link
          className="cursor-pointer"
          to="services"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
          >
              Služby
          </Link>
          <Link
          className="cursor-pointer scale"
          to="sold"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
          >
              Predané
          </Link>
          <Link
          className="cursor-pointer"
          to="contact"
          activeClass="active"
          smooth={desktopMode}
          spy={true}
          >
              Kontakt
          </Link>
          {/* socials */}
          <Socials 
            containerStyles='flex gap-x-2'
            iconStyles='text-2xl hover:bg-accent hover:text-white duration-300 border border-accent p-1 rounded-md'
            />
        </nav>
      </div>
    </header>
  )
}
