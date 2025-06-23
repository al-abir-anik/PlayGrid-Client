import { Link } from "react-router";
import Button from "../Button";
import { IoPlay } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";

const LibraryCard = ({ game, handleFavourite, favourites }) => {
  const { _id, title, image } = game;
//   const isFavourite = favourites.some((f) => f._id === _id);

  return (
    <div className="group/card w-80 bg-gray-200 rounded-xl overflow-hidden transition-all ">
      <div className="h-80 overflow-hidden relative">
        <img
          src={image}
          alt="game poster"
          className="w-full h-full object-cover transform transition-transform ease-in-out duration-300 group-hover/card:scale-105"
        />

        <button
          onClick={() => handleFavourite(_id)}
          className="w-10 h-10 bg-blue200/50 rounded-full absolute top-3 right-3 flex justify-center items-center group cursor-pointer"
        >
          {/* <GoHeartFill
            className={`text-2xl group-hover:text-white transform group-active:scale-90 ${
              isFavourite ? "text-white" : "text-white/40"
            }`}
          /> */}
        </button>
      </div>

      <div className="p-4 space-y-3">
        <h5 className="text-lg font-semibold h-14">{title}</h5>
        <Button
          id="play-now"
          title="PLAY NOW"
          leftIcon={<IoPlay />}
          containerClass="!w-full bg-yellow300 text-blue200"
        />
      </div>
    </div>
  );
};

export default LibraryCard;
