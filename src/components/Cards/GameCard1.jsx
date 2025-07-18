import { Link } from "react-router";

const GameCard1 = ({ game }) => {
  const { _id, name, poster, regularPrice, offerPrice, rating } = game;

  return (
    <>
      <Link to={`/game/${_id}`} className="cursor-pointer">
        <div className="w-full bg-bg1 rounded overflow-hidden">
          <div className="relative pb-[120%] overflow-hidden">
            <img
              src={poster}
              alt="game poster"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-2 space-y-2 text-white">
            <h5 className="text-xl font-semibold">{name}</h5>
            <p className="text-lg">Rating: {rating}</p>
            <span className="flex items-center gap-2">
              <p
                className={`${
                  offerPrice === 0 ? "text-xl" : "text-lg line-through"
                }`}
              >
                $ {offerPrice === 0 ? "Free to Play" : offerPrice}
              </p>
              {offerPrice > 0 && <p className="text-xl">$ {regularPrice}</p>}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GameCard1;
