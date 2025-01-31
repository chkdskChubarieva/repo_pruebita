/* eslint-disable react/prop-types */
import logo from "../assets/img/antojitos.png";
import BotonNavbar from "./BotonNavbar";

const Header = ({ botones = [] }) => {

  return (
    <header
      id="inicio"
      className="fixed top-0 z-20 w-full bg-[#F5C9C7] h-20 flex items-center justify-between px-6"

    >
      {/* Logo */}
      <div className="flex items-center">
        <img className="h-12 sm:h-16" src={logo} alt="Antojitos Logo" />
      </div>

      {/* Botones */}
      <nav>
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
    </header>
  );
};

export default Header;
