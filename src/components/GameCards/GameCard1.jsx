import { Link } from "react-router";

const GameCard1 = () => {
  return (
    <div className="card group md:w-96 overflow-hidden mx-auto hover:shadow sm:max-w-sm">
      <figure>
        <img
          src={imageUrl}
          alt="meal image"
          className="h-60 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h5 className="card-title mb-2.5">{title}</h5>
        <p className="text-sm text-gray-600 mb-1">Rating: ⭐⭐⭐⭐⭐</p>
        <p className="text-lg font-bold my-2">${price}</p>
        {/* <p className="mb-6">
          Nike Air Max is a popular line of athletic shoes that feature Nike's
          signature Air cushioning technology in the sole.
        </p> */}

        <Link to={`/game/${_id}`}>
          <button className="btn btn-primary mt-2">Meal Details</button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard1;
