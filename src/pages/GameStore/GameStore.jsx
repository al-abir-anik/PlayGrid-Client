import { useLoaderData } from "react-router";
import StoreSlider from "./StoreSlider/StoreSlider";

const GameStore = () => {
  const upcomingGames = useLoaderData();

  return (
    <div className="">
      {/* Coming Soon */}
      <div className="w-3/4  mx-auto py-8 space-y-6">
        <h2 className="  text-4xl font-medium heading-font ">
          Popular Upcoming Releases
        </h2>
        <hr className="opacity-10" />
        <StoreSlider upcomingGames={upcomingGames}></StoreSlider>
      </div>
    </div>
  );
};

export default GameStore;
