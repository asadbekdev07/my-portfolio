import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section className="container-custom text-white pt-[145px] pb-[190px] relative flex items-center justify-center">
      <div className="w-[100%] text-center">
        <p className="text-5xl mb-5 text-shadow-custom" data-aos="fade-right">
          I'm{" "}
          <span className="text-[#ff9633] text-6xl text-shadow-custom-0">
          <ReactTypingEffect
              text={['Asadbek Botirqulov']}
              speed={100}
              eraseDelay={1700}
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
          </div>
      </div>
    </section>
  );
};

export default Hero;
