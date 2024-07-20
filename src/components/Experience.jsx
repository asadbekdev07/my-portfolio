import React from "react";
import { Timeline, ConfigProvider } from "antd";

const Experience = () => {
  const timelineItems = [
    {
      date: "February 2024 - Current",
      position: "Frontend Developer",
      company: "Limsa",
      description: [
        "Troubleshot complex issues under pressure",
        "Enhanced user experience through intuitive interfaces",
        "Integrated and managed RESTful APIs using the Fetch API",
      ],
    },
    {
      date: "November 2023 - May 2024",
      position: "Part-time Frontend Developer",
      company: "CosmicCode",
      description: [
        "We did custom projects with my frontend and backend developer friends who work in programming and want to work extra part-time.",
      ],
    },
    {
      date: "September 2022 - October 2023",
      position: "Frontend Developer",
      company: "IT Time Agency",
      description: [
        "Continuously updated skills through training courses, workshops, and self-study — staying current on industry rends and emerging technologies. Debugged complex software issues, leading to a more stable product release.",
        "Enhanced user experience by developing and implementing responsive web designs",
      ],
    },
  ];

  const customTheme = {
    components: {
      Timeline: {
        dotBg: "#ff9633",
        tailColor: "#fff",
        itemPaddingBottom: 50,
      },
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <section className="text-white bg-[#272c2e] box-shadow-small">
        <div className="container-custom pt-12 pb-12">
          <h2
            id="experience"
            className="text-5xl text-center mb-10 900:text-3xl"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Experience
          </h2>
          <div className="flex items-center justify-center" data-aos="zoom-in-up">
            <Timeline mode="alternate">
              {timelineItems.map((item, index) => (
                <Timeline.Item key={index} label={item.date} color="#ff9633">
                  <h2 className="text-2xl">
                    {item.position} - {item.company}
                  </h2>
                  <ul>
                    {item.description.map((desc, idx) => (
                      <li className="text-[14px]" key={idx}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Experience;
