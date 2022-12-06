import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
   const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await fetch("https://doctors-portal-recap-server.vercel.app/users");
         const data = await res.json();
         return data;
      },
   });

   const handleUpdate = (id) => {
      fetch(`https://doctors-portal-recap-server.vercel.app/users/admin/${id}`, {
         method: "PUT",
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               toast.success("Admin role updated");
               refetch();
            }
         });
   };

   return (
      <div>
         <h3 className="text-2xl text-primary mb-5">All Users</h3>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>SL.</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Admin Role</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, i) => (
                     <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>
                           {user?.role !== "admin" && (
                              <button
                                 onClick={() => handleUpdate(user?._id)}
                                 className="btn btn-sm"
                              >
                                 Admin
                              </button>
                           )}
                        </td>
                        <td>
                           <button className="btn btn-sm">Delete</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllUsers;
