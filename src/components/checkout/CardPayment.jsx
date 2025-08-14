import { useState } from "react";
import { IoIosCard } from "react-icons/io";

const CardPayment = () => {
  const [cardPayment, setCardPayment] = useState(false);

  return (
    <div className="w-full px-6 py-4 flex gap-5 rounded-lg bg-gray-100/80">
      <input
        type="checkbox"
        onChange={() => setCardPayment(!cardPayment)}
        className="w-5 h-5 mt-1 text-primary bg-white border-offWhite50 focus:ring-primary cursor-pointer"
      />
      <div className="w-full flex flex-col gap-5">
        <div className=" flex items-center gap-5">
          <span className="py-2 px-5 rounded-lg bg-white border border-gray-300">
            <IoIosCard className="text-3xl" />
          </span>
          <p>Credit Card / &nbsp;Debit Card</p>
        </div>

        {/* card info */}
        <div>
          <div className="w-5/6 my-4 flex items-center justify-between">
            <p className="text-sm">CARD DETAILS</p>
            <div className="w-12 h-8 flex">
              <img src="/public/img/visa.png" alt="card-image" />
              <img src="/public/img/mastercard.png" alt="card-image" />
              <img src="/public/img/american-express.png" alt="card-image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardPayment;
