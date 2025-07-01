import { useEffect, useState } from "react";
import GameCard1 from "../../components/Cards/GameCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MostPopular = () => {
  const [categoryGames, setCategoryGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category-games")
      .then((res) => res.json())
      .then((data) => setCategoryGames(data));
  }, []);

  return (
    <div className="space-y-10">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={5}
        spaceBetween={24}
        loop
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
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
