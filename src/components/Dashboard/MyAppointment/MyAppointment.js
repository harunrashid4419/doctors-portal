import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UsersContext";

const MyAppointment = () => {
   const { user } = useContext(AuthContext);

   const { data: bookings = [] } = useQuery({
      queryKey: ["bookings", user?.email],
      queryFn: () =>
         fetch(`https://doctors-portal-recap-server.vercel.app/bookings?email=${user?.email}`, {
            headers: {
               authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
         }).then((res) => res.json()),
   });

   return (
      <div>
         <h4 className="text-2xl text-primary mb-5">My Appointment</h4>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>SL.</th>
                     <th>Name</th>
                     <th>treatment</th>
                     <th>Date</th>
                     <th>slot</th>
                     <th>Payment</th>
                  </tr>
               </thead>
               <tbody>
                  {bookings &&
                     bookings?.map((book, i) => (
                        <tr key={book._id}>
                           <th>{i + 1}</th>
                           <td>{book.patentName}</td>
                           <td>{book.treatment}</td>
                           <td>{book.appointDate}</td>
                           <td>{book.slot}</td>
                           <td>
                              {book.price && !book.paid && (
                                 <Link to={`/dashboard/payment/${book._id}`}>
                                    <button className="btn btn-primary btn-sm">
                                       Pay
                                    </button>
                                 </Link>
                              )}
                              {book.price && book.paid && (
                                 <span className="text-primary">Paid</span>
                              )}
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyAppointment;
