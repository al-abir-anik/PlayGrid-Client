import Button from "../Button";
import { IoPlay } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";

const LibraryCard = ({ game, handleFavourite, favourites, favLoading }) => {
  const { _id, title, image } = game;
  const isFavourite = favourites?.some((f) => f._id === _id);
  const isLoading = favLoading?.[_id];

  return (
    <div className="group/card w-80 bg-gray-200 rounded-xl overflow-hidden transition-all ">
      <div className="h-80 overflow-hidden relative">
        <img
          src={image}
          alt="game poster"
          className="w-full h-full object-cover transform transition-transform ease-in-out duration-300 group-hover/card:scale-105"
        />

        {/* Favourite Toggle button */}
        <button
          onClick={() => handleFavourite(_id)}
          className="w-10 h-10 bg-white/20 rounded-full absolute top-3 right-3 flex justify-center items-center group cursor-pointer"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <GoHeartFill
              className={`text-2xl group-active:scale-75 ${
                isFavourite
                  ? "text-red-400 group-hover:text-red-400"
                  : "text-white50/60 group-hover:text-white50/90"
              }`}
            />
          )}
        </button>
      </div>

      <div className="p-4 space-y-3">
        <h5 className="text-lg font-semibold h-14">{title}</h5>
        <Button
          id="play-now"
          title="PLAY NOW"
          leftIcon={<IoPlay />}
          containerClass="!w-full bg-yellow300 text-black500"
        />
      </div>
    </div>
  );
};

export default LibraryCard;
