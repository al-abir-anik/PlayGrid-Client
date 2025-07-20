import { Link } from "react-router";

const CartCard = ({ game }) => {
  return (
    <div className="w-full p-5 flex justify-between rounded-xl text-white bg-[#202024] overflow-hidden">
      <Link className="w-[16%] relative">
        <img
          src={game.poster}
          alt="game poster"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="w-[81%] py-3 pr-5 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold font-barlow">{game.name}</p>
            <span className="flex items-baseline gap-3">
              <p className="line-through">$ {game.regularPrice}</p>
              <p className="text-lg ">$ {game.offerPrice}</p>
            </span>
          </div>
          <p className="text-gray-400">{game.developer}</p>
          <div className="flex gap-3 py-3">
            {game.platform.map((p) => (
              <p> {p}, </p>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end gap-5">
          <button className="cursor-pointer">Remove</button>
          <button className="text-blue300 cursor-pointer">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
