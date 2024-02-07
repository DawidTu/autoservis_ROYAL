import Brands from "./Brands";
import CarSlider from "./CarSlider";

export default function Offer() {
  return (
    <section id="offer" className="h-screen flex items-center">
      <div className="container mx-auto">
        <Brands/>
        <CarSlider/>
      </div>
    </section>
  )
}
