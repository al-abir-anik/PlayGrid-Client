import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
import 'swiper/css/free-mode';
import UpcomingGameCard from "../../../components/Cards/UpcomingGameCard";

const StoreSlider = ({ upcomingGames }) => {
  return (
    <div>
      <Swiper
        // effect={"coverflow"}
        fadeEffect={{ crossFade: false }}
        centeredSlides={false}
        slidesPerView={"auto"}
        spaceBetween={80} // 
        freeMode={true}
        freemodemomentumratio={0.1}
        freemodemomentumvelocityratio={0.1} 
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {upcomingGames.map((g) => (
          <SwiperSlide key={g._id} className="!w-3/5">
            <UpcomingGameCard key={g._id} upcomingGame={g}></UpcomingGameCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoreSlider;
