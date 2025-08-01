import { Link } from "react-router";
import { useAppContext } from "../../contexts/AppContext";

const CartCard = ({ game }) => {
  const { removeCartItem, moveToWishlist, wishBtnLoading } = useAppContext();

  return (
    <div className="w-full p-5 flex justify-between rounded-xl text-white50 bg-[#202024] overflow-hidden">
      <Link to={`/game/${game._id}`} className="w-[16%] relative rounded">
        <img
          src={game.poster}
          alt="game poster"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="w-[81%] py-3 pr-5 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Link
              to={`/game/${game._id}`}
              className="text-3xl font-bold font-barlow hover:text-blue300"
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
            onClick={() => removeCartItem(game._id)}
            className="cursor-pointer"
          >
            Remove
          </button>
          <button
            onClick={() => moveToWishlist(game._id)}
            disabled={wishBtnLoading[game._id]}
            className="text-blue300 cursor-pointer"
          >
            {wishBtnLoading[game._id] ? (
              <div className="w-5 h-5 mx-auto border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Move to Wishlist"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
