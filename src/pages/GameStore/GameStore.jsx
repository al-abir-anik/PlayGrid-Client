import { Link, useLoaderData } from "react-router";
import UpcomingGames from "./UpcomingGames";
import MostPopular from "./MostPopular";
import TopNewReleases from "./TopNewReleases";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import ExploreSomethingNew from "./ExploreSomethingNew";
import PopularGenres from "./PopularGenres";
import FeaturedStories from "./FeaturedStories";

const GameStore = () => {
  const upcomingGames = useLoaderData();

  return (
    <div className="w-full py-12 min-h-screen bg-bg2">
      <div className="w-4/5 mx-auto font-barlow space-y-16">
      
        {/* 0.Popular Genres */}
        <div className="space-y-6 relative">
          <h2 className="text-2xl font-bold text-white uppercase">
            Popular Genres
          </h2>
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
          <h2 className="text-2xl font-bold text-white uppercase">
            Upcoming Releases
          </h2>

          <UpcomingGames upcomingGames={upcomingGames} />
        </div>

        {/* 2.Most Popular Games */}
        <div className="space-y-6 relative">
          <h2 className="text-2xl font-bold text-white uppercase">
            Most Popular
          </h2>

          <MostPopular />
        </div>

        {/* 3.Top New Releases */}
        <div className="space-y-6 relative">
          <h2 className="text-2xl font-bold text-white uppercase">
            Top New Releases
          </h2>
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
          <h2 className="text-2xl font-bold text-white uppercase">
            Featured Stories
          </h2>
          <FeaturedStories />
        </div>

        {/* 5.Explore something New */}
        <div className="space-y-6 relative">
          <h2 className="text-2xl font-bold text-white uppercase">
            Explore Something New
          </h2>
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
    </div>
  );
};

export default GameStore;
