import React from "react";
import SayReview from "./SayReview";
import quote from '../../../assets/icons/quote.svg';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const SayReviews = () => {
   const reviewData = [
      {
         id: 1,
         description:
            "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
         img: people1,
         name: "Winson Herry",
         address: "California",
      },
      {
         id: 2,
         description:
            "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
         img: people2,
         name: "Sara Williams",
         address: "New York",
      },
      {
         id: 1,
         description:
            "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
         img: people3,
         name: "Jenny Adams",
         address: "Washington DC",
      },
   ];

   return (
      <div className="px-8 lg:px-12 py-24">
         <div className="flex justify-between">
            <div>
               <h4 className="text-primary text-lg font-bold">Testimonial</h4>
               <h2 className="font-medium text-2xl">What Our Patients Says</h2>
            </div>
            <img className="text-2xl w-24 lg:w-48" src={quote} alt="" />
         </div>
         <div className="pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {reviewData.map((review) => (
               <SayReview key={review.id} review={review}></SayReview>
            ))}
         </div>
      </div>
   );
};

export default SayReviews;
