import { Link } from "react-router";
import { useAppContext } from "../../contexts/AppContext";

const WishCard = ({ game }) => {
  const {
    cartItems,
    handleAddToCart,
    cartBtnLoading,
    removeWishlistItem,
    rmvBtnLoading,
  } = useAppContext();

  const isCarted = cartItems?.some((g) => String(g._id) === String(game._id));

  return (
    <div className="w-full p-5 flex justify-between rounded-xl text-white50 bg-[#202024] overflow-hidden">
      <Link
        to={`/game/${game._id}`}
        className="w-[12%] rounded overflow-hidden"
      >
        <img
          src={game.poster}
          alt="game poster"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="w-[85%] py-3 pr-5 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Link
              to={`/game/${game._id}`}
              className="text-3xl font-bold hover:text-primary"
            >
              {game.name}
            </Link>
            <span className="flex items-baseline gap-3">
              <p className="line-through">$ {game.regularPrice}</p>
              <p className="text-lg ">$ {game.offerPrice}</p>
            </span>
          </div>
          <p className="text-gray-400">{game.developer}</p>
          <div className="flex gap-3 py-3">
            {game.platform.map((p) => (
              <p key={p}> {p}, </p>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end gap-5">
          <button
            onClick={() => removeWishlistItem(game._id)}
            className="cursor-pointer"
          >
            {rmvBtnLoading[game._id] ? (
              <div className="w-3 h-3 mx-auto border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Remove"
            )}
          </button>
          <button
            onClick={() => handleAddToCart(game._id)}
            disabled={isCarted || cartBtnLoading?.[game._id]}
            className="text-primary cursor-pointer"
          >
            {cartBtnLoading?.[game._id] ? (
              <div className="w-5 h-5 mx-auto border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
            ) : isCarted ? (
              "Added in cart"
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
