import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTelegramPlane, faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
    setIsHeaderFixed(!isHeaderFixed)
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isHeaderFixed ? 'site-header' : 'mb-7'}>
      <div className="container-custom flex items-center justify-between pt-3 pb-3">
        <a className="mr-8 block" href="#">
          <img
            className="w-[165px] h-[65px]"
            src="/logo-no-background.svg"
            alt="Site logo"
            width={165}
            height={65}
          />
        </a>

        <div className="site-header__sitenav">
          <ul className="flex items-center mr-20">
            {/* ITEM  */}
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            {/* ITEM  */}
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#experience"
              >
                Experience
              </a>
            </li>
            {/* ITEM  */}
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#projects"
              >
                Projects
              </a>
            </li>
            {/* ITEM  */}
            <li className="inline-block">
              <a
                className="block hover:text-[#ff9633] transition-colors duration-200 ease-in"
                href="#contact"
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
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 text-[#fff] block" />
            
            </a>
            <a
              className="custom-icon mr-4"
              href="https://t.me/frontenddevlpr"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTelegramPlane} className="w-6 h-6 text-[#fff] block" />
            </a>
            <a
              className="custom-icon mr-4"
              href="https://www.instagram.com/asadbek_botirqulov/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-[#fff] block" />
            </a>
            <a
              className="custom-icon mr-4"
              href="https://github.com/asadbekdev07"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-[#fff] block" />
            </a>

            <a
              className="custom-icon"
              href="https://stackoverflow.com/users/23087398/asadbek-botirqulov"
              target="_blank"
            >
              <FontAwesomeIcon icon={faStackOverflow} className="w-6 h-6 text-[#fff] block" />
            
            </a>
          </div>
        </div>
        <button className='site-header__toggler' onClick={handleToggle}>
          <FontAwesomeIcon className="text-[#ff9633] w-7 h-7" icon={isMenuOpen ? faBars : faTimes} size="2x" />
        </button>

      
      </div>
      {isMenuOpen ? "" : <div className="reponsive-nav">
        <ul>
          <li>
            <a href="#about" className="text-5xl" data-aos="fade-right">About</a>
          </li>
          <li>
            <a href="#experience" className="text-5xl" data-aos="fade-right">Experience</a>
          </li>
          <li>
            <a href="#project" className="text-5xl" data-aos="fade-right">Project</a>
          </li>
          <li>
            <a href="#contact" className="text-5xl" data-aos="fade-right">Contact</a>
          </li>
        </ul>  
        <div>
        <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 text-[#fff] block" />
        <FontAwesomeIcon icon={faTelegramPlane} className="w-6 h-6 text-[#fff] block" />
        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-[#fff] block" />
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-[#fff] block" />
        <FontAwesomeIcon icon={faStackOverflow} className="w-6 h-6 text-[#fff] block" />
        </div>
      </div>}
    </header>

  );
};

export default SiteHeader;
