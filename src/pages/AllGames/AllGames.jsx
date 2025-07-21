import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import GameCard1 from "../../components/Cards/GameCard1";
import { useParams } from "react-router";
import { genres } from "../../assets/assets";
import { GiCrossedSwords } from "react-icons/gi";
import Filter from "../../components/Filter";

const AllGames = () => {
  const { search, fetchLoading, setFetchLoading } = useAppContext();
  const { genre } = useParams();
  const [games, setGames] = useState([]);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [openFilters, setOpenFilters] = useState({
    genre: false,
    price: false,
  });

  const toggleFilters = (section) => {
    setOpenFilters((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    // const genreParam = genres.length > 0 ? `genre=${genres.join(",")}` : "";
    fetch(`http://localhost:5000/all-games?search=${search}&genre=${genre}`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setFetchLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setFetchLoading(false);
      });
  }, [setFetchLoading, search, genre]);

  return (
    <div className="w-5/6 mx-auto my-16 font-barlow text-white">
      <div className="flex items-baseline mb-14">
        <div className="flex flex-col items-end w-max">
          <h2 className="text-2xl md:text-4xl font-bold uppercase flex">
            {genre ? genre + " " + "games" : "All Games"}
          </h2>
          <span className="w-20 h-0.5 bg-blue300 rounded-full"></span>
        </div>
        <p className="pl-5">
          ( {games.length} <span>results</span> )
        </p>
      </div>

      <div className="flex justify-between">
        {/* Games */}
        {fetchLoading ? (
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        ) : games.length === 0 ? (
          <div className="w-full min-h-[50vh] flex items-center justify-center">
            <p className="text-xl text-gray-500 font-semibold">
              No games found
            </p>
          </div>
        ) : (
          <div className="w-5/6 h-fit bg-black grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-6">
            {games.map((game) => (
              <GameCard1 key={game._id} game={game} />
            ))}
          </div>
        )}

        {/* Side Filters */}
        {/* <div className="w-1/7 space-y-3 sticky top-0">
          <Filter
            title="Genre"
            isOpen={openFilters.genre}
            toggleOpen={() => toggleFilters("genre")}
          >
            <ul>
              {genres.map((genre) => {
                const selected = genres.includes(genre);
                return (
                  <li
                    key={genre}
                    className={`flex justify-between items-center py-4 border-b border-gray-400/20 cursor-pointer ${
                      selected
                        ? "bg-[#45F882]"
                        : "bg-transparent hover:bg-white"
                    }`}
                  >
                    {genre}
                    {selected && <GiCrossedSwords />}
                  </li>
                );
              })}
            </ul>
          </Filter>

          
        </div> */}
      </div>
    </div>
  );
};

export default AllGames;
