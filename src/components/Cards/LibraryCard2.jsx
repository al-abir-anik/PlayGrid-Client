import { FaRegClock } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router";

const LibraryCard2 = ({ game, handleRemoveWishlist }) => {
  const { _id, title, image, price, rating } = game;

  return (
    <div className="w-full h-auto md:h-60 flex flex-col md:flex-row gap-12 rounded-lg bg-white overflow-hidden">
      <img
        src="https://i.ibb.co/RkRqhP7C/wp9129545-playstation-4-4k-wallpapers.jpg"
        alt="game poster"
        className="w-full md:w-1/4 object-cover"
      />
      <div className="w-2/3 flex flex-col justify-around">
        <div className="text-sm flex gap-5">
          <p className="font-semibold opacity-80 uppercase">{price}</p>
          <span className="flex gap-2 items-center">
            <FaRegClock className="text-lg" />
            <p>{rating}</p>
          </span>
        </div>
        <h3 className="text-2xl font-semibold ">{title}</h3>
        <p className="text-lg opacity-70">{price}</p>
        <div className="flex justify-between">
          <Link to={`/game/${_id}`}>
            <button className="flex items-end gap-1.5 bg-amber-400 group transition-all hover:text-primary duration-300 cursor-pointer">
              <span className="text-lg font-semibold">Read More</span>{" "}
              <IoMdArrowForward className="font-light text-2xl text-primary -rotate-45 group-hover:rotate-0 duration-300 transition-transform" />
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default LibraryCard2;
