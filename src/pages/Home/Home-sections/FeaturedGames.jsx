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
    <section className="w-2/3 mx-auto my-32">
      <h2 className="text-[#282828] font-extrabold text-4xl text-center mb-16">
        EXPLORE <span className="text-[#FFA725]">MORE GAMES</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categoryGames.map((game) => (
          <GameCard1 key={game._id} game={game}></GameCard1>
        ))}
      </div>

      <button className="text-2xl my-5 p-3 rounded-2xl bg-amber-300">
        View All Games
      </button>
    </section>
  );
};

export default FeaturedGames;
