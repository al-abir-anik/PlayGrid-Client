import Hero from "./Home-sections/Hero";
import Features from "./Home-sections/Features";
import LatestNews from "./Home-sections/LatestNews";
import JoinApp from "./Home-sections/JoinApp";
import About from "./Home-sections/About";

const Home = () => {
  return (
    <div className="relative min-h-screen w-screen">
      <Hero />
      <About />
      <Features />
      <LatestNews />
      <JoinApp />
    </div>
  );
};

export default Home;
