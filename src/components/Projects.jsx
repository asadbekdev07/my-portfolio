import React from "react";
import { Card, Button } from "antd";

const Projects = () => {
  const cardsData = [
    {
      title: "Autozoom Rental",
      imageUrl: "/Autozoom.jpg",
      titleColor: "#fff",
      link: "https://autozoomrental.com/",
    },
    {
      title: "Autozoom Admin Panel",
      imageUrl: "/AutozoomAdmin.jpg",
      titleColor: "#777",
      link: "",
    },
    {
      title: "Zamontour",
      imageUrl: "/Zamontour.jpg",
      titleColor: "#000",
      link: "https://zamontour.uz/",
    },
    {
      title: "Card 4",
      imageUrl: "url-to-image-4.jpg",
      titleColor: "#f333ff",
      link: "https://example.com/1",
    },
    {
      title: "Card 5",
      imageUrl: "url-to-image-4.jpg",
      titleColor: "#f333ff",
      link: "https://example.com/1",
    },
  ];

  return (
    <section id="projects" className="text-white bg-[#272c2e] box-shadow-small">
      <div className="container-custom pt-12 pb-12">
        <h2
          className="text-5xl text-center mb-10"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          My important projects
        </h2>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <Card
              className="hover-card hover:box-shadow-in"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              title={
                <span style={{ color: card.titleColor }}>{card.title}</span>
              }
              key={index}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="card-content">
                {card.link ? (
                  <Button
                    type="primary"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See More
                  </Button>
                ) : (
                  <Button type="primary" danger>
                    It is private
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
