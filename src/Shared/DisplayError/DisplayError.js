import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../context/UsersContext";

const DisplayError = () => {
   const error = useRouteError();
   const navigate = useNavigate();
   const { logOut } = useContext(AuthContext);

   const handleSignOut = () => {
      logOut()
         .then(() => {
            navigate('/login')
         })
         .catch((error) => {
            console.error(error);
         });
   };
   return (
      <div className="flex justify-center text-center pt-24">
         <div>
            <p className="text-red-500">Somethings is wrong</p>
            <p className="text-red-500 my-3">{error.statusText || error.message}</p>
            <p className="text-red-600">
               Please{" "}
               <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-sm mx-5"
               >
                  SignOut
               </button>
               and login again
            </p>
         </div>
      </div>
   );
};

export default DisplayError;
