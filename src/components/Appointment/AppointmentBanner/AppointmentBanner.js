import React from "react";
import { DayPicker } from "react-day-picker";
import chairImg from '../../../assets/images/chair.png';


const AppointmentBanner = ({selected, setSelected}) => {
   return (
      <div className="hero">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img
               src={chairImg}
               className="max-w-sm rounded-lg shadow-2xl"
               alt=""
            />
            <div className="mr-12">
               <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
               ></DayPicker>
            </div>
         </div>
      </div>
   );
};

export default AppointmentBanner;
