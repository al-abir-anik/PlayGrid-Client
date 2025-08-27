import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import AuthContext from "../../auth/AuthContext";

const CardInputForm = ({ setShowSuccessModal }) => {
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [orderBtnLoading, setOrderBtnLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleCardPaymentSubmit = async (event) => {
    event.preventDefault();
    setOrderBtnLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
      try {
        const res = await axios.patch("https://playgrid-server.vercel.app/purchase-game", {
          email: user?.email,
        });

        if (res.data.modifiedCount > 0) {
          setShowSuccessModal(true);
        }
      } catch (error) {
        console.error("Purchase error:", error);
        toast.error("Failed to place order");
      }
      setOrderBtnLoading(false);
    }
  };

  return (
    <form onSubmit={handleCardPaymentSubmit}>
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
      ></CardElement>

      <p className="mt-5 text-red-600">{cardError}</p>

      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-3 my-4 font-medium font-general text-sm rounded-lg text-white bg-primary border-2 border-primary hover:border-white disabled:bg-gray-400 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
      >
        {orderBtnLoading ? (
          <div className="w-5 h-5 mx-auto rounded-full border-2 border-gray-700 border-t-transparent animate-spin"></div>
        ) : (
          "PLACE ORDER"
        )}
      </button>
      <p className="opacity-60">
        demo card: 4242 4242 4242 4242 <br /> mm/yy: Any future date <br /> cvc:
        any 3 digit <br />
        zip: any 5 digit
      </p>
    </form>
  );
};

export default CardInputForm;
