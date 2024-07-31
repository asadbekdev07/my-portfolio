import React from "react";
import Skills from "./Skills";

const About = () => {
    return (
      
        <section id="about" className="bg-[#2f3131] text-white pt-20 pb-12 box-shadow-small">
          <div className="container-custom">
            <h2 className="text-5xl mb-8 900:text-3xl 900:mb-5" data-aos="fade-up">About</h2>
            <p className="before-paragraph-custom mb-12 900:mb-8" data-aos="fade-up">
              I am a highly motivated Frontend Developer with almost two years of
              experience, adept at transforming complex requirements into
              user-friendly solutions. At <span className="text-[#ff9633]">IT Time Agency</span> and <a className="text-[#ff9633]" href="https://limsa.uz/" target="_blank">Limsa</a>, I honed my skills in
              JavaScript, React, Redux, and the integration of RESTful APIs,
              developing custom APIs and enhancing user interfaces to significantly
              improve project outcomes and client satisfaction.
                <br />
                <br />
              My expertise lies in building responsive, user-centric web
              applications that not only meet functional requirements but also
              elevate user experiences through clean, efficient code and intuitive
              design principles. I bring strong <span className="text-[#ff9633]">interpersonal</span> and <span className="text-[#ff9633]">communication
              skills</span> to every project, <span className="text-[#ff9633]">facilitating effective teamwork</span>, adapting to
              evolving needs, and delivering high-quality frontend solutions that
              exceed client expectations in usability, aesthetics, and overall user
              experience.
            </p>
    
            <Skills />
          </div>
        </section>
      );
};

export default About;
