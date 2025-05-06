import React from "react";
import Banner from "../Home-sections/Banner";
import FeaturedGames from "../Home-sections/FeaturedGames";
import LatestNews from "../Home-sections/LatestNews";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section>
        <FeaturedGames></FeaturedGames>
      </section>

      <section>
        <LatestNews></LatestNews>
      </section>
    </div>
  );
};

export default Home;
