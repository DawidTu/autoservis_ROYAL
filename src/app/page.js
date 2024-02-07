import Hero from "./components/Hero";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Sold from "./components/Sold";
import Services from "./components/Services";
import About from "./components/About";
import Why from "./components/Why";
import Testimoniela from "./components/Testimoniela";
import Cta from "./components/Cta";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
        <Header/>
        <Hero/>
        <Offer/>
        <About/>
        <Sold/>
        <Services/>
        <Why/>
        <Testimoniela/>
        <Cta/>
        <BackToTopBtn/>
        <div className="h-[4000px]"></div>
    </main>
  );
}
