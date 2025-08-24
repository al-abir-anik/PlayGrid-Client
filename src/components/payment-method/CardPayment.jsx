import { useState } from "react";
import { IoIosCard } from "react-icons/io";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardInputForm from "./CardInputForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CardPayment = () => {
  const [showCardPaymentForm, setShowCardPaymentForm] = useState(false);

  return (
    <div className="w-full px-4 py-4 flex gap-4 rounded-lg bg-gray-100/80">
      <input
        type="checkbox"
        onChange={() => setShowCardPaymentForm(!showCardPaymentForm)}
        className="w-5 h-5 mt-1 text-primary bg-white border-offWhite50 focus:ring-primary cursor-pointer"
      />
      <div className="w-[88%] flex flex-col">
        <div className="flex items-center gap-5">
          <span className="py-2 px-5 rounded-lg bg-white border border-gray-300">
            <IoIosCard className="text-3xl" />
          </span>
          <p>Credit Card / &nbsp;Debit Card</p>
        </div>

        {/* card info */}
        {showCardPaymentForm && (
          <div>
            {/* nav */}
            <div className="my-5 flex items-center justify-between">
              <p className="text-sm">CARD DETAILS</p>
              <div className="w-fit h-10 flex">
                <img src="/img/visa.png" alt="card-image" />
                <img src="/img/mastercard.png" alt="card-image" />
                {/* <img
                  src="/img/american-express.png"
                  alt="card-image"
                  className="w-8 h-full object-cover"
                /> */}
              </div>
            </div>

            {/* card inputs */}
            <div>
              <Elements stripe={stripePromise}>
                <CardInputForm />
              </Elements>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPayment;
