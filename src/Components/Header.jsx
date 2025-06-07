import PryCtaBtn from "./PryCtaBtn";
import hamburger from "/images/menu-burger.svg";
import Logo from "/images/Logologo.svg";
import closeMenu from "/images/cross.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white max-w-[1440px] mx-auto px-8 z-40">
      <div className="max-w-[1080px] mx-auto py-1 flex items-center justify-between">
        <img loading="lazy"src={Logo} alt="Logo" />
        <nav
          className={`sm:flex items-center justify-between basis-[70%] h-fit py-4 absolute sm:static inset-0 ${
            isOpen ? "block" : "hidden"
          } bg-[#111D15] sm:bg-transparent top-16 sm:top-auto z-50`}
        >
          <ul className="flex flex-col sm:flex-row items-center md:gap-[22px] gap-[16px] font-vietnam text-sm">
            {['Home', 'About Us', 'Service', 'Blog', 'Contact'].map((item, index) => (
            <li key={index} className="text-white sm:text-[#111D15] hover:text-[var(--pryClr)] transition-colors duration-300">
              <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
            </li>
            ))}
          </ul>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
            <a href="https://web.whatsapp.com/send?phone=13053250116&text=Hello%20J%20MOBIL%20INC,%20I%20would%20like%20to%20get%20a%20quote" target="_blank" rel="noopener noreferrer">
              <PryCtaBtn text="Get a quote" />
            </a>
          </div>
        </nav>
        <img
          className="sm:hidden cursor-pointer"
          width={30}
          src={isOpen ? closeMenu : hamburger}
          alt="Menu Icon"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Header;
