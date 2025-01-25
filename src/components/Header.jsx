/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import logo from "../assets/img/antojitos.png";

const Header = ({ toggleSidebar }) => {
  const location = useLocation(); // Obtenemos la ruta actual

  return (
    <>
      <header id="inicio" className="fixed top-0 z-20 h-20 w-full">
        <div className="fila-1 flex h-20 items-center justify-center px-4">
          <div className="flex items-center gap-2 flex-1">
            <div className="rounded bg-white px-3 py-1">
            </div>
          </div>

          <div className="rounded bg-[#F5C9C7] px-3 py-1">
              <img className="w-8 sm:hidden" src={logo} alt="" />
              <img
                className="hidden w-28 sm:block"
                src={logo}
                alt="logo-umss"
              />
            </div>

          <div className="flex-1">
            {/* Este espacio rellena contenido a la derecha */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;