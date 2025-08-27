import { useNavigate } from "react-router";
import Button from "../Button";

const PaymentModal = ({ setShowCheckout, setShowSuccessModal }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowCheckout(false);
    navigate("/library/my-games");
    window.location.reload();
  };

  return (
    <div className="w-full h-full pb-24 absolute flex items-center justify-center bg-black500/30">
      <div className="w-[370px] md:w-[460px] py-8 px-5 flex flex-col gap-4 items-center bg-white rounded-xl animate-modal">
        <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center animate-pop relative">
          <svg
            className="w-16 h-16 text-white animate-draw"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-black200 font-medium text-2xl lg:text-3xl">
          Purchased Successful.
        </h2>
        <p className=" text-black100 text-center">
          Your Games Added in Library.
        </p>

        <Button
          id="ok"
          title="OK"
          onClickFunc={handleCloseModal}
          containerClass="w-fit mt-3 !py-3 !px-14 !rounded-lg bg-primary text-white"
        />
      </div>
    </div>
  );
};

export default PaymentModal;
