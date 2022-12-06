import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../Loading/Loading";
import DeletingModal from "../../../Shared/DeletingModal/DeletingModal";

const ManageDoctors = () => {
   const [deletingDoctor, setDeletingDoctor] = useState(null);
   const {
      data: doctors = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["doctors"],
      queryFn: async () => {
         try {
            const res = await fetch("https://doctors-portal-recap-server.vercel.app/doctors", {
               headers: {
                  authorization: `Bearer ${localStorage.getItem(
                     "access-token"
                  )}`,
               },
            });
            const data = await res.json();
            return data;
         } catch (error) {
            console.error(error);
         }
      },
   });

   if (isLoading) {
      return <Loading></Loading>;
   }

   const closeModal = () => {
      setDeletingDoctor(null);
   };

   const successDelete = (doctor) => {
      fetch(`https://doctors-portal-recap-server.vercel.app/doctors/${doctor._id}`, {
         method: "DELETE",
         headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount > 0) {
               toast.success(`doctor ${doctor.name} delete successful`);
               refetch();
            }
         });
   };

   return (
      <div>
         <h3 className="text-3xl text-primary mb-5">
            Manage Doctors: {doctors.length}
         </h3>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>SL.</th>
                     <th>Avatar</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Specialty</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {doctors.map((doctor, i) => (
                     <tr key={doctor._id}>
                        <th>{i + 1}</th>
                        <td>
                           <div className="avatar">
                              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                 <img src={doctor.img} alt="" />
                              </div>
                           </div>
                        </td>
                        <td>{doctor.name}</td>
                        <td>{doctor.email}</td>
                        <td>{doctor.specialty}</td>
                        <td>
                           <label
                              htmlFor="deletingModal"
                              className="btn btn-sm btn-error"
                              onClick={() => setDeletingDoctor(doctor)}
                           >
                              Delete
                           </label>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {deletingDoctor && (
            <DeletingModal
               title={"Do you want to delete this doctor?"}
               message={`If you delete ${deletingDoctor.name}? You are not undone.`}
               closeModal={closeModal}
               successDelete={successDelete}
               modalData={deletingDoctor}
               deleteButtonName="Delete"
            ></DeletingModal>
         )}
      </div>
   );
};

export default ManageDoctors;
