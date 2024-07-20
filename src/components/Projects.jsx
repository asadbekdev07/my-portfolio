import React, { useState } from "react";
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
    {
      title: "Card 6",
      imageUrl: "url-to-image-6.jpg",
      titleColor: "#f333ff",
      link: "https://example.com/6",
    },
    {
      title: "Card 7",
      imageUrl: "url-to-image-7.jpg",
      titleColor: "#f333ff",
      link: "https://example.com/7",
    },
    {
      title: "Card 8",
      imageUrl: "url-to-image-8.jpg",
      titleColor: "#f333ff",
      link: "https://example.com/8",
    },
    {
      title: "Card 9",
      imageUrl: "url-to-image-9.jpg",
      titleColor: "#f333ff",
      link: "https://example.com/9",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(3);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <section id="projects" className="text-white bg-[#272c2e] box-shadow-small">
      <div className="container-custom pt-12 pb-12">
        <h2
          className="text-5xl text-center mb-10 900:text-3xl 900:mb-2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          My important projects
        </h2>
        <div className="cards-container">
          {cardsData.slice(0, visibleCards).map((card, index) => (
            <Card
              className="hover-card hover:box-shadow-in 800:w-[100%]"
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
        {visibleCards < cardsData.length && (
          <div className="text-center mt-6">
            <button className="button button-project"data-aos="fade-right"  type="primary" onClick={loadMore} disabled>
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
