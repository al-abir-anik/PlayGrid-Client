import { Link } from "react-router";

const GameCard1 = ({ game }) => {
  const { _id, title, image, price, rating } = game;

  return (
    <>
      <Link to={`/game/${_id}`} className="cursor-pointer">
        <div className="group w-2xs mx-auto bg-gray-200 rounded-xl overflow-hidden transition-all ">
          <div className="h-80 overflow-hidden">
            <img
            src={image}
            alt="game poster"
            className="w-full h-full object-cover transform transition-transform ease-in duration-300 group-hover:scale-110"
          />
          </div>

          <div className="p-4 space-y-3">
            <h5 className="text-lg font-semibold h-14">{title}</h5>
            <p className="text-sm text-gray-600 ">Rating: {rating}</p>
            <p className="text-lg ">${price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GameCard1;
