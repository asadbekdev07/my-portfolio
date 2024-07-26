import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTelegramPlane, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const SiteHeader = ({ headerRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={isHeaderFixed ? 'site-header fixed' : 'site-header'}>
      <div className="container-custom flex items-center justify-between pt-3 pb-3 900:pt-2 900:pb-2">
        <a className="mr-8 block" href="#">
          <img
            className="w-[165px] h-[65px] 900:h-[50px]"
            src="/logo-no-background.svg"
            alt="Site logo"
            width={165}
            height={65}
          />
        </a>

        <div className={`site-header__sitenav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="flex items-center mr-20">
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#experience"
                onClick={closeMenu}
              >
                Experience
              </a>
            </li>
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#projects"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between">
            <a
              className="custom-icon mr-4"
              href="https://www.linkedin.com/in/asadbek-botirqulov-755627269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 text-[#fff] block" />
            </a>
            <a
              className="custom-icon mr-4"
              href="https://t.me/frontenddevlpr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegramPlane} className="w-6 h-6 text-[#fff] block" />
            </a>
            <a
              className="custom-icon mr-4"
              href="https://github.com/asadbekdev07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-[#fff] block" />
            </a>
            <a
              className="custom-icon"
              href="https://stackoverflow.com/users/23087398/asadbek-botirqulov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} className="w-6 h-6 text-[#fff] block" />
            </a>
          </div>
        </div>
        <button 
          className='site-header__toggler' 
          onClick={handleToggle} 
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon className="text-[#ff9633] w-7 h-7" icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>

      {isMenuOpen ? (
        <div className="reponsive-nav">
          <ul className="mb-10" data-aos="fade-right">
            <li>
              <a href="#about" className="text-5xl" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#experience" className="text-5xl" onClick={closeMenu}>Experience</a>
            </li>
            <li>
              <a href="#projects" className="text-5xl" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-5xl" onClick={closeMenu}>Contact</a>
            </li>
          </ul>  
          <div className="flex" data-aos="fade-right">
            <a
              className="custom-icon mr-4"
              href="https://www.linkedin.com/in/asadbek-botirqulov-755627269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-8 h-8 text-[#fff] block" />
            </a>
            <a
              className="custom-icon mr-4"
              href="https://t.me/frontenddevlpr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegramPlane} className="w-8 h-8 text-[#fff] block" />
            </a>
            <a
              className="custom-icon mr-4"
              href="https://github.com/asadbekdev07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-[#fff] block" />
            </a>
            <a
              className="custom-icon"
              href="https://stackoverflow.com/users/23087398/asadbek-botirqulov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} className="w-8 h-8 text-[#fff] block" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default SiteHeader;
