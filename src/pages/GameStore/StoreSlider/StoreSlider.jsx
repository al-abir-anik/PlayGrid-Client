import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import UpcomingGameCard from "../../../components/Cards/UpcomingGameCard";

const StoreSlider = ({ upcomingGames }) => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {upcomingGames.map((g) => (
          <SwiperSlide key={g._id} className="!w-3/4">
            <UpcomingGameCard key={g._id} upcomingGame={g}></UpcomingGameCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoreSlider;
