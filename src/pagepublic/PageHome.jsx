import "../app.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caracteristicas from "../components/caracteristicas";
import FourLokoCarousel from "../components/carruselFourloko";

export default function PageHome() {
  const botonesNavbar = [
    { nombreBoton: "Inicio", hrefBoton: "#home" },
    { nombreBoton: "Características", hrefBoton: "#caracteristicas" },
    { nombreBoton: "Contacto", hrefBoton: "#contacto" },
  ];
  
  return (
    <>
      <Header botones={botonesNavbar} />
      <main id="home" className="relative w-full top-20 background">
        <section className="bg-black bg-opacity-20">
          <h1 className="px-6 py-12 text-4xl font-light font-semibold leading-tight text-white sm:px-12 sm:py-32 sm:text-5xl md:w-1/2 md:text-6xl font-inter">
            GOMILOKOS
          </h1>
          <div className="justify-end hidden px-6 md:flex">
            <h3 className="text-slate-200">El sabor de la lokura</h3>
          </div>
        </section>

        <section id="caracteristicas" className="px-6 py-10 bg-white sm:px-12">
          <Caracteristicas />
          <div className="flex justify-center bg-white md:w-3/4 md:mx-auto">
            <FourLokoCarousel />
          </div>

        </section>
        
      <div id="contacto">
        <Footer />
      </div>

      </main>
    </>
  );
}