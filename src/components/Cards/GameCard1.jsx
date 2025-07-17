import { Link } from "react-router";

const GameCard1 = ({ game }) => {
  const { _id, name, poster, regularPrice, offerPrice, rating } = game;

  return (
    <>
      <Link to={`/game/${_id}`} className="cursor-pointer">
        <div className="w-full bg-gray-600 rounded overflow-hidden">
          <div className="relative pb-[100%] overflow-hidden">
            <img
              src={poster}
              alt="game poster"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          <div className="py-2 space-y-2 text-white">
            <h5 className="text-lg font-semibold">{name}</h5>
            <p className="text-sm">Rating: {rating}</p>
            <p className="text-lg ">$ {offerPrice}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GameCard1;
