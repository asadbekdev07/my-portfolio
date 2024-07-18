import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section className="container-custom text-white pt-[145px] pb-[190px] relative flex items-center justify-center">
      <div className="w-[70%] relative">
        <p className="text-5xl mb-5 text-shadow-custom" data-aos="fade-right">
          I'm{" "}
          <span className="text-[#ff9633] text-6xl text-shadow-custom-0">
          <ReactTypingEffect
              text={['Asadbek Botirqulov']}
              speed={50}
              eraseDelay={3000}
            />
          </span>
        </p>
        <p className="text-5xl mb-5 text-shadow-custom" data-aos="fade-left">
          Frontend Developer
        </p>
        <button
          className="button-custom mr-4 hover:box-shadow-big"
          data-aos="fade-right"
        >
          Contact me
        </button>
        <a
          href="/Resume.pdf"
          download="Asadbek_Botirqulov_CV.pdf"
          aria-label="Download CV"
        >
          <button
            className="button-custom hover:box-shadow-big"
            data-aos="fade-left"
          >
            Download CV <FontAwesomeIcon icon={faDownload} />
          </button>
        </a>

        <div
          className="flex flex-col items-center absolute top-[130px] right-[100px]"
          data-aos="fade-down"
        >
          <div className="vertical-line"></div>
          <div className="flex flex-col justify-between">
            <a className="custom-icon mt-3" href="#">
              <svg
                className="icon-linkedin w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.6 0H2.4C1.074 0 0 1.074 0 2.4v19.2C0 22.926 1.074 24 2.4 24h19.2c1.326 0 2.4-1.074 2.4-2.4V2.4C24 1.074 22.926 0 21.6 0zM7.2 19.2H3.6V9.6h3.6v9.6zm-1.8-11.52c-.948 0-1.68-.72-1.68-1.632 0-.912.732-1.632 1.68-1.632s1.68.72 1.68 1.632c0 .912-.732 1.632-1.68 1.632zm15.6 11.52h-3.6v-6.96c0-1.656-.624-2.784-1.944-2.784-1.056 0-1.68.72-1.968 1.416-.096.24-.12.576-.12.912v7.416h-3.6V9.6h3.48v1.176h.048c.48-.888 1.656-1.824 3.432-1.824 2.52 0 4.416 1.656 4.416 5.232v6.816z" />
              </svg>
            </a>
            <a className="custom-icon mt-3" href="#">
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
            <a className="custom-icon mt-3" href="#">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
