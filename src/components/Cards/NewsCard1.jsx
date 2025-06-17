import { FaRegClock } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router";

const NewsCard1 = ({ news }) => {
  const { _id, image, title, date, category, summary } = news;

  return (
    <div className="overflow-hidden mx-auto">
      <img
        src={image}
        alt="news poster"
        className="mb-5 rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="space-y-3">
        <div className="flex gap-6">
          <p className="font-semibold opacity-80 uppercase">{category}</p>
          <span className="flex gap-2 items-center">
            <FaRegClock className="text-primary text-lg" />
            <p>{date}</p>
          </span>
        </div>
        <h5 className="text-2xl font-semibold tracking-wide">{title}</h5>
        <p className="text-lg opacity-70 font-robert-regular">{summary}</p>
      </div>

      <Link to={`/news/${_id}`}>
        <button className="mt-3 flex items-end gap-1.5 group transition-all hover:text-[#45F882] duration-300 cursor-pointer">
          <span className="text-lg font-semibold">Read More</span>{" "}
          <IoMdArrowForward className="font-light text-2xl text-[#45F882] -rotate-45 group-hover:rotate-0 duration-300 transition-transform" />
        </button>
      </Link>
    </div>
  );
};

export default NewsCard1;
