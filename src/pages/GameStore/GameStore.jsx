import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import GameCard1 from "../../components/Cards/GameCard1";
import { useLoaderData } from "react-router";
import UpcomingGameCard from "../../components/Cards/UpcomingGameCard";
import StoreSlider from "./StoreSlider/StoreSlider";

const GameStore = () => {
  const upcomingGames = useLoaderData();
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-games`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error.message));
  }, []); //?search=${search}&category=${category}&priceRange=${priceRange}

  return (
    <div className="">
      {/* Coming Soon */}
      <div className="  py-8 space-y-6">
        <h2 className="w-3/4 mx-auto text-3xl font-medium tracking-wide">
          Popular Upcoming Releases
        </h2>
        <hr className="opacity-10" />
        <StoreSlider upcomingGames={upcomingGames}></StoreSlider>
      </div>

      {/* Sorting, Toggle, and Search */}
      <div className="w-3/4 mx-auto bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="w-3/5 flex gap-2 items-center sm:w-auto flex-grow">
          <div className="w-10 h-10 ml-4 rounded-lg bg-gray-100 flex justify-center items-center">
            <CiSearch className="text-2xl text-gray-500"></CiSearch>
          </div>
          <div className="join w-full shadow-sm">
            <input
              // onKeyUp={(e) => setSearch(e.target.value)}
              className="input join-item px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Search by food name"
            />
            <select
              // onChange={(e) => setCategory(e.target.value)}
              className="select join-item w-2/6 border-gray-300"
              defaultValue=""
              aria-label="select"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
        </div>

        {/* Price range filter */}
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

      {/* All Games with filter bar */}
      <div className="w-3/4 mx-auto my-20 flex justify-between items-start">
        <div className="w-1/5 space-y-16 sticky top-0">
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
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                E-SPORTS
              </button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                GAMES
              </button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                TOURNAMENTS
              </button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                DLC
              </button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                RELEASES
              </button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                LEAKS
              </button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                COMMUNITY
              </button>
              <button className="py-2 px-4 bg-gray-200 hover:bg-[#45F882] transition-colors duration-200">
                UPDATES
              </button>
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

        <div className="w-2/3 flex gap-8 flex-wrap">
          {games.map((game) => (
            <GameCard1 key={game._id} game={game}></GameCard1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameStore;
