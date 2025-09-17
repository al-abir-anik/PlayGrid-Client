import { FaRegClock } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router";

const NewsCard2 = ({ news }) => {
  const { _id, image, title, date, category, summary } = news;

  return (
    <div className="h-60 overflow-hidden flex gap-10">
      <img
        src="https://i.ibb.co/RkRqhP7C/wp9129545-playstation-4-4k-wallpapers.jpg"
        alt="news poster"
        className="w-1/3 object-cover"
      />
      <div className="flex flex-col justify-center gap-4">
        <div className="text-sm flex gap-5">
          <p className="font-semibold opacity-80 uppercase">{category}</p>
          <span className="flex gap-2 items-center">
            <FaRegClock className="text-pr text-lg" />
            <p>{date}</p>
          </span>
        </div>
        <h3 className="text-2xl font-semibold ">{title}</h3>
        <p className="text-lg opacity-70">{summary}</p>
        {/* <Link to={`/news/${_id}`}>
          <button className="flex items-end gap-1.5 group transition-all hover:text-primary duration-300 cursor-pointer">
            <span className="text-lg font-semibold">Read More</span>{" "}
            <IoMdArrowForward className="font-light text-2xl text-primary -rotate-45 group-hover:rotate-0 duration-300 transition-transform" />
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default NewsCard2;
