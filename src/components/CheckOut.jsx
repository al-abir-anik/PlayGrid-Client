import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import { useAppContext } from "../contexts/AppContext";
import { FaUser } from "react-icons/fa6";
import { FcCurrencyExchange } from "react-icons/fc";
import { IoIosCard } from "react-icons/io";
import { SlClose } from "react-icons/sl";

const CheckOut = ({ setShowCheckout }) => {
  const { user } = useContext(AuthContext);
  const { cartItems } = useAppContext();

  // cart summary calculation
  const totalRegularPrice = cartItems.reduce(
    (sum, item) => sum + (item.regularPrice || 0),
    0
  );
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.offerPrice || item.regularPrice || 0),
    0
  );

  return (
    <div
      //   onClick={() => setShowCheckout(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-999 flex items-center text-gray-800 bg-black/50"
    >
      <div className="w-3/5 h-screen flex m-auto items-start shadow-xl bg-white">
        {/* left Side */}
        <div className="w-[60%] h-full px-8 py-10 flex flex-col">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-semibold uppercase">Checkout</h2>
            <p className="flex items-baseline gap-2 uppercase text-blue300">
              <FaUser />
              {user?.displayName}
            </p>
          </div>
          <span className="my-4">
            <hr className="w-1/3 border-2 border-blue300" />
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
                  <p to={"/"} className="logo-font ">
                    PLAY<span className="text-blue300">GRID</span>
                  </p>
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
            <hr className="w-1/2 border-2 border-blue300" />
            <hr className="border-gray-300" />
          </span>

          {/* summary */}
          <div className="px-6 pt-5 pb-10 flex-1 overflow-y-auto">
            {/* order items */}
            <div className="flex flex-col gap-3">
              {cartItems.map((game) => (
                <div key={game.name} className="flex gap-5">
                  <img
                    src={game.poster}
                    alt="game poster"
                    className="w-[20%] h-full rounded object-cover"
                  />
                  <div className="space-y-1.5">
                    <p className="text-lg font-semibold">{game.name}</p>
                    <p>{game.developer}</p>
                    <p>$ {game.offerPrice}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* price */}
            <div className="mt-10 space-y-3">
              <p className="flex justify-between text-gray-700">
                <span>Price</span>
                <span>$ {totalRegularPrice}</span>
              </p>
              <p className="flex justify-between text-gray-700">
                <span>Sell Discount</span>
                <span>- $ {(totalRegularPrice - subtotal).toFixed(2)}</span>
              </p>
              <hr className=" border-gray-300" />
              <p className="flex justify-between text-lg font-medium mt-3">
                <span>Total</span>
                <span>$ {subtotal.toFixed(2)}</span>
              </p>
            </div>
          </div>

          {/* place order section */}
          <div className="px-6 py-5 mt-auto [box-shadow:0_-5px_4px_rgba(0,0,0,0.1)]">
            <div className="space-y-3 text-xs text-black [&_a]:text-blue300 [&_a]:underline">
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
            <button className="w-full py-4 my-4 font-semibold text-white bg-blue300 rounded cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
