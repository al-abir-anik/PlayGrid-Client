import { Link, useLoaderData } from "react-router";
import UpcomingGames from "./UpcomingGames";
import MostPopular from "./MostPopular";
import TopNewReleases from "./TopNewReleases";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import DiscoverSomethingNew from "./DiscoverSomethingNew";

const GameStore = () => {
  const upcomingGames = useLoaderData();

  return (
    <div className="w-full pb-20 min-h-screen bg-[url(/img/bg.jpeg)] bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="w-4/5 mx-auto">
        {/* bg-[url(/img/bg.jpeg)] */}
        {/* <div>
        <video
          src="videos/store-hero.webm"
          loop
          muted
          autoPlay
          className=" object-cover object-center"
        />
      </div> */}

        {/* 1.Upcoming Games */}
        <div className="py-8 space-y-6">
          <h2 className="  text-4xl font-medium heading-font">
            Upcoming Releases
          </h2>
          <hr className="opacity-10" />
          <UpcomingGames upcomingGames={upcomingGames} />
        </div>

        {/* 2.Most Popular Games */}
        <div className="py-8 space-y-6 relative">
          <h2 className="text-4xl font-medium heading-font">Most Popular</h2>
          {/* Custom Prev Button */}
          <button className="custom-prev absolute top-8 right-16 z-10 gaming-arrow">
            <TbArrowBadgeLeftFilled className="text-lg" />
          </button>
          <button className="custom-next absolute top-8 right-2 z-10 gaming-arrow">
            <TbArrowBadgeRightFilled className="text-lg" />
          </button>

          <MostPopular />
        </div>

        {/* 3.Top New Releases */}
        <div className="py-8 space-y-6 relative">
          <h2 className="text-4xl font-medium heading-font">
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

        {/* 4.Discover something New */}
        <div className="py-8 space-y-6 relative">
          <h2 className="text-4xl font-medium heading-font ">
            Discover Something New
          </h2>
          {/* Custom Prev Button */}
          <button className="custom-prev absolute top-8 right-16 z-10 gaming-arrow">
            <TbArrowBadgeLeftFilled className="text-lg" />
          </button>
          <button className="custom-next absolute top-8 right-2 z-10 gaming-arrow">
            <TbArrowBadgeRightFilled className="text-lg" />
          </button>

          <DiscoverSomethingNew />
        </div>
      </div>
    </div>
  );
};

export default GameStore;
