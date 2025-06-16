import Banner from "./Home-sections/HeroBanner/Banner";
import FeaturedGames from "./Home-sections/FeaturedGames";
import LatestNews from "./Home-sections/LatestNews";
import MostPopular from "./Home-sections/MostPopular";
import Hero from "./Home-sections/HeroBanner/Hero";
import About from "./Home-sections/About/About";

const Home = () => {
  return (
    <div>
      <div inclassName="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About />
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Home;
