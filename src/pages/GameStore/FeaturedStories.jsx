const FeaturedStories = () => {
  const games = [
    {
      name: "Among Us",
      summary:
        "Among Us is a multiplayer party game where players work together to complete tasks while one or more impostors attempt to sabotage and eliminate the crew.",
      image:
        "https://cdn2.unrealengine.com/egs-ready-or-not-breaker-1920x1080-8374d0567fac.jpg?resize=1&w=854&h=480&quality=medium",
      price: 34,
    },
    {
      name: "Grand Theft Auto V",
      summary:
        "GTA V is an open-world action-adventure game featuring three playable protagonists in a sprawling city. Players can engage in story missions, side activities, and satire.",
      image:
        "https://cdn2.unrealengine.com/egs-rimworld-odyssey-breaker-1920x1080-2348696632cd.jpg?resize=1&w=854&h=480&quality=medium",
      price: 18,
    },
    {
      name: "Valorant",
      summary:
        "Valorant is a competitive 5v5 tactical shooter developed by Riot Games. defenders to secure victory through objective-based rounds.",
      image:
        "https://cdn2.unrealengine.com/en-egs-honkai-star-rail-fate-collab-breaker-1920x1080-4e58e4e56ec9.jpg?resize=1&w=854&h=480&quality=medium",
      price: 58,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
      {games.map((game) => (
        <div className="text-white flex flex-col gap-3">
          <div className="relative pb-[60%] overflow-hidden">
            <img
              src={game.image}
              alt="game poster"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <p className="text-xl font-semibold">{game.name}</p>
          <p className="text-gray-300">{game.summary}</p>
          <p className="text-xl font-semibold">$ {game.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedStories;
