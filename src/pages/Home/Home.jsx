import Banner from "./Home-sections/HeroBanner/Banner";
import FeaturedGames from "./Home-sections/FeaturedGames";
import MostPopular from "./Home-sections/MostPopular";
import Hero from "./Home-sections/HeroBanner/Hero";
import About from "./Home-sections/About/About";
import Features from "./Home-sections/Features/Features";
import DownloadApp from "./Home-sections/DownloadApp";
import LatestNews from "./Home-sections/LatestNews";


const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen w-screen">
        <Hero />
        <About />
        <Features />
        <LatestNews />
        <DownloadApp />
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

        <section className="w-full h-[40rem] bg-cover bg-no-repeat bg-[url('/images/valorant-bg.avif')]"></section>
      </div>
    </div>
  );
};

export default Home;
