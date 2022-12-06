import React from "react";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";
import img from "../../../assets/images/appointment.png";

const Contact = () => {
   return (
      <section className="px-10 py-16" style={{ background: `url(${img})` }}>
         <div className="pt-12">
            <h3 className="text-primary text-xl text-center">Contact Us</h3>
            <h1 className="text-4xl text-center text-white">
               Stay connected with us
            </h1>
         </div>
         <div className="w-full mt-10 md:w-1/2 mx-auto">
            <input
               type="email"
               placeholder="Email Address"
               className="input w-full mb-5"
            />
            <input
               type="text"
               placeholder="Subject"
               className="input w-full mb-5"
            />
            <textarea
               className="textarea textarea-primary w-full h-28"
               placeholder="Bio"
            ></textarea>
            <div className="text-center mt-10">
               <PrimaryBtn>Submit</PrimaryBtn>
            </div>
         </div>
      </section>
   );
};

export default Contact;
