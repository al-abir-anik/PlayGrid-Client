import Banner from "../Home-sections/HeroBanner/Banner";
import FeaturedGames from "../Home-sections/FeaturedGames";
import LatestNews from "../Home-sections/LatestNews";
import MostPopular from "../Home-sections/MostPopular/MostPopular";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="">
        <FeaturedGames></FeaturedGames>
      </section>

      <section>
        <MostPopular></MostPopular>
      </section>

      <section className="w-full h-[40rem] bg-cover bg-no-repeat bg-[url('/images/valorant-bg.avif')]"></section>

      <section>
        <LatestNews></LatestNews>
      </section>
    </div>
  );
};

export default Home;
