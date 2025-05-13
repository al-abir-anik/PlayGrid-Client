import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import NewsCard2 from "../../components/Cards/NewsCard2";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const NewsPage = () => {
  const newsSectionRef = useRef(null);
  const [upcomingNews, totalNewsCount] = useLoaderData();
  const { count } = totalNewsCount;
  const [allNews, setAllNews] = useState([]);

  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const paginationPages = [...Array(numberOfPages).keys()].map((i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `http://localhost:5000/all-news?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data);
        newsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      })
      .catch((error) => console.log(error.message));
  }, [currentPage]); //?search=${search}&category=${category}

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < paginationPages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="">
      {/* Upcoming News */}
      <div className="bg-gray-200 py-8">
        <div className="w-3/4 mx-auto space-y-6">
          <h2 className="text-3xl font-medium tracking-wider">Upcoming News</h2>
          <hr className="opacity-10" />
          <div ref={newsSectionRef} className="flex justify-between gap-6">
            {upcomingNews.map((news) => (
              <div key={news._id} className="w-1/4 space-y-3">
                <p className="font-medium text-black/80">{news.publisher}</p>
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
          {allNews.slice(1).map((news) => (
            <NewsCard2 key={news._id} news={news}></NewsCard2>
          ))}
        </div>

        {/* sidebar */}
        <div className="w-1/4 space-y-16 sticky top-0">
          <div className="flex flex-col gap-3 mt-24">
            <label htmlFor="search" className="text-2xl">
              SEARCH
            </label>
            <input
              type="search"
              placeholder="search news"
              className="p-3 border border-fuchsia-200"
            />
          </div>
          <div>
            <h4 className="text-2xl mb-5">Category</h4>
            <div className="flex flex-wrap gap-3">
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">E-SPORTS</button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">GAMES</button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">TOURNAMENTS</button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">DLC</button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">RELEASES</button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">LEAKS</button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">COMMUNITY</button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">UPDATES</button>
            </div>
          </div>
          <div>
            <h4 className="text-2xl mb-5">NEWSLETTER</h4>
            <p className="text-lg mb-4">Subscribe To Our Newsletter And Get Updated News.</p>
            <input type="email" placeholder="enter your email.." className="w-full p-3 border border-r-fuchsia-200"/>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mb-20 text-center space-x-2">
        <button onClick={handlePrevPage} className="border border-gray-500">
          <FaAngleDoubleLeft />
        </button>
        {paginationPages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={`py-2 px-4 border border-gray-500 cursor-pointer ${
              currentPage == page ? "bg-green-300" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="border border-gray-500">
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
