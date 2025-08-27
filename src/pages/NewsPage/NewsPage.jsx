import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import NewsCard2 from "../../components/Cards/NewsCard2";
import Pagination from "../../components/Pagination";
import { GiCrossedSwords } from "react-icons/gi";

const NewsPage = () => {
  const newsSectionRef = useRef(null);
  const [upcomingNews] = useLoaderData();
  const [allNews, setAllNews] = useState([]);
  const [searchNews, setSearchNews] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [newsGenres, setNewsGenres] = useState([]);

  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(totalCount / itemsPerPage);
  const paginationPages = [...Array(numberOfPages).keys()].map((i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const genreParam =
      newsGenres.length > 0 ? `genre=${newsGenres.join(",")}` : "";

    fetch(
      `https://playgrid-server.vercel.app/all-news?search=${searchNews}&${genreParam}&page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data.news);
        setTotalCount(data.count);
        newsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      })
      .catch((error) => console.log(error.message));
  }, [currentPage, searchNews, newsGenres]);

  const newsGenreFilter = [
    "E-Sport",
    "Game",
    "Tournament",
    "Dlc",
    "Release",
    "Leak",
    "Community",
    "Update",
    "Event",
    "Industry",
  ];

  const toggleGenre = (g) => {
    setNewsGenres((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
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
      <div className="w-4/5 mx-auto my-20 flex justify-between items-start">
        <div className="w-2/3 space-y-10">
          {allNews.slice(1).map((news) => (
            <NewsCard2 key={news._id} news={news}></NewsCard2>
          ))}
        </div>

        {/* sidebar */}
        <div className="w-1/4 space-y-16 sticky top-0">
          <div className="flex flex-col gap-3 mt-24">
            <h3 className="text-2xl">SEARCH</h3>
            <input
              onKeyUp={(e) => {
                setSearchNews(e.target.value);
                setCurrentPage(1);
              }}
              type="search"
              placeholder="search news"
              className="p-3 border border-fuchsia-200"
            />
          </div>
          <div>
            <h4 className="text-2xl mb-5">Category</h4>
            <div className="flex flex-wrap gap-3">
              {newsGenreFilter.map((btn) => {
                const selected = newsGenres.includes(btn);
                return (
                  <button
                    onClick={() => toggleGenre(btn)}
                    key={btn}
                    className={`w-fit flex justify-between items-center py-3 px-4 rounded uppercase transition-colors duration-200 cursor-pointer ${
                      selected
                        ? "bg-[#45F882]"
                        : "bg-transparent hover:bg-white"
                    }`}
                  >
                    {btn}
                    {selected && <GiCrossedSwords />}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="text-2xl mb-5">NEWSLETTER</h4>
            <p className="text-lg mb-4">
              Subscribe To Our Newsletter And Get Updated News.
            </p>
            <input
              type="email"
              placeholder="enter your email.."
              className="w-full p-3 border border-r-fuchsia-200"
            />
          </div>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        paginationPages={paginationPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default NewsPage;
