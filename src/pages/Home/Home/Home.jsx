import React from "react";
import Banner from "../Home-sections/Banner";
import FeaturedGames from "../Home-sections/FeaturedGames";
import LatestNews from "../Home-sections/LatestNews";

const Home = () => {
  return (
    <main>
      <Banner></Banner>

      <FeaturedGames></FeaturedGames>

      <LatestNews></LatestNews>

    </main>
  );
};

export default Home;
