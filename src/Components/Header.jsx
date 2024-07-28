import PryCtaBtn from "./PryCtaBtn";
import Logo from "/images/Logologo.svg";
import hamburger from "/images/menu-burger.svg";
import closeMenu from "/images/cross.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white max-w-[1440px] mx-auto px-8 z-40">
      <div className="max-w-[1080px] mx-auto py-[1.125rem] flex items-center justify-between">
        <img src={Logo} alt="Logo" />
        <nav
          className={`sm:flex items-center justify-between basis-[70%] h-fit py-4 absolute sm:static inset-0 ${
            isOpen ? "block" : "hidden"
          } bg-[#111D15] sm:bg-white top-16 sm:top-auto z-50`}
        >
          <ul className="flex flex-col sm:flex-row items-center gap-[22px] font-vietnam text-sm">
            <li className="text-white">Home</li>
            <li className="text-white">About Us</li>
            <li className="text-white">Service</li>
            <li className="text-white">Blog</li>
            <li className="text-white">Contact</li>
          </ul>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
            <PryCtaBtn text="Get a quote" />
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
