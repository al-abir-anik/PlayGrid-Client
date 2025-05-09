import { Link } from "react-router";

const GameCard1 = ({ game }) => {
  const { _id, title, image, price, rating } = game;

  return (
    <div className="w-2xs mx-auto bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:rounded-none hover:scale-105">
      <figure className="">
        <img src={image} alt="game poster" className="h-72 object-cover" />
      </figure>
      <div className="p-4 space-y-3">
        <h5 className="text-lg font-semibold h-14">{title}</h5>
        <p className="text-sm text-gray-600 ">Rating: {rating}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg ">${price}</p>
          <Link to={`/game/${_id}`}>
            <button className="px-6 py-2 text-sm border border-gray-600 text-gray-800 rounded-2xl hover:bg-gray-700 hover:text-white focus:scale-90 transition cursor-pointer">
              Game Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard1;
