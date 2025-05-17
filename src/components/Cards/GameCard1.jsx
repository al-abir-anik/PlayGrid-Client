import { Link } from "react-router";

const GameCard1 = ({ game }) => {
  const { _id, title, image, price, rating } = game;

  return (
    <>
      <Link to={`/game/${_id}`} className="cursor-pointer">
        <div className="w-2xs mx-auto bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:rounded-none hover:scale-105">
          <figure className="">
            <img src={image} alt="game poster" className="h-72 object-cover" />
          </figure>
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
