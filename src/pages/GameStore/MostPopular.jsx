import { useEffect, useState } from "react";
import GameCard1 from "../../components/Cards/GameCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MostPopular = () => {
  const [mostPopularGames, setMostPopularGames] = useState([]);

  useEffect(() => {
    fetch("https://playgrid-server.vercel.app/most-popular-games")
      .then((res) => res.json())
      .then((data) => setMostPopularGames(data));
  }, []);

  return (
    <div className="space-y-10">
      <Swiper
        key={mostPopularGames.length}
        modules={[Autoplay, Navigation]}
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
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".mp-next",
          prevEl: ".mp-prev",
        }}
        className="mySwiper"
      >
        {mostPopularGames.map((game) => (
          <SwiperSlide key={game._id}>
            <GameCard1 game={game}></GameCard1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostPopular;
