import { useEffect, useState } from "react";
import GameCard1 from "../../../components/GameCards/GameCard1";

const FeaturedGames = () => {
  const [categoryGames, setCategoryGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category-games")
      .then((res) => res.json())
      .then((data) => setCategoryGames(data));
  }, []);

  return (
    <div className="w-5/6 mx-auto my-32">
      <h2 className="text-[#282828] font-extrabold text-4xl text-center mb-16">
        EXPLORE <span className="text-[#FFA725]">MORE GAMES</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {categoryGames.map((game) => (
          <GameCard1 key={game._id} game={game}></GameCard1>
        ))}
      </div>

      <div className="text-center">
        <button className=" mt-14 px-10 py-4 bg-[#FFA725] text-gray-700 rounded-3xl hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
          Browse All Games
        </button>
      </div>
    </div>
  );
};

export default FeaturedGames;
