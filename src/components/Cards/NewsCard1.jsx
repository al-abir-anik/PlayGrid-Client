import { FaArrowRight, FaRegClock } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const NewsCard1 = ({ news }) => {
  const { _id, image, title, date, category, summary } = news;

  return (
    <div className=" overflow-hidden mx-auto">
      <figure>
        <img src={image} alt="news poster" className=" object-cover" />
      </figure>
      <div className="space-y-3 my-5">
        <div className="text-sm flex gap-5">
          <p className="font-semibold opacity-80 uppercase">{category}</p>
          <span className="flex gap-2 items-center">
            <FaRegClock className="text-[#45F882] text-lg" />
            <p>{date}</p>
          </span>
        </div>
        <h5 className="text-xl font-semibold mb-2.5">{title}</h5>
        <p className="my-2  opacity-70">${summary}</p>
      </div>

      <button className="flex items-end gap-1.5 group transition-all hover:text-[#45F882] duration-200 cursor-pointer">
        <span className="font-semibold">Read More</span>{" "}
        <IoMdArrowForward className="text-xl text-[#45F882] -rotate-45 group-hover:rotate-0 duration-200 transition-transform" />
      </button>
    </div>
  );
};

export default NewsCard1;
