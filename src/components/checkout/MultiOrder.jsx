import { useAppContext } from "../../contexts/AppContext";

const MultiOrder = () => {
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
    <div className="px-6 pt-5 pb-10 flex-1 overflow-y-auto">
      {/* order items */}
      <div className="flex flex-col gap-3">
        {cartItems.map((game) => (
          <div key={game.name} className="flex gap-5">
            <img
              src={game.poster}
              alt="game poster"
              className="w-[22%] rounded object-cover"
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
      <div className="mt-6 space-y-3">
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
  );
};

export default MultiOrder;
