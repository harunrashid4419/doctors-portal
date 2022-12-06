import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
   const { name, slots, price } = option;
   return (
      <div className="card text-center shadow-xl">
         <div className="card-body">
            <h2 className="card-title mx-auto">{name}</h2>
            <p>{slots[0]}</p>
            <p>
               {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
            <p>Price: <span className="text-primary">${price}</span></p>
            <div className="card-actions justify-center">
               <label onClick={() => setTreatment(option)} htmlFor="appointment-modal" className="btn">
                  Book Appointment
               </label>
            </div>
         </div>
      </div>
   );
};

export default AppointmentOption;
