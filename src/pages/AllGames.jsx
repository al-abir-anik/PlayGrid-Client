import { useContext, useEffect, useState } from "react";
import { GiCrossedSwords } from "react-icons/gi";
import GameCard1 from "../components/Cards/GameCard1";
import AuthContext from "../auth/AuthContext";
import { useParams } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import { genreFilter, priceRangeFilter } from "../assets/assets";

const AllGames = () => {
  const { genre } = useParams();
  const { search } = useAppContext();
  const { loading, setLoading } = useContext(AuthContext);
  const [games, setGames] = useState([]);
  const [priceOrder, setPriceOrder] = useState("");
  const [genres, setGenres] = useState([]);
  const [priceRange, setPriceRange] = useState("");

  console.log(genre);

  useEffect(() => {
    const genreParam = genres.length > 0 ? `genre=${genres.join(",")}` : "";

    fetch(
      `http://localhost:5000/all-games?search=${search}&genre=${genre}&priceOrder=${priceOrder}&${genreParam}&priceRange=${priceRange}`
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
  }, [setLoading, search, genre, priceOrder, genres, priceRange]);

  const toggleGenre = (g) => {
    setGenres((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  };

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
    <div className="w-5/6 mx-auto my-16">
      <div className="flex items-baseline mb-14">
        <div className="flex flex-col items-end w-max">
          <h2 className="text-2xl md:text-3xl font-medium uppercase flex">
            {genre ? genre : "All Games"}
          </h2>
          <span className="w-20 h-0.5 bg-blue300 rounded-full"></span>
        </div>
        <p className="pl-5">
          ( {games.length} <span>results</span> )
        </p>
      </div>

      <div className="flex justify-between">
        {/* Games */}
        {loading ? (
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        ) : games.length === 0 ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <p className="text-xl text-gray-500 font-semibold">
              No games found
            </p>
          </div>
        ) : (
          <div className="w-5/6 h-fit bg-black grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
            {games.map((game) => (
              <GameCard1 key={game._id} game={game} />
            ))}
          </div>
        )}

        {/* Side Filters */}
        <div className="w-1/7 space-y-10 sticky top-0 bg-amber-700">
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
      </div>
    </div>
  );
};

export default AllGames;
