import archivos from "../assets/icons/archivos.png";
import diploma from "../assets/icons/diploma.png";
import equipo from "../assets/icons/equipo.png";
import estudiantes from "../assets/icons/estudiantes.png";
import examen from "../assets/icons/examen.png";
import prueba from "../assets/icons/prueba.png";
import "../app.css";
import Tarjeta from "../components/ImagenTarjeta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Caracteristicas from "../components/caracteristicas";
import FourLokoCarousel from "../components/carruselFourloko";
import Carousel from "../components/Carrusel";



export default function PageHome() {
  const botonesNavbar = [
    { nombreBoton: "Inicio", hrefBoton: "#home" },
    { nombreBoton: "Características", hrefBoton: "#caracteristicas" },
    { nombreBoton: "Contacto", hrefBoton: "#contacto" },
  ];
  
  return (
    <>
      <Header />
      <Navbar botones={botonesNavbar} />
      <main id="home" className="relative top-32 -z-10 background w-full">
        <section className="bg-black bg-opacity-50">
          <h1 className="px-6 py-12 text-4xl font-semibold leading-tight text-white sm:px-12 sm:py-32 sm:text-5xl md:w-1/2 md:text-6xl font-inter font-light">
            GOMILOKOS
          </h1>
        </section>

        <section id="caracteristicas" className="bg-white px-6 py-10 sm:px-12">
          <Caracteristicas />
        </section>
        <section className="relative bg-black bg-opacity-50 py-10">
          
           <FourLokoCarousel/>

          
        </section>

        <Footer />
      </main>
    </>
  );
}