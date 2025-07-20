import { useAppContext } from "../contexts/AppContext";
import { FaLongArrowAltLeft } from "react-icons/fa";
import CartCard from "../components/Cards/CartCard";
import { Link } from "react-router";
import Button from "../components/Button";

const Cart = () => {
  const { cartItems, setShowCheckout } = useAppContext();

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
    <div className="w-3/4 mx-auto py-14 flex flex-col text-white">
      <h1 className="text-3xl md:text-3xl font-bold">
        My Cart{" "}
        <span className="text-sm text-primary pl-3">
          {cartItems.length} Games
        </span>
      </h1>

      <div className="w-full mt-12 flex justify-between items-start">
        {/* cartlist */}
        <div className="w-3/4 flex flex-col gap-8">
          {cartItems.map((game) => (
            <CartCard key={game.name} game={game} />
          ))}
          <Link
            to={"/store"}
            className="w-fit h-8 group mt-6 flex items-center gap-2 font-semibold cursor-pointer "
          >
            <FaLongArrowAltLeft className="transition group-hover:-translate-x-1" />
            Continue Shopping
          </Link>
        </div>

        {/* summary */}
        <div className="w-1/5 sticky top-0">
          <h2 className="text-xl font-bold mb-10">Summary</h2>
          <div className="mt-4 space-y-5">
            <p className="flex justify-between text-gray-300">
              <span>Price</span>
              <span>$ {totalRegularPrice}</span>
            </p>
            <p className="flex justify-between text-gray-300">
              <span>Sell Discount</span>
              <span>- $ {(totalRegularPrice - subtotal).toFixed(2)}</span>
            </p>
            <hr className=" border-gray-500" />
            <p className="flex justify-between text-lg font-medium mt-3">
              <span>Subtotal</span>
              <span>$ {subtotal.toFixed(2)}</span>
            </p>
          </div>
          <Button
            id="checkout"
            title="Check Out"
            onClickFunc={() => setShowCheckout(true)}
            containerClass="w-full mt-5 !py-3 !rounded-lg bg-blue300 text-blue200"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
