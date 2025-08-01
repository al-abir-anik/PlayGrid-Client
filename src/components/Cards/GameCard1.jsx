import { Link } from "react-router";

const GameCard1 = ({ game }) => {
  const { _id, name, poster, regularPrice, offerPrice, rating } = game;

  return (
    <>
      <Link to={`/game/${_id}`} className="cursor-pointer">
        <div className="group w-full border border-black500 rounded-lg overflow-hidden active:scale-95">
          <div className="relative pb-[130%] overflow-hidden">
            <img
              src={poster}
              alt="game poster"
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-90"
            />
          </div>

          <div className="p-2 space-y-1 text-white50">
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
