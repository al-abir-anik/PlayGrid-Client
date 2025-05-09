import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import NewsCard2 from "../../components/Cards/NewsCard2";

const NewsPage = () => {
  const upcomingNews = useLoaderData();
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-news`)
      .then((res) => res.json())
      .then((data) => setAllNews(data))
      .catch((error) => console.log(error.message));
  }, []); //?search=${search}&category=${category}&priceRange=${priceRange}

  return (
    <div className="">
      {/* Upcoming News */}
      <div className="bg-gray-200 py-8">
        <div className="w-3/4 mx-auto space-y-6">
          <h2 className="text-3xl font-medium tracking-wider">Upcoming News</h2>
          <hr className="opacity-10"/>
          <div className="flex justify-between gap-6">
            {upcomingNews.map((news) => (
              <div key={news._id} className="w-1/4 space-y-3">
                <p className="font-medium">{news.publisher}</p>
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-sm">
                  <span>{news.releaseDate}</span>
                  <span className="mx-2">at</span>
                  <span>{news.releaseTime}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All News with SideBar */}
      <div className="w-3/4 mx-auto my-20 flex justify-between items-start">
        <div className="w-2/3 space-y-10">
          {allNews.slice(3).map((news) => (
            <NewsCard2 key={news._id} news={news}></NewsCard2>
          ))}
        </div>
        <div className="w-1/4 bg-gray-100 h-[50rem] sticky top-0">
          <div className="flex flex-col gap-3 mt-24">
            <label htmlFor="search" className="text-2xl">SEARCH</label>
            <input
              type="search"
              placeholder="search news"
              className="p-3 border border-r-fuchsia-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
