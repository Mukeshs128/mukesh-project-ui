import React from "react";
import { Card } from "react-bootstrap";

const cardData = [
  {
    title: "Dream stopover in Saint-Malo, France",
    days: "3 days",
    category: "Romantic Itinerary",
    price: "$579",
    img: "/image/card-1.jpeg",
  },
  {
    title: "Escapadela Romántica",
    location: "São Miguel, Azores",
    category: "Featured",
    price: "$579",
    img: "/image/card-2.jpeg",
  },
  {
    title: "Grace Hotel",
    location: "Santorini, Greece",
    category: "Spotlight",
    price: "$579",
    img: "/image/card-3.jpeg",
  },
  {
    title: "La Dolce Vita in Rome, Italy",
    days: "4 days",
    category: "Romantic Itinerary",
    price: "$579",
    img: "/image/card-4.jpeg",
  },
  {
    title: "Amanpuri",
    days: "3 days",
    category: "Featured",
    price: "$579",
    img: "/image/card-5.jpeg",
  },
  {
    title: "Hyatt",
    location: "São Miguel, Azores",
    category: "Brand",
    price: "$579",
    img: "/image/card-6.webp",
  },
  {
    title: "Paris In Love, France",
    location: "Santorini, Greece",
    category: "Romantic Itinerary",
    price: "$579",
    img: "/image/card-7.jpg",
  },
  {
    title: "Angela Di Matheo",
    days: "4 days",
    category: "Spotlight",
    price: "$579",
    img: "/image/card-8.jpeg",
  },
];

function CardGrid() {
  return (
    <div className="row my-5">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-3 mb-4">
          <Card className="text-white card">
            <div className="gradient-overlay"></div>
            <Card.Img src={card.img} alt={card.title} />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end position-absolute z-1">
              <span className="badge bg-danger position-absolute top-0 start-0 m-4">{card.category}</span>
              <Card.Title className="mt-2">{card.title}</Card.Title>
              <Card.Text className="">{card.location}</Card.Text>
              <Card.Text className="">{card.days}</Card.Text>
              
              <Card.Text>
                <strong>From {card.price}</strong>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
