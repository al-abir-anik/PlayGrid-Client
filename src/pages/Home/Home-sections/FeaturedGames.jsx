import { useEffect, useState } from "react";
import GameCard1 from "../../../components/Cards/GameCard1";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedGames = () => {
  const [categoryGames, setCategoryGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category-games")
      .then((res) => res.json())
      .then((data) => setCategoryGames(data));
  }, []);

  return (
    <div className="w-5/6 mx-auto my-32 space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[#282828] font-extrabold text-3xl">
          EXPLORE <span className="text-[#45F882]">MORE GAMES</span>
        </h2>
        <Link to={"/store"}>
          <button className="px-10 py-4 bg-[#45F882] text-gray-700 rounded-3xl hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
            Browse All Games
          </button>
        </Link>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={4}
        spaceBetween={24}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {
          categoryGames.map(game => <SwiperSlide >
            <GameCard1 key={game._id} game={game}></GameCard1>
          </SwiperSlide>)
        }





      </Swiper>

    </div>
  );
};

export default FeaturedGames;
