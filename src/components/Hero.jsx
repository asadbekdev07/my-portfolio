import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section className="container-custom text-white pt-[145px] pb-[190px] 900:pt-[40px] 900:pb-[80px] relative flex items-center justify-center">
      <div className="w-[85%] text-center flex flex-col items-center">
        <h2 className="text-center text-5xl 900:text-[20px] 900:mb-2">Hi, It's me</h2>
        <p className="text-5xl mb-5 900:text-[24px] 900:mb-[10px]" data-aos="fade-right">
          I'm{" "}
          <span className="text-[#ff9633] text-6xl text-shadow-custom-0 900:text-[24px]">
            <ReactTypingEffect
              text={["Asadbek Botirqulov"]}
              speed={100}
              eraseDelay={1700}
            />
          </span>
        </p>
        <p className="text-3xl mb-8 900:text-[20px]" data-aos="fade-left">
          I'm professional Web Developer. Our Main Goal to help & Satisficed the Local & Global Clients by web development solutions
        </p>

        <div className="flex items-center justify-between w-[450px] 900:w-[330px] 600:justify-around">
          <a 
            href="#contact" 
            className="button button-custom hover:box-shadow-big" 
            data-aos="fade-right"
          >
            Contact me
          </a>
          <a
            className="button button-custom hover:box-shadow-big"
            href="/Resume.pdf"
            download="Asadbek_Botirqulov_CV.pdf"
            aria-label="Download CV"
            data-aos="fade-left"
          >
            Download CV <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>

        <div
          className="flex flex-col items-center absolute top-[130px] right-[100px]"
          data-aos="fade-down"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
