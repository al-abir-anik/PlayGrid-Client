import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation} from "swiper/modules";
import GameCard1 from "../../components/Cards/GameCard1";

const TopNewReleases = () => {
  const [categoryGames, setCategoryGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category-games")
      .then((res) => res.json())
      .then((data) => setCategoryGames(data));
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        loop
        slidesPerView={6}
        spaceBetween={30}
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
    </>
  );
};

export default TopNewReleases;
