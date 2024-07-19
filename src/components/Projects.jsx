import React from 'react'
import { Card, Button } from 'antd';

const Projects = () => {
    const cardsData = [
        { title: 'Autozoom Rental', imageUrl: '/Autozoom.jpg', titleColor: '#fff', link: "https://autozoomrental.com/" },
        { title: 'Zamontour', imageUrl: '/Zamontour.jpg', titleColor: '#000', link: "https://zamontour.uz/" },
        { title: 'Card 3', imageUrl: 'url-to-image-3.jpg', titleColor: '#3357ff', link: 'https://example.com/1' },
        { title: 'Card 4', imageUrl: 'url-to-image-4.jpg', titleColor: '#f333ff', link: 'https://example.com/1' },
      ];

  return (
    <section className='text-white bg-[#272c2e] box-shadow-small'>
      <div className='container-custom pt-12 pb-12'>
        <h2 className='text-5xl text-center mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          My important projects
        </h2>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <Card
              className="hover-card hover:box-shadow-small"
              title={<span style={{ color: card.titleColor }}>{card.title}</span>}
              key={index}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="card-content">
                <Button type="primary" href={card.link} target="_blank" rel="noopener noreferrer">See More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
