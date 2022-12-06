import React from "react";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";
import doctor from '../../../assets/images/doctor-small.png';
import bg from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
   return (
      <section
         className="lg:mt-64 py-12 md:py-0"
         style={{ background: `url(${bg})` }}
      >
         <div className="hero">
            <div className="hero-content flex-col lg:flex-row lg:-mt-28 p-0">
               <img
                  src={doctor}
                  className="rounded-lg shadow-2xl w-full lg:w-1/2 hidden md:block"
                  alt=""
               />
               <div className="w-full px-8 lg:w-1/2 lg:ml-16 lg:mt-28 md:pl-8 md:my-5">
                  <h1 className="text-lg font-bold text-primary">
                     Appointment
                  </h1>
                  <h1 className="text-2xl  text-white">
                     Make an appointment Today
                  </h1>
                  <p className="py-6 text-white">
                     It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking
                     at its layout. The point of using Lorem Ipsumis that it has
                     a more-or-less normal distribution of letters,as opposed to
                     using 'Content here, content here', making it look like
                     readable English. Many desktop publishing packages and web
                     page
                  </p>
                  <PrimaryBtn>Get Started</PrimaryBtn>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MakeAppointment;
