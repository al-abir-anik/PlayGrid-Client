import MostPopular from "./MostPopular";
import TopNewReleases from "./TopNewReleases";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import ExploreSomethingNew from "./ExploreSomethingNew";
import PopularGenres from "./PopularGenres";
import FeaturedStories from "./FeaturedStories";
import Button from "../../components/Button";

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

  return (
    <div className="w-4/5 mx-auto py-4 lg:py-12  space-y-12 lg:space-y-16 min-h-screen">
      {/* 0.Popular Genres */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Popular Genres</h2>
        {/* Custom Prev Button */}
        <button className="custom-prev absolute top-8 right-16 z-10 gaming-arrow">
          <TbArrowBadgeLeftFilled className="text-lg" />
        </button>
        <button className="custom-next absolute top-8 right-2 z-10 gaming-arrow">
          <TbArrowBadgeRightFilled className="text-lg" />
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
              <div className="flex flex-col justify-between flex-1">
                <div className="space-y-2">
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
                </div>
                <Button
                  id="prebook"
                  title="Add To Wishlist"
                  containerClass="!w-fit !py-2 !text-xs bg-yellow300 text-black500 mt-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.Most Popular Games */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Most Popular</h2>
        <MostPopular />
      </div>

      {/* 3.Top New Releases */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Top New Releases</h2>
        {/* Custom Prev Button */}
        <button className="custom-prev absolute top-8 right-16 z-10 gaming-arrow">
          <TbArrowBadgeLeftFilled className="text-lg" />
        </button>
        <button className="custom-next absolute top-8 right-2 z-10 gaming-arrow">
          <TbArrowBadgeRightFilled className="text-lg" />
        </button>

        <TopNewReleases />
      </div>

      {/* 4. featured stories */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Featured Stories</h2>
        <FeaturedStories />
      </div>

      {/* 5.Explore something New */}
      <div className="space-y-6 relative">
        <h2 className="store-heading">Explore Something New</h2>
        {/* Custom Prev Button */}
        <button className="custom-prev absolute top-8 right-16 z-10 gaming-arrow">
          <TbArrowBadgeLeftFilled className="text-lg" />
        </button>
        <button className="custom-next absolute top-8 right-2 z-10 gaming-arrow">
          <TbArrowBadgeRightFilled className="text-lg" />
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
