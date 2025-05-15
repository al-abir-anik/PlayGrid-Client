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
        <h2 className="  text-4xl font-medium heading-font ">
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
            <div className="flex flex-col">
              <button className="text-left py-4 text-gray-800 hover:text-[#45F882] border-b border-b-gray-300 hover:border-b-[#45F882] cursor-pointer">
                Free
              </button>
              <button className="text-left py-4 text-gray-800 hover:text-[#45F882] border-b border-b-gray-300 hover:border-b-[#45F882] cursor-pointer">
                Under $10.00
              </button>
              <button className="text-left py-4 text-gray-800 hover:text-[#45F882] border-b border-b-gray-300 hover:border-b-[#45F882] cursor-pointer">
                Under $20.00
              </button>
              <button className="text-left py-4 text-gray-800 hover:text-[#45F882] border-b border-b-gray-300 hover:border-b-[#45F882] cursor-pointer">
                Under $30.00
              </button>
              <button className="text-left py-4 text-gray-800 hover:text-[#45F882] border-b border-b-gray-300 hover:border-b-[#45F882] cursor-pointer">
                $30.01 and above
              </button>
            </div>
          </div>
        </div>

        <div className="w-3/4 space-y-10">
          {/* Search */}
          <div className="flex justify-between items-center">
            <div className="w-2/3">
              <input
                type="search"
                placeholder="search news"
                className="w-full p-2 border border-gray-200"
              />
            </div>
            <div className="pr-5 flex items-center relative">
              <h5 className="w-auto text-lg">Sort By :</h5>
              <select
                // onChange={(e) => setPriceRange(e.target.value)}
                className=" bg-white text-blue-500 py-2 px-8 appearance-none rounded focus:outline-none"
                defaultValue=""
                aria-label="select"
              >
                <option value="" selected disabled>
                  Default
                </option>
                <option value="51-100">Low to high</option>
                <option value="0-50">High to low</option>
              </select>
              <IoIosArrowDown className="absolute right-7 top-[55%] transform -translate-y-1/2 pointer-events-none text-blue-500" />
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
