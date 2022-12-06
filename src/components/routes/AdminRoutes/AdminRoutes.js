import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/UsersContext";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../../Loading/Loading";

const AdminRoutes = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   const [isAdmin, isLoading] = useAdmin(user?.email);

   if (loading || isLoading) {
      return <Loading></Loading>;
   }

   if (user && isAdmin) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
