import CarSlider from "../components/CarSlider"
import Header from "../components/Header"

export default function AllCars() {
  return (
    <>
    <Header/>
      <section id="sold" className="h-screen flex items-center">
        <div className="container mx-auto">
          <div>
            <h1 className="h1 my-16 text-center">Naša aktuálna ponuka vozidiel</h1>
          </div>
          <CarSlider/>
        </div>
      </section>
    </>
  )
}
