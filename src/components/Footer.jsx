import { FaTiktok, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import antojitos from "../assets/img/antojitos.png";
const Footer = () => {
  return (
    <footer className="bg-[#58CCD9] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo y eslogan */}
        <div className="text-center md:text-left">
          <img
            src={antojitos}
            alt="AntojitosLogo"
            className="w-32 mx-auto md:mx-0"
          />
          <p className="mt-2 font-semibold">"Date el gusto con antojitos"</p>
        </div>

        {/* Redes sociales */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Síguenos en nuestras redes sociales:</h3>
          <div className="flex justify-center space-x-4 mt-2">
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
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Contáctanos:</h3>
          <div className="flex flex-col space-y-2 mt-2">
            <a href="https://wa.me/59177777777" className="flex items-center space-x-2">
              <FaWhatsapp className="text-2xl" />
              <span>+591 77777777</span>
            </a>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-2xl" />
              <span>+591 77777777</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

