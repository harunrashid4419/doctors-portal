import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UsersContext";
import useToken from "../../../Hooks/useToken";

const Login = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();
   const { logIn } = useContext(AuthContext);
   const [logInError, setLogInError] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const [createUserEmail, setCreateUserEmail] = useState('');
   const [token] = useToken(createUserEmail);
   if(token){
      navigate(from, { replace: true });
   }

   const handleLogin = (data) => {
      setLogInError("");
      logIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('login successfully');
            setCreateUserEmail(data.email);
         })
         .catch((error) => {
            console.error("error", error);
            setLogInError(error.message);
         });
   };

   return (
      <div className="h-[600px] flex justify-center items-center">
         <div className="shadow-xl w-96 mx-auto p-7">
            <h1 className="text-3xl  text-center">Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
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
                  {errors.email && (
                     <p className="text-red-500 mt-4">
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
                        minLength: {
                           value: 6,
                           message: "Password at leasts 6 character or longer",
                        },
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors.password && (
                     <p className="text-red-500 mt-2">
                        {errors?.password?.message}
                     </p>
                  )}
                  <label className="label">
                     <span className="label-text-alt">Forget Password?</span>
                  </label>
               </div>
               {logInError && <p className="text-red-600">{logInError}</p>}
               <input
                  className="btn btn-neutral w-full mt-5"
                  value="Login"
                  type="submit"
               />
            </form>
            <p className="text-center py-3">
               <small>
                  New to Doctors Portal?{" "}
                  <Link to="/signup" className="text-primary">
                     Create new account
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

export default Login;
