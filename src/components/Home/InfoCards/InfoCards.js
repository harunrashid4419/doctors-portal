import React from "react";
import InfoCard from "./InfoCard";
import clockImg from "../../../assets/icons/clock.svg";
import phoneImg from "../../../assets/icons/phone.svg";
import markerImg from "../../../assets/icons/marker.svg";

const InfoCards = () => {
   const cardData = [
      {
         id: 1,
         name: "Opening Hours",
         description: "Open at 8.00 am to 7.00 pm everyday",
         img: clockImg,
         bg: "bg-gradient-to-r from-primary to-secondary",
      },
      {
         id: 2,
         name: "Visit our location",
         description: "Brooklyn, NY 10036, United States",
         img: markerImg,
         bg: "bg-neutral",
      },
      {
         id: 3,
         name: "Contact us now",
         description: "+000 123 456789",
         img: phoneImg,
         bg: "bg-gradient-to-r from-primary to-secondary",
      },
   ];

   return (
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
         {cardData.map((card) => (
            <InfoCard key={card.id} card={card}></InfoCard>
         ))}
      </div>
   );
};

export default InfoCards;
