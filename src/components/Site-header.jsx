import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
              <svg
                className="icon-linkedin w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.6 0H2.4C1.074 0 0 1.074 0 2.4v19.2C0 22.926 1.074 24 2.4 24h19.2c1.326 0 2.4-1.074 2.4-2.4V2.4C24 1.074 22.926 0 21.6 0zM7.2 19.2H3.6V9.6h3.6v9.6zm-1.8-11.52c-.948 0-1.68-.72-1.68-1.632 0-.912.732-1.632 1.68-1.632s1.68.72 1.68 1.632c0 .912-.732 1.632-1.68 1.632zm15.6 11.52h-3.6v-6.96c0-1.656-.624-2.784-1.944-2.784-1.056 0-1.68.72-1.968 1.416-.096.24-.12.576-.12.912v7.416h-3.6V9.6h3.48v1.176h.048c.48-.888 1.656-1.824 3.432-1.824 2.52 0 4.416 1.656 4.416 5.232v6.816z" />
              </svg>
            </a>
            <a
              className="custom-icon mr-4"
              href="https://t.me/frontenddevlpr"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm5.568 8.16c-.18 1.896-.96 6.504-1.356 8.628-.168.9-.504 1.2-.816 1.236-.696.06-1.224-.456-1.896-.9-1.056-.696-1.656-1.128-2.676-1.8-1.188-.78-.42-1.212.264-1.908.18-.18 3.252-2.976 3.312-3.228a.24.24 0 0 0-.06-.216c-.072-.06-.168-.036-.252-.024-.108.024-1.788 1.14-5.064 3.348-.48.324-.912.492-1.296.48-.432-.012-1.248-.24-1.86-.444-.756-.24-1.344-.372-1.296-.792.024-.216.324-.432.888-.66 3.504-1.524 5.832-2.532 6.996-3.012 3.336-1.392 4.02-1.632 4.476-1.632.096 0 .324.024.468.144.12.096.156.228.168.324-.012.072.012.288 0 .456Z"
                />
              </svg>
            </a>
            <a
              className="custom-icon mr-4"
              href="https://www.instagram.com/asadbek_botirqulov/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              className="custom-icon mr-4"
              href="https://github.com/asadbekdev07"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 -0.5 48 48"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"
                />
              </svg>
            </a>

            <a
              className="custom-icon"
              href="https://stackoverflow.com/users/23087398/asadbek-botirqulov"
              target="_blank"
            >
              <svg
                className="text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
              >
                <rect width="32" height="32" fill="#fff" rx="16" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21.497 18.746h1.687v6.748H8v-6.748h1.687v5.061h11.81v-5.061Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="m11.526 18.244 8.286 1.742.348-1.656-8.286-1.743-.348 1.657Zm1.096-3.967 7.676 3.575.715-1.535-7.676-3.575-.715 1.535Zm2.124-3.766 6.508 5.419 1.083-1.301-6.507-5.42-1.084 1.302Zm4.2-4.005-1.358 1.01 5.053 6.795L24 13.3l-5.053-6.795ZM11.375 22.12h8.436v-1.687h-8.436v1.687Z"
                />
              </svg>
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
            <a href="#about" className="text-6xl">About</a>
          </li>
          <li>
            <a href="#experience" className="text-6xl">Experience</a>
          </li>
          <li>
            <a href="#project" className="text-6xl">Project</a>
          </li>
          <li>
            <a href="#contact" className="text-6xl">Contact</a>
          </li>
        </ul>  
      </div>}
    </header>

  );
};

export default SiteHeader;
