import Hero from "./components/Hero";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Sold from "./components/Sold";
import Services from "./components/Services";
import About from "./components/About";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import BackToTopBtn from "./components/BackToTopBtn";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
        <Header/>
        <Hero/>
        <Offer/>
        <About/>
        <Why/>
        <Services/>
        <Sold/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <BackToTopBtn/>
    </main>
  );
}
