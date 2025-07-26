import { useEffect, useState } from "react";
import GameCard1 from "../../components/Cards/GameCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MostPopular = () => {
  const [categoryGames, setCategoryGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category-games")
      .then((res) => res.json())
      .then((data) => setCategoryGames(data));
  }, []);

  console.log(categoryGames);
  

  return (
    <div className="space-y-10">
      <Swiper
        modules={[ Autoplay, Navigation]}
        loop
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper"
      >
        {categoryGames.map((game) => (
          <SwiperSlide>
            <GameCard1 key={game._id} game={game}></GameCard1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostPopular;
