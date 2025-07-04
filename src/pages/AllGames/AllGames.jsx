import { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { GiCrossedSwords } from "react-icons/gi";
import GameCard1 from "../../components/Cards/GameCard1";
import AuthContext from "../../auth/AuthContext/AuthContext";

const AllGames = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [priceOrder, setPriceOrder] = useState("");
  const [genres, setGenres] = useState([]);
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const genreParam = genres.length > 0 ? `genre=${genres.join(",")}` : "";

    fetch(
      `http://localhost:5000/all-games?search=${search}&priceOrder=${priceOrder}&${genreParam}&priceRange=${priceRange}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [setLoading, search, priceOrder, genres, priceRange]);

  const toggleGenre = (g) => {
    setGenres((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  };

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
  const priceRangeFilter = [
    "Free",
    "$0 - $20",
    "$21 - $40",
    "$41 - $60",
    "$61 and Higher",
  ];

  //   const toggleGenre = (g) => {
  //   setGenres((prev) => {
  //     const newGenres = prev.includes(g)
  //       ? prev.filter((x) => x !== g)
  //       : [...prev, g];

  //     // Scroll to top only if something changed
  //     if (!arraysEqual(prev, newGenres)) {
  //       window.scrollTo({ top: 0, behavior: "smooth" }); // 🔼 scroll up smoothly
  //     }

  //     return newGenres;
  //   });
  // };

  return (
    <div className="w-5/6 mx-auto my-12 flex justify-between items-start ">
      {/* Side Filters */}
      <div className="w-1/6 space-y-10 sticky top-0 ">
        <div>
          <h4 className="text-2xl mb-4 tracking-wide">GAMES</h4>
          <p className="text-xl pl-4">
            {games.length} <span className="text-base">results</span>
          </p>
        </div>

        {/* Genre */}
        <div>
          <h4 className="text-2xl mb-4 tracking-wide">GENRE</h4>
          <div className="space-y-3">
            {genreFilter.map((btn) => {
              const selected = genres.includes(btn);
              return (
                <button
                  onClick={() => toggleGenre(btn)}
                  key={btn}
                  className={`w-full flex justify-between items-center py-3 px-4 rounded transition-colors duration-200 cursor-pointer ${
                    selected ? "bg-[#45F882]" : "bg-transparent hover:bg-white"
                  }`}
                >
                  {btn}
                  {selected && <GiCrossedSwords />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-2xl mb-4 tracking-wide">PRICE</h4>
          <div className="">
            {priceRangeFilter.map((range) => (
              <button
                onClick={() =>
                  setPriceRange((prev) => (prev === range ? "" : range))
                }
                key={range}
                className={`w-full py-3 px-4 text-left border-b border-b-gray-300 hover:border-b-white cursor-pointer ${
                  priceRange === range
                    ? "text-[#45F882] border-b-[#45F882]"
                    : ""
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/*Search and Games */}
      <div className="w-4/5 space-y-10">
        {/* Search */}
        <div className="flex justify-between items-center gap-20">
          <div className="w-full py-2 px-6 flex items-center gap-2 bg-white rounded-full font-outfit">
            <LuSearch className="text-2xl" />
            <input
              onKeyUp={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="search games"
              className="w-full p-2 text-lg border-none outline-none text-blue200"
            />
          </div>

          {/* Price Order Sort */}
          <div className="w-auto pr-5 flex items-center gap-3 relative">
            <h5 className="w-auto text-lg whitespace-nowrap">Sort By :</h5>
            <select
              onChange={(e) => setPriceOrder(e.target.value)}
              className=" bg-white text-blue-500 py-2 px-8 appearance-none rounded focus:outline-none"
              defaultValue=""
            >
              <option value="">Default</option>
              <option value="low to high">Low to high</option>
              <option value="high to low">High to low</option>
            </select>
            <IoIosArrowDown className="absolute right-7 top-[55%] transform -translate-y-1/2 pointer-events-none text-blue-500" />
          </div>
        </div>

        {/* Games */}
        {loading ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        ) : games.length === 0 ? (
          <div className="min-h-[300px] flex items-center justify-center">
            <p className="text-xl text-gray-500 font-semibold">
              No games found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:4 gap-6 md:gap-10 lg:gap-12 justify-center">
            {games.map((game) => (
              <GameCard1 key={game._id} game={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGames;
