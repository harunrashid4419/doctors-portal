import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "../src/Layout/Main";
import Home from "../src/components/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/Signup/Signup";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from '../src/components/routes/PrivateRoutes/PrivateRoutes';
import DashboardLayout from "./Layout/DashboardLayout";
import MyAppointment from "./components/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "./components/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./components/routes/AdminRoutes/AdminRoutes";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "./components/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "./components/Dashboard/Payment/Payment";
import DisplayError from "./Shared/DisplayError/DisplayError";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         errorElement: <DisplayError></DisplayError>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
            },
            {
               path: "/Appointment",
               element: <Appointment></Appointment>,
            },
            {
               path: "/login",
               element: <Login></Login>,
            },
            {
               path: "/signup",
               element: <Signup></Signup>,
            },
         ],
      },
      {
         path: 'dashboard',
         element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
         errorElement: <DisplayError></DisplayError>,
         children: [
            {
               path: '/dashboard',
               element: <MyAppointment></MyAppointment>
            },
            {
               path: '/dashboard/users',
               element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
               path: '/dashboard/addDoctor',
               element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
               path: '/dashboard/manageDoctors',
               element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
               path: '/dashboard/payment/:id',
               element: <Payment></Payment>,
               loader: ({params}) => fetch(`https://doctors-portal-recap-server.vercel.app/bookings/${params.id}`)
            },
         ]
      }
   ]);

   return (
      <div>
         <RouterProvider router={router}></RouterProvider>
         <Toaster></Toaster>
      </div>
   );
}

export default App;
