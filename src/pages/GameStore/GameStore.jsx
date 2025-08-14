import MostPopular from "./MostPopular";
import TopNewReleases from "./TopNewReleases";
import ExploreSomethingNew from "./ExploreSomethingNew";
import PopularGenres from "./PopularGenres";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const GameStore = () => {
  const upcomingGames = [
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
  ];

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
    <div className="w-4/5 mx-auto py-4 lg:py-12  space-y-12 lg:space-y-16 min-h-screen">
      {/* 0.Popular Genres */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Popular Genres</h2>
        <button className="pg-prev slider-arrow right-16">
          <LuArrowLeft />
        </button>
        <button className="pg-next slider-arrow right-2">
          <LuArrowRight />
        </button>
        <PopularGenres />
      </div>

      {/* 1.Upcoming Games */}
      <div className="space-y-6">
        <h2 className="store-heading">Upcoming Releases</h2>
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-12">
          {upcomingGames.map((game) => (
            <div
              key={game.name}
              className="text-white50 flex flex-col sm:flex-row gap-3 md:gap-5"
            >
              <div className="w-full  sm:w-[40%] relative aspect-[12/9] overflow-hidden">
                <img
                  src={game.image}
                  alt="game poster"
                  className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col flex-1 space-y-2">
                <p className="text-xl xl:text-2xl font-semibold tracking-wide">
                  {game.name}
                </p>
                <span className="flex items-center gap-4 text-sm font-medium text-offWhite50">
                  <p>Action</p>
                  <p>23/05</p>
                </span>
                <p className="w-full text-sm xl:text-base text-black100">
                  {game.summary}
                </p>
                <button className="w-fit px-3 py-2 mt-4 text-sm text-offWhite50 border border-yellow100 rounded-2xl">
                  Comming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.Most Popular */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Most Popular</h2>
        <button className="mp-prev slider-arrow right-16">
          <LuArrowLeft />
        </button>
        <button className="mp-next slider-arrow right-2">
          <LuArrowRight />
        </button>
        <MostPopular />
      </div>

      {/* 3.Top New Releases */}
      <div className="space-y-6 relative new-releases">
        <h2 className="store-heading">Top New Releases</h2>
        <button className="tnr-prev slider-arrow right-16">
          <LuArrowLeft />
        </button>
        <button className="tnr-next slider-arrow right-2">
          <LuArrowRight />
        </button>
        <TopNewReleases />
      </div>

      {/* 4. featured stories */}
      <div className="space-y-6">
        <h2 className="store-heading">Featured Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
          {games.map((game) => (
            <div key={game.name} className="text-white50 flex flex-col gap-3">
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
      </div>

      {/* 5.Explore something New */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Explore Something New</h2>
        <button className="esn-prev slider-arrow right-16">
          <LuArrowLeft />
        </button>
        <button className="esn-next slider-arrow right-2">
          <LuArrowRight />
        </button>
        <ExploreSomethingNew />
      </div>

      <div className="py-6">
        <hr className="border-gray-500" />
        <p className="mt-5 text-gray-400">
          * The lowest price offered on Play Grid Store in the last 30 days
          before discount.
        </p>
      </div>
    </div>
  );
};

export default GameStore;
