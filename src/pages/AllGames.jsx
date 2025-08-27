import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import GameCard1 from "../components/Cards/GameCard1";
import { features, genres, platform, priceRange } from "../assets/assets";
import Filters from "../components/Filters";
import { LuCheck } from "react-icons/lu";

const AllGames = () => {
  const { search, fetchLoading, setFetchLoading } = useAppContext();
  const { genre } = useParams();
  const [games, setGames] = useState([]);

  const [openFilters, setOpenFilters] = useState({
    genre: false,
    price: false,
  });
  const toggleFilters = (section) => {
    setOpenFilters((prev) => {
      const isAlreadyOpen = prev[section];
      return {
        genre: false,
        feature: false,
        platform: false,
        price: false,
        [section]: !isAlreadyOpen,
      };
    });
  };

  const [filters, setFilters] = useState({
    genre: [],
    feature: [],
    platform: [],
    price: [],
  });

  const handleFilterClick = (filterType, value) => {
    setFilters((prev) => {
      const alreadySelected = prev[filterType].includes(value);

      return {
        ...prev,
        [filterType]: alreadySelected
          ? prev[filterType].filter((v) => v !== value)
          : [...prev[filterType], value],
      };
    });
  };

  const handleResetFilters = () => {
    setFilters({
      genre: [],
      feature: [],
      platform: [],
      price: [],
    });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (search) queryParams.append("search", search);

    Object.entries(filters).forEach(([key, values]) => {
      if (values.length > 0) {
        queryParams.append(key, values.join(","));
      }
    });

    setFetchLoading(true);
    fetch(`https://playgrid-server.vercel.app/all-games?${queryParams.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setFetchLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setFetchLoading(false);
      });
  }, [search, filters, setFetchLoading]);

  return (
    <div className="w-[88%] lg:w-5/6 mx-auto my-6 lg:my-14 text-white50">
      <div className="flex items-baseline mb-8 md:mb-14">
        <div className="flex flex-col items-end w-max">
          <h2 className="text-xl sm:text-2xl xl:text-3xl flex font-bold uppercase font-general">
            {genre ? genre + " " + "games" : "All Games"}
          </h2>
          <span className="w-20 h-0.5 bg-primary rounded-full"></span>
        </div>
        <p className="text-sm xl:text-base pl-5">
          ({games.length} <span>results</span>)
        </p>
      </div>

      <div className="flex justify-between items-start gap-10">
        {/* Games */}
        {fetchLoading ? (
          <div className="w-full lg:w-5/6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 66 66"
              className="spinner w-[210px] h-[140px] relative"
            >
              <circle
                stroke="url(#gradient)"
                r="20"
                cy="33"
                cx="33"
                strokeWidth="1"
                fill="transparent"
                className="path"
              ></circle>
              <linearGradient id="gradient">
                <stop stopOpacity="1" stopColor="#4fb7dd" offset="0%"></stop>
                {/* fe0000 */}
                <stop stopOpacity="0" stopColor="#af3dff" offset="100%"></stop>
              </linearGradient>
            </svg>
          </div>
        ) : games.length === 0 ? (
          <div className="w-full lg:w-5/7 h-[30vh] flex items-center justify-center">
            <p className="text-xl text-black100 font-medium">No games found</p>
          </div>
        ) : (
          <div className="w-full md:w-5/6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 space-y-4">
            {games.map((game) => (
              <GameCard1 key={game._id} game={game} />
            ))}
          </div>
        )}

        {/* Side Filters */}
        <div className="md:w-1/5 lg:w-1/6 xl:w-1/7 hidden md:block space-y-3 sticky top-20">
          <div className="flex items-center justify-between">
            <div className="pb-3 flex flex-col items-end w-max">
              <p className="text-xl font-medium tracking-wide">Filters</p>
              <span className="w-8 h-0.5 bg-primary rounded-full"></span>
            </div>
            <button
              onClick={handleResetFilters}
              className="pb-1 text-sm text-primary underline cursor-pointer"
            >
              Reset
            </button>
          </div>

          {/* genre*/}
          <Filters
            title="Genre"
            isOpen={openFilters.genre}
            toggleOpen={() => toggleFilters("genre")}
          >
            <ul>
              {genres.map((g) => {
                const selected = filters.genre.includes(g);
                return (
                  <li
                    onClick={() => handleFilterClick("genre", g)}
                    key={g}
                    className={`py-3 pl-2 flex justify-between items-center text-offWhite50 border-b border-black500 hover:bg-black500 cursor-pointer ${
                      selected
                        ? "text-primary"
                        : "bg-transparent hover:text-white50"
                    }`}
                  >
                    {g}
                    {selected && <LuCheck />}
                  </li>
                );
              })}
            </ul>
          </Filters>

          {/* features */}
          <Filters
            title="Features"
            isOpen={openFilters.feature}
            toggleOpen={() => toggleFilters("feature")}
          >
            <ul>
              {features.map((f) => {
                const selected = filters.feature.includes(f);
                return (
                  <li
                    onClick={() => handleFilterClick("feature", f)}
                    key={f}
                    className={`py-3 pl-2 flex justify-between items-center text-offWhite50 border-b border-black500 hover:bg-black500 cursor-pointer ${
                      selected
                        ? "text-primary"
                        : "bg-transparent hover:text-white50"
                    }`}
                  >
                    {f}
                    {selected && <LuCheck />}
                  </li>
                );
              })}
            </ul>
          </Filters>

          {/* platform */}
          <Filters
            title="Platform"
            isOpen={openFilters.platform}
            toggleOpen={() => toggleFilters("platform")}
          >
            <ul>
              {platform.map((p) => {
                const selected = filters.platform.includes(p);
                return (
                  <li
                    onClick={() => handleFilterClick("platform", p)}
                    key={p}
                    className={`py-3 pl-2 flex justify-between items-center text-offWhite50 border-b border-black500 hover:bg-black500 cursor-pointer ${
                      selected
                        ? "text-primary"
                        : "bg-transparent hover:text-white50"
                    }`}
                  >
                    {p}
                    {selected && <LuCheck />}
                  </li>
                );
              })}
            </ul>
          </Filters>

          {/* price range */}
          <Filters
            title="Price Range"
            isOpen={openFilters.price}
            toggleOpen={() => toggleFilters("price")}
          >
            <ul>
              {priceRange.map((p) => {
                const selected = filters.price.includes(p);
                return (
                  <li
                    onClick={() => handleFilterClick("price", p)}
                    key={p}
                    className={`py-3 pl-2 flex justify-between items-center text-offWhite50 border-b border-black500 hover:bg-black500 cursor-pointer ${
                      selected
                        ? "text-primary"
                        : "bg-transparent hover:text-white50"
                    }`}
                  >
                    {p}
                    {selected && <LuCheck />}
                  </li>
                );
              })}
            </ul>
          </Filters>
        </div>
      </div>
    </div>
  );
};

export default AllGames;
