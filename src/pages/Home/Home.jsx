import Banner from "./Home-sections/HeroBanner/Banner";
import FeaturedGames from "./Home-sections/FeaturedGames";
import MostPopular from "./Home-sections/MostPopular";
import Hero from "./Home-sections/HeroBanner/Hero";
import Features from "./Home-sections/Features/Features";
import LatestNews from "./Home-sections/LatestNews";
import JoinApp from "./Home-sections/JoinApp";
import About from "./Home-sections/About";

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen w-screen">
        <Hero />
        <About />
        <Features />
        <LatestNews />
        <JoinApp />
      </div>

      <div>
        {/* <section>
          <Banner></Banner>
        </section> */}
        {/* <section className="">
          <FeaturedGames></FeaturedGames>
        </section> */}
        {/* 
        <section>
          <MostPopular></MostPopular>
        </section> */}
      </div>
    </div>
  );
};

export default Home;
