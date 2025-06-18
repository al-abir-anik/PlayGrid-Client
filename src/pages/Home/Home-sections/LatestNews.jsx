import { IoArrowRedo } from "react-icons/io5";
import AnimatedTitle from "../../../components/AnimatedTitle";
import Button from "../../../components/Button";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import NewsCard1 from "../../../components/Cards/NewsCard1";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/latest-news")
      .then((res) => res.json())
      .then((data) => setLatestNews(data));
  }, []);

  return (
    <div className="w-3/4 mx-auto my-28 pb-28 flex justify-between items-start">
      {/* Heading */}
      <div className="w-2/5 pt-10 space-y-8 sticky top-0">
        <AnimatedTitle
          title="lat<b>e</b>st<br /><b>n</b>ews"
          containerClass="!text-black md:!text-[9.5rem]"
          titleAlignClass="flex justify-start"
        />
        <p className="mt-3 w-3/4 text-sm md:text-lg">
          Stay updated with the latest news, events, and updates in our
          ecosystem. Be part of our universe's growth and evolution.
        </p>
        <Link to={"news"} viewTransition>
          <Button
            id="read-all-news"
            title="Read All News"
            leftIcon={<IoArrowRedo />}
            containerClass="bg-blue200 !text-blue50"
          />
        </Link>
      </div>

      <div className="w-1/2 mt-20 flex flex-col gap-10 md:gap-20">
        {latestNews.map((news) => (
          <NewsCard1 key={news._id} news={news}></NewsCard1>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
