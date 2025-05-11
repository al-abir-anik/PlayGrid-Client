import { FaRegClock } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const UpcomingGameCard = ({ upcomingGame }) => {
  const {
    _id,
    title,
    summary,
    releaseDate,
    price,
    platform,
    cover,
    publisher,
    genre,
  } = upcomingGame;

  return (
    <div className=" h-80 pr-10 bg-white flex gap-10 overflow-hidden group">
      <img
        src={cover}
        alt="game poster"
        className="w-2/5 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="flex flex-col justify-center gap-5">
        <div className="flex items-center gap-6">
          <p className="text-sm font-semibold opacity-80 uppercase">{genre}</p>
          <span className=" flex gap-2 items-center">
            <FaRegClock className="text-[#45F882] text-lg" />
            <p>{releaseDate}</p>
          </span>
        </div>
        <h5 className="text-2xl font-semibold tracking-wide">{title}</h5>
        <p className="w-4/5 text-lg opacity-70 whitespace-pre-line">${summary}</p>

        <div className="mt-3 flex justify-between gap-3">
          <button className="grow px-10 py-3 bg-[#45F882] text-gray-700 rounded-3xl hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
            Prebook
          </button>
          <button className="px-6 py-3 bg-[#45F882] text-gray-700 rounded-3xl hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
            <IoNotifications className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingGameCard;
