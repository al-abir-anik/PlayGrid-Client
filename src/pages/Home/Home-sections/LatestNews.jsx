import { useEffect, useState } from "react";
import { Link } from "react-router";
import NewsCard1 from "../../../components/Cards/NewsCard1";
import { FaRegClock } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/latest-news")
      .then((res) => res.json())
      .then((data) => setLatestNews(data));
  }, []);

  return (
    <section className="w-3/4 mx-auto my-32">
      <h2 className="text-[#282828] font-extrabold text-4xl text-center mb-20">
        RECENT <span className="text-[#45F882]">NEWS</span>
      </h2>

      <div className="flex justify-between">
        {latestNews[0] && (
          <div className="w-3/5 overflow-hidden">
            <figure className="">
              <img
                src={latestNews[0].image}
                alt="news poster"
                className="mb-8 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
            <div className="space-y-5">
              <div className="flex gap-6">
                <p className="font-semibold opacity-80 uppercase">{latestNews[0].category}</p>
                <span className="flex gap-2 items-center">
                  <FaRegClock className="text-[#45F882] text-lg" />
                  <p>{latestNews[0].date}</p>
                </span>
              </div>
              <h5 className="text-2xl font-semibold tracking-wide">{latestNews[0].title}</h5>
              <p className="text-lg opacity-70 tracking-wide whitespace-pre-line">${latestNews[0].summary}</p>
            </div>

            <button className=" mt-6 flex items-end gap-1.5 group transition-all hover:text-[#45F882] duration-200 cursor-pointer">
              <span className="text-lg font-semibold">Read More</span>{" "}
              <IoMdArrowForward className="font-light text-2xl text-[#45F882] -rotate-45 group-hover:rotate-0 duration-200 transition-transform" />
            </button>
          </div>
        )}
        <div className="w-2/6 flex flex-col gap-10">
          {latestNews.slice(1, 3).map((news) => (
            <NewsCard1 key={news._id} news={news}></NewsCard1>
          ))}
        </div>
      </div>

      <Link to={"news"}>
        <button className=" mt-14 px-10 py-4 bg-[#45F882] text-gray-700 rounded-3xl hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
          View All News
        </button>
      </Link>
    </section>
  );
};

export default LatestNews;
