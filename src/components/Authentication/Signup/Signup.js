import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UsersContext";
import useToken from "../../../Hooks/useToken";

const Signup = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();
   const { createUser, updateUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const [createdUsersEmail, setCreatedUsersEmail] = useState('');
   const [token] = useToken(createdUsersEmail);

   if(token){
      navigate('/');
   }

   const handleSingUp = (data) => {
      console.log(data)
      createUser(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("SignUp successfully");
            const userInfo = {
               displayName: data.name,
            };
            updateUser(userInfo)
               .then(() => {
                  console.log(data.name, data.email)
                  savedUsers(data.name, data.email);
               })
               .catch((error) => {
                  console.log(error);
               });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const savedUsers = (name, email) => {
      const user = { name, email };
      fetch("https://doctors-portal-recap-server.vercel.app/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
            setCreatedUsersEmail(email);
         });
   };
  

   return (
      <div className="h-[600px] flex justify-center items-center">
         <div className="shadow-xl w-96 mx-auto p-7">
            <h1 className="text-3xl  text-center">Signup</h1>
            <form onSubmit={handleSubmit(handleSingUp)}>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input
                     type="text"
                     {...register("name", {
                        required: "Name is required",
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors?.name && (
                     <p className="text-red-500 mt-2">
                        {errors?.name?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input
                     type="email"
                     {...register("email", {
                        required: "Email address is required",
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors?.email && (
                     <p className="text-red-500 mt-2">
                        {errors?.email?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     {...register("password", {
                        required: "Password is required",
                        pattern: {
                           value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                           message: "Password should be strong",
                        },
                        minLength: {
                           value: 6,
                           message: "Password at least 6 character or longer",
                        },
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors?.password && (
                     <p className="text-red-500 mt-2">
                        {errors?.password?.message}
                     </p>
                  )}
               </div>
               <input
                  className="btn btn-neutral w-full mt-5"
                  value="Signup"
                  type="submit"
               />
            </form>
            <p className="text-center py-3">
               <small>
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                     Please Login
                  </Link>{" "}
               </small>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full mt-8">
               CONTINUE WITH GOOGLE
            </button>
         </div>
      </div>
   );
};

export default Signup;
