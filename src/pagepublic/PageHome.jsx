import "./App.css";
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
        {/* Sección de inicio */}
        <section className="bg-black bg-opacity-20">
          <h1 className="px-6 py-8 text-3xl font-light leading-tight text-white sm:px-12 sm:py-16 sm:text-4xl md:text-5xl lg:text-6xl font-inter">
            SER GAI = Christian :3
          </h1>
          <div className="justify-end hidden px-6 pb-8 md:flex sm:pb-16">
            <h3 className="text-slate-200">El sabor de la lokura</h3>
          </div>
        </section>

        {/* Sección de características */}
        <section id="caracteristicas" className="px-6 py-8 bg-white sm:px-12 sm:py-12">
          <Caracteristicas />
          <div className="flex justify-center bg-white md:w-3/4 md:mx-auto">
            <FourLokoCarousel />
          </div>
        </section>

        {/* Footer */}
        <div id="contacto">
          <Footer />
        </div>
      </main>
    </>
  );
}