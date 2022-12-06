import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, {  useState } from "react";
import Loading from "../../../Loading/Loading";
import AppointmentOption from "../../AppointmentOption/AppointmentOption";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AppointmentSection = ({ selected }) => {
   const [treatment, setTreatment] = useState(null);
   const date = format(selected, 'PP');
   const {data: options = [], refetch, isLoading} = useQuery({
      queryKey: ['appointment', date],
      queryFn: async() =>{
         const res = await fetch(`https://doctors-portal-recap-server.vercel.app/appointment?date=${date}`);
         const data = await res.json();
         return data;
      }
   });

   if(isLoading){
      return <Loading></Loading>
   }

   return (
      <div className="my-16">
         <p className="text-center text-primary text-2xl">
            You have picked:{format(selected, "PP")}
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((option) => (
               <AppointmentOption
                  key={option._id}
                  option={option}
                  setTreatment={setTreatment}
               ></AppointmentOption>
            ))}
         </div>
         {treatment && (
            <AppointmentModal
               selected={selected}
               treatment={treatment}
               setTreatment={setTreatment}
               refetch={refetch}
            ></AppointmentModal>
         )}
      </div>
   );
};

export default AppointmentSection;
