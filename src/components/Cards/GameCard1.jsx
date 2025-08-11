import { Link } from "react-router";

const GameCard1 = ({ game }) => {
  const { _id, name, poster, regularPrice, offerPrice, developer } = game;

  return (
    <>
      <Link to={`/game/${_id}`} className="cursor-pointer">
        <div className="group w-full border border-black200/60 rounded-lg overflow-hidden active:scale-95">
          <div className="relative pb-[130%] overflow-hidden">
            <img
              src={poster}
              alt="game poster"
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-90"
            />
          </div>

          <div className="p-1 md:p-3 space-y-1.5 text-white50">
            <h5 className="lg:text-lg font-semibold leading-5 text-white50">
              {name}
            </h5>
            <p className="hidden md:block text-sm lg:text-base font-medium text-black100">
              {developer}
            </p>
            <span className="flex items-center gap-2 text-offWhite50">
              {offerPrice > 0 && <p className="font-medium">${regularPrice}</p>}
              <p
                className={`${
                  offerPrice === 0 ? "font-medium" : "text-sm line-through"
                }`}
              >
                $ {offerPrice === 0 ? "FREE" : offerPrice}
              </p>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GameCard1;
