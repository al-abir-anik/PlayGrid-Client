import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { popularGenres } from "../../assets/assets";

const PopularGenres = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper"
      >
        {popularGenres.map((genre, index) => (
          <SwiperSlide
            key={index}
            className="group py-4 px-2 bg-[#121a23] rounded-xl cursor-pointer"
            onClick={() => {
              navigate(`/all-games/${genre.path}`);
              scrollTo(0, 0);
            }}
          >
            <div className="relative pb-[90%] rounded overflow-hidden">
              <img
                src={genre.image}
                // src="/public/img/contact-1.webp"
                alt={genre.text}
                className="absolute top-0 left-0 w-full h-full  object-cover group-hover:scale-110 transition"
              />
            </div>
            <p className="mt-4 font-semibold text-xl text-white50 text-center">
              {genre.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularGenres;
