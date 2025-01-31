import { FaTiktok, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import antojitos from "../assets/img/antojitos.png";

const Footer = () => {
  return (
    <footer className="bg-[#58CCD9] text-white py-8 relative">
      {/* Logo centrado arriba de las columnas */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={antojitos}
          alt="AntojitosLogo"
          className="w-32"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between mt-8">
        {/* Redes sociales */}
        <div className="flex-1 text-center md:text-right md:mr-16">
          <h3 className="text-lg font-semibold">Síguenos en nuestras redes:</h3>
          <div className="flex flex-col items-center md:items-end space-y-2 mt-2">
            <a href="https://www.tiktok.com/@gomilokosfourlok" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaTiktok className="text-2xl" />
              <span>@gomilokosfourlok</span>
            </a>
            <a href="https://www.instagram.com/gomilokosfourlok" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaInstagram className="text-2xl" />
              <span>@GomilokosFourlok</span>
            </a>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Contáctanos:</h3>
          <div className="flex flex-col space-y-2 mt-2">
            <a href="https://wa.me/59177777777" className="flex items-center space-x-2">
              <FaWhatsapp className="text-2xl" />
              <span>+591 77777777</span>
            </a>
            <a href="mailto:contacto@antojitos.com" className="flex items-center space-x-2">
              <FaEnvelope className="text-2xl" />
              <span>contacto@antojitos.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Texto al final del footer */}
      <div className="text-center text-xs mt-6">
        ANTOJITOS ® | 2025
      </div>
    </footer>
  );
};

export default Footer;