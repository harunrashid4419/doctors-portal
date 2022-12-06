import React from "react";

const InfoCard = ({ card }) => {
   const { name, description, img, bg } = card;
   return (
      <div className={`card md:card-side text-white p-3 ${bg} shadow-xl`}>
         <figure>
            <img src={img} alt="Movie" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
         </div>
      </div>
   );
};

export default InfoCard;
