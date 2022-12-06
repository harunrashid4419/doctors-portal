import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../Loading/Loading";
import CheckOutPage from "./CheckOutPage";

const Payment = () => {
   const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
   const booking = useLoaderData();
   const navigation = useNavigation();
   const { treatment, price, slot, appointDate } = booking;

   if (navigation.state === "loading") {
      return <Loading></Loading>;
   }

   return (
      <div>
         <h2 className="text-3xl text-primary mb-5">Payment for {treatment}</h2>
         <p>
            Please pay <strong>${price}</strong> for your appointment on{" "}
            {appointDate} at ${slot}
         </p>
         <div className="my-12 w-96">
            <Elements stripe={stripePromise}>
               <CheckOutPage booking={booking} />
            </Elements>
         </div>
      </div>
   );
};

export default Payment;
