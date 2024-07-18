import React from "react";

const Skills = () => {
  return (
    <section className="skills text-white pt-8 pb-8">
      <div className="container-custom">
        <h2 className="text-5xl text-center mb-8" data-aos="fade-up">
          My Skills
        </h2>
        <div className="flex">
          <div className="w-72 card-custom">
            <div className="flex justify-between mb-5">
              <h4>HTML</h4>
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.902 27.201 3.655 2h24.69l-2.25 25.197L15.985 30z"
                    style={{ fill: "rgb(228, 79, 38)" }}
                  ></path>
                  <path
                    d="m16 27.858 8.17-2.265 1.922-21.532H16z"
                    style={{ fill: "rgb(241, 102, 42)" }}
                  ></path>
                  <path
                    d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"
                    style={{ fill: "rgb(235, 235, 235)" }}
                  ></path>
                  <path
                    d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83z"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  ></path>
                </svg>
              </div>
            </div>
            <p>HTML is one of the main cores of every website. Build sites that are semantically sound and SEO friendly.</p>
          </div>

          {/* ITEM  */}
          <div className="w-72 card-custom">
            <div className="flex justify-between mb-5">
              <h4>HTML</h4>
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.902 27.201 3.655 2h24.69l-2.25 25.197L15.985 30z"
                    style={{ fill: "rgb(228, 79, 38)" }}
                  ></path>
                  <path
                    d="m16 27.858 8.17-2.265 1.922-21.532H16z"
                    style={{ fill: "rgb(241, 102, 42)" }}
                  ></path>
                  <path
                    d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"
                    style={{ fill: "rgb(235, 235, 235)" }}
                  ></path>
                  <path
                    d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83z"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  ></path>
                </svg>
              </div>
            </div>
            <p>HTML is one of the main cores of every website. Build sites that are semantically sound and SEO friendly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
