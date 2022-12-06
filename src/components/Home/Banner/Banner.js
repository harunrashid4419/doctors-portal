import React from "react";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";
import chairImg from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";

const Banner = () => {
   return (
      <section style={{ background: `url(${bgImg})` }}>
         <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse py-24 lg:py-52">
               <img
                  src={chairImg}
                  className="w-full lg:w-1/2 rounded-lg shadow-2xl"
                  alt=""
               />
               <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                  <h1 className="text-5xl font-bold">
                     Your New Smile Starts Here
                  </h1>
                  <p className="py-6">
                     PLorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the
                  </p>
                  <PrimaryBtn>Get Started</PrimaryBtn>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Banner;
