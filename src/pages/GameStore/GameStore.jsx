import { useEffect, useState } from "react";
import GameCard1 from "../../components/Cards/GameCard1";
import { useLoaderData } from "react-router";
import StoreSlider from "./StoreSlider/StoreSlider";
import { IoIosArrowDown } from "react-icons/io";

const GameStore = () => {
  const [upcomingGames, totalGamesCount] = useLoaderData();
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-games`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error.message));
  }, []); //?search=${search}&category=${category}&priceRange=${priceRange}

  const genreFilter = [
    "Action",
    "Adventure",
    "Action-Adventure",
    "Casual",
    "Fighting",
    "Horror",
    "Open World",
    "Racing",
    "Shooter",
    "Sports",
    "Strategy",
    "Survival",
  ];

  return (
    <div className="">
      {/* Coming Soon */}
      <div className="w-3/4  mx-auto py-8 space-y-6">
        <h2 className="  text-3xl font-medium tracking-wide">
          Popular Upcoming Releases
        </h2>
        <hr className="opacity-10" />
        <StoreSlider upcomingGames={upcomingGames}></StoreSlider>
      </div>

      {/* All Games with filter bar */}
      <div className="w-3/4 mx-auto my-20 flex justify-between items-start">
        <div className="w-1/5 space-y-10 sticky top-0">
          <div>
            <h4 className="text-2xl mb-3 tracking-wide">GAMES</h4>
            <p className="text-xl">
              {totalGamesCount.count} <span className="text-base">results</span>
            </p>
          </div>
          <div>
            <h4 className="text-2xl mb-5 tracking-wide">GENRE</h4>
            <div className="flex flex-wrap gap-3">
              {genreFilter.map((b) => (
                <button
                  key={b}
                  className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-2xl mb-5 tracking-wide">PRICE</h4>
            <select
              // onChange={(e) => setPriceRange(e.target.value)}
              className="select max-w-sm appearance-none border-gray-300 shadow-sm"
              defaultValue=""
              aria-label="select"
            >
              <option value="" disabled>
                Filter by Price Range
              </option>
              <option value="0-50">$0 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101-200">$101 - $200</option>
              <option value="201+">$201+</option>
            </select>
          </div>
        </div>

        <div className="w-3/4 space-y-10">
          {/* Search */}
          <div className="flex justify-between items-center">
            <div className="w-2/3">
              <input
                type="search"
                placeholder="search news"
                className="w-full p-2 border border-fuchsia-200"
              />
            </div>
            <div className="pr-5 flex items-center relative">
              <h5 className="text-lg">Sort By :</h5>
              <select
                // onChange={(e) => setPriceRange(e.target.value)}
                className=" bg-white text-sky-500 py-2 px-10 appearance-none rounded focus:outline-none"
                defaultValue=""
                aria-label="select"
              >
                <option value="0-50">$0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201+">$201+</option>
              </select>
              <IoIosArrowDown className="absolute right-7 top-1/2 transform -translate-y-1/2 pointer-events-none text-sky-500" />
            </div>
          </div>

          <div className=" flex gap-10 flex-wrap">
            {games.map((game) => (
              <GameCard1 key={game._id} game={game}></GameCard1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStore;
