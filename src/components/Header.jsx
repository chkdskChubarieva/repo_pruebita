/* eslint-disable react/prop-types */
import { useState } from "react"; // Importar useState para manejar el menú desplegable
import logo from "../assets/img/antojitos.png";
import BotonNavbar from "./BotonNavbar";

const Header = ({ botones = [] }) => {
  // Estado para controlar la visibilidad del menú en móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="inicio"
      className="fixed top-0 z-20 w-full bg-[#F5C9C7] h-20 flex items-center justify-between px-6"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-12 sm:h-16" // Tamaño del logo ajustado para móviles y pantallas más grandes
          src={logo}
          alt="Antojitos Logo"
        />
      </div>

      {/* Botones (visible en pantallas grandes) */}
      <nav className="hidden md:block">
        <ul className="flex gap-4 font-semibold text-black">
          {botones.map((boton, index) => (
            <BotonNavbar
              key={index}
              nombreBoton={boton.nombreBoton}
              hrefBoton={boton.hrefBoton}
            />
          ))}
        </ul>
      </nav>

      {/* Ícono de hamburguesa (visible en móviles) */}
      <button
        className="p-2 md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menú desplegable (visible en móviles) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-0 w-full bg-[#F5C9C7] shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4 font-semibold text-black">
            {botones.map((boton, index) => (
              <BotonNavbar
                key={index}
                nombreBoton={boton.nombreBoton}
                hrefBoton={boton.hrefBoton}
              />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;