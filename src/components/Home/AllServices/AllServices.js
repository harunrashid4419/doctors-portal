import React from "react";
import firstImg from "../../../assets/images/fluoride.png";
import secondImg from "../../../assets/images/cavity.png";
import thirdImg from "../../../assets/images/whitening.png";
import Service from "./Service";

const AllServices = () => {
   const servicesData = [
      {
         id: 1,
         title: "Fluoride Treatment",
         description:
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         img: firstImg,
      },
      {
         id: 2,
         title: "Cavity Filling",
         description:
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         img: secondImg,
      },
      {
         id: 1,
         title: "Teeth Whitening",
         description:
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         img: thirdImg,
      },
   ];

   return (
      <div className="py-28">
         <h1 className="text-md text-green-400 text-center">OUR SERVICES</h1>
         <h1 className="text-black text-center text-3xl">
            Services We Provide
         </h1>
         <div className="grid px-6 gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
               <Service key={service.id} service={service}></Service>
            ))}
         </div>
      </div>
   );
};

export default AllServices;
