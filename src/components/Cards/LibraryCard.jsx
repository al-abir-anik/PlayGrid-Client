import Button from "../Button";
import { IoPlay } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

const LibraryCard = ({ game, handleFavourite, favourites, favLoading }) => {
  const { _id, name, poster } = game;
  const isFavourite = favourites?.some((f) => f._id === _id);
  const isLoading = favLoading?.[_id];

  return (
    <div className="w-60 bg-black500 rounded-xl overflow-hidden transition-all ">
      <div className="overflow-hidden relative">
        <div className="relative pb-[130%] overflow-hidden">
          <img
            src={poster}
            alt="game poster"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Favourite Toggle button */}
        <button
          onClick={() => handleFavourite(_id)}
          title={isFavourite ? "Remove from Wishlist" : "Add to Wishlist"}
          className="group w-8 h-8 bg-black200 rounded-full absolute top-3 right-3 flex justify-center items-center cursor-pointer"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : isFavourite ? (
            <GoHeartFill className="text-xl text-white group-active:scale-75" />
          ) : (
            <GoHeart className="text-xl text-white group-active:scale-75" />
          )}
        </button>
      </div>

      <div className="p-4 space-y-6">
        <h5 className="text-lg font-semibold text-white50">{name}</h5>
        <Button
          id="play-now"
          title="PLAY NOW"
          leftIcon={<IoPlay />}
          containerClass="!w-full !py-3 border border-primary hover:bg-primary text-white50 transition-colors"
        />
      </div>
    </div>
  );
};

export default LibraryCard;
