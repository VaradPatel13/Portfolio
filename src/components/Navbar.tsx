import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = ['Home', 'About', 'Skills','Projects','Experience','Education','Certifications', 'Contact'];


  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#e6dfd3] dark:bg-[#2b2b2b] shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-mono text-[#bda863] dark:text-[#bda863]">
          Varad's Portfolio
        </h1>


        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-[#857f74]"
                className="cursor-pointer hover:text-[#857f74] transition-colors font-medium dark:text-white text-black"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Varad_CV.pdf"
              download
              className="ml-4 inline-block bg-[#bda863] text-white px-4 py-2 rounded-md font-medium hover:bg-[#6e6760] transition-colors duration-300"
            >
              Download CV
            </a>
          </li>
        </ul>

        </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-4 bg-[#e6dfd3] dark:bg-[#2b2b2b]">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-[#857f74]"
                className="block cursor-pointer hover:text-[#bda863] font-medium dark:text-white text-black"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Varad_CV.pdf"
              download
              className="inline-block bg-[#857f74] text-white px-4 py-2 rounded-md font-medium hover:bg-[#6e6760] transition-colors duration-300"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
