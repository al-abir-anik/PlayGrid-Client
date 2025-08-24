import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CardInputForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleCardPaymentSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
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
    } else {
      console.log("[PaymentMethod]", paymentMethod);
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
      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-3 mt-8 mb-6 font-medium font-general text-sm rounded-lg text-white bg-primary border-2 border-primary hover:border-white disabled:bg-gray-400 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
      >
        PLACE ORDER
      </button>

      <p className="opacity-70">
        demo card: 4242 4242 4242 4242 <br /> expiryDate: Any future date <br />{" "}
        cvc: 123 <br />
        zip: 12345
      </p>
    </form>
  );
};

export default CardInputForm;
