import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import GameCard1 from "../../components/Cards/GameCard1";

const ExploreSomethingNew = () => {
  const [exploreNewGames, setExploreNewGames] = useState([]);

  useEffect(() => {
    fetch("https://playgrid-server.vercel.app/explore-new-games")
      .then((res) => res.json())
      .then((data) => setExploreNewGames(data));
  }, []);

  return (
    <>
      <Swiper
        key={exploreNewGames.length}
        modules={[Navigation]}
        loop
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".esn-next",
          prevEl: ".esn-prev",
        }}
        className="mySwiper"
      >
        {exploreNewGames.map((game) => (
          <SwiperSlide key={game._id}>
            <GameCard1 game={game}></GameCard1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExploreSomethingNew;
