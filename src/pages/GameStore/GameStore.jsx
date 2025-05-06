import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import GameCard1 from "../../components/GameCards/GameCard1";

const GameStore = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-games`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error.message));
  }, []); //?search=${search}&category=${category}&priceRange=${priceRange}

  return (
    <div>
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <header className="p-6 rounded-lg text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Available Games
          </h1>
          <p className="text-gray-700 mt-3 text-base sm:text-lg">
            Discover a wide selection of delicious meals ready for donation. Use
            the tools below to search, sort, and customize your view.
          </p>
        </header>

        {/* Sorting, Toggle, and Search */}
        <div className="w-full bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
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
                aria-label="select">
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
            aria-label="select">
            <option value="" disabled>
              Filter by Price Range
            </option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201+">$201+</option>
          </select>
        </div>

        {/* Main Content */}
        <main className="mt-14 mb-20 space-y-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12 justify-center">
          {/* <InfiniteScroll
          dataLength={meals.length}
          next={loadMoreMeals}
          hasMore={hasMore}
          loader={<h4 className="text-center">Loading more meals...</h4>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12 justify-center"
        ></InfiniteScroll> */}
          {games.map((game) => (
            <GameCard1 key={game._id} game={game}></GameCard1>
          ))}
        </main>
      </div>
    </div>
  );
};

export default GameStore;
