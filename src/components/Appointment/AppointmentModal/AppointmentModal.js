import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/UsersContext";

const AppointmentModal = ({ treatment, selected, setTreatment, refetch }) => {
   const { user } = useContext(AuthContext);
   const { name, slots, price } = treatment;
   const date = format(selected, "PP");

   const handleBooking = (event) => {
      event.preventDefault();
      const form = event.target;
      console.log(form.email.value);
      const userName = form.name.value;
      const email = form.email.value;
      const slot = form.slot.value;
      const phone = form.phone.value;
      const booking = {
         appointDate: date,
         treatment: name,
         patentName: userName,
         slot,
         phone,
         email,
         price
      };

      fetch("https://doctors-portal-recap-server.vercel.app/bookings", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(booking),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               setTreatment(null);
               toast.success('booking successfully');
               refetch();
            }
            else{
               setTreatment(null);
               toast.error(data.message);
            }
         });
   };

   return (
      <>
         <input
            type="checkbox"
            id="appointment-modal"
            className="modal-toggle"
         />
         <div className="modal">
            <div className="modal-box relative text-left">
               <label
                  htmlFor="appointment-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
               >
                  ✕
               </label>
               <h3 className="text-lg font-bold">{name}</h3>
               <form onSubmit={handleBooking}>
                  <input
                     type="text"
                     className="input input-bordered w-full mb-5 mt-5"
                     value={date}
                     disabled={true}
                     name="date"
                  />
                  <select name="slot" className="select select-bordered w-full">
                     {slots.map((slot, i) => (
                        <option key={i}>{slot}</option>
                     ))}
                  </select>
                  <input
                     type="text"
                     name="name"
                     placeholder="Full Name"
                     className="input input-bordered w-full mb-5 mt-5"
                     value={user?.displayName}
                     disabled={true}
                  />
                  <input
                     type="text"
                     name="phone"
                     placeholder="Phone Number"
                     className="input input-bordered w-full mb-5 mt-5"
                  />
                  <input
                     type="text"
                     name="email"
                     placeholder="Email"
                     className="input input-bordered w-full mb-5 mt-5"
                     value={user?.email}
                     disabled={true}
                  />
                  <input
                     className="btn btn-neutral w-full"
                     type="submit"
                     name=""
                     value="SUBMIT"
                  />
               </form>
            </div>
         </div>
      </>
   );
};

export default AppointmentModal;
