import React from "react";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";
import termsImg from "../../../assets/images/treatment.png";

const Terms = () => {
   return (
      <div className="hero">
         <div className="hero-content flex-col lg:flex-row">
            <img
               src={termsImg}
               className="rounded-lg shadow-2xl w-full lg:w-1/2"
               alt=""
            />
            <div className="w-full lg:w-1/2 ml-8 lg:ml-20 md:mt-5 md:mr-8 ">
               <h1 className="text-5xl font-bold">
                  Exceptional Dental Care, on Your Terms
               </h1>
               <p className="py-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page
               </p>
               <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
         </div>
      </div>
   );
};

export default Terms;
