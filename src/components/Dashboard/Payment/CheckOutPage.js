import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutPage = ({ booking }) => {
   const { price, email, patentName, _id } = booking;
   const [paymentError, setPaymentError] = useState("");
   const [clientSecret, setClientSecret] = useState("");
   const [success, setSuccess] = useState("");
   const [transitionId, setTransitionId] = useState("");
   const [processing, setProcessing] = useState(false);
   const stripe = useStripe();
   const elements = useElements();

   useEffect(() => {
      fetch("https://doctors-portal-recap-server.vercel.app/create-payment-intent", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
         },
         body: JSON.stringify({ price }),
      })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
   }, [price]);

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
         return;
      }

      const card = elements.getElement(CardElement);
      if (card === null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: "card",
         card,
      });

      if (error) {
         console.log(error);
         setPaymentError(error.message);
      } else {
         setPaymentError("");
      }

      setSuccess("");
      setProcessing(true);
      const { paymentIntent, error: confirmError } =
         await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {
                  name: patentName,
                  email: email,
               },
            },
         });
      if (confirmError) {
         setPaymentError(confirmError.message);
      }
      if (paymentIntent.status) {
         const payments = {
            email,
            bookingId: _id,
            price,
            transitionId: paymentIntent.id,
         };
         fetch("https://doctors-portal-recap-server.vercel.app/payments", {
            method: "POST",
            headers: {
               "content-type": "application/json",
               authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(payments),
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.insertedId) {
                  setSuccess("Congrats! Your payment is successfully");
                  setTransitionId(paymentIntent.id);
               }
            });
      }
      setProcessing(false);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                           color: "#aab7c4",
                        },
                     },
                     invalid: {
                        color: "#9e2146",
                     },
                  },
               }}
            />
            <button
               className="btn btn-sm btn-primary mt-5"
               type="submit"
               disabled={!stripe || !clientSecret || processing}
            >
               Pay
            </button>
         </form>
         <p className="text-red-600">{paymentError}</p>
         {success && (
            <div>
               <p className="text-xl my-3 text-primary">{success}</p>
               <p>
                  TransitionId:{" "}
                  <span className="text-primary">{transitionId}</span>
               </p>
            </div>
         )}
      </div>
   );
};

export default CheckOutPage;
