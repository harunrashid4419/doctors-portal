import React from "react";

const SayReview = ({ review }) => {
   const { name, img, description, address } = review;
   return (
      <div className="card bg-base-100 shadow-xl">
         <div className="card-body">
            <p>{description}</p>
            <div className="flex pt-8">
               <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                     <img src={img} alt="" />
                  </div>
               </div>
               <div className="ml-3 mt-1">
                  <h3 className="text-md">{name}</h3>
                  <h3>{address}</h3>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SayReview;
