import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import { FaUser } from "react-icons/fa6";
import { FcCurrencyExchange } from "react-icons/fc";
import { IoIosCard } from "react-icons/io";
import { SlClose } from "react-icons/sl";
import MultiOrder from "./MultiOrder";

const CheckOut = ({ setShowCheckout }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-999 flex items-center text-gray-800 bg-black/50">
      <div className="w-3/5 h-screen flex m-auto items-start shadow-xl bg-white">
        {/* left Side */}
        <div className="w-[60%] h-full px-8 py-10 flex flex-col">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-semibold uppercase">Checkout</h2>
            <p className="flex items-baseline gap-2 uppercase text-primary">
              <FaUser />
              {user?.displayName}
            </p>
          </div>
          <span className="my-4">
            <hr className="w-1/3 border-2 border-primary" />
            <hr className="border-gray-300" />
          </span>

          {/* main */}
          <div className="mt-6 space-y-9">
            {/* playgrid reward  */}
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase">
                Playgrid Rewards
              </p>
              <div className="w-full p-3 flex items-center gap-5 rounded-lg bg-gray-100/80 opacity-60 cursor-not-allowed">
                <span className="py-2 px-5 ml-3 rounded-lg bg-white border border-gray-300">
                  <FcCurrencyExchange className="text-3xl" />
                </span>
                <p>
                  Playgrid Rewards{" "}
                  <span className="pl-2 font-semibold">{"$ 0.00"}</span>
                </p>
              </div>
            </div>
            {/* account balance  */}
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase">Account Balance</p>
              <div className="w-full p-3 flex items-center gap-5 rounded-lg bg-gray-100/80">
                <span className="py-2.5 px-4 ml-3 rounded-lg bg-white border border-gray-300">
                  <img src="/public/img/logoDark.png" alt="logo" width={70} />
                </span>
                <p>
                  Account Balance
                  <span className="pl-2 font-semibold">{"$ 0.00"}</span>
                </p>
              </div>
            </div>
            {/* other payment  */}
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase">
                Other payment Methods
              </p>
              <div className="w-full p-3 flex items-center gap-5 rounded-lg bg-gray-100/80">
                <span className="py-2 px-5 ml-3 rounded-lg bg-white border border-gray-300">
                  <IoIosCard className="text-3xl" />
                </span>
                <p>Credit Card / &nbsp;Debit Card</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[40%] h-full flex flex-col bg-violet-50">
          {/* nav */}
          <div className="px-6 pt-10 pb-5 flex justify-between items-baseline">
            <h2 className="text-lg font-semibold uppercase">Order Summary</h2>
            <button
              onClick={() => setShowCheckout(false)}
              className="hover:text-red-400 cursor-pointer"
            >
              <SlClose className="text-xl" />
            </button>
          </div>
          <span className="px-6">
            <hr className="w-1/2 border-2 border-primary" />
            <hr className="border-gray-300" />
          </span>

          {/* dynamic summary */}
          <MultiOrder />

          {/* place order section */}
          <div className="px-6 py-5 mt-auto [box-shadow:0_-5px_4px_rgba(0,0,0,0.1)]">
            <div className="space-y-3 text-xs text-black [&_a]:text-primary [&_a]:underline">
              <p>
                You are purchasing a digital license for this product. For full
                terms, see <a href="#">purchase policy.</a>
              </p>
              <p>
                By selecting ‘Place Order’ below, you certify that you are over
                18 and an authorized user of this payment method, and agree to
                the
                <a href="#"> End User License Agreement.</a>
              </p>
            </div>
            <button className="w-full py-4 my-4 font-semibold text-white50 bg-primary rounded cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
