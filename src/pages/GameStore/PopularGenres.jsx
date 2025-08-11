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
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 25,
          },
        }}
        className="mySwiper"
      >
        {popularGenres.map((genre, index) => (
          <SwiperSlide
            key={index}
            className="group md:py-4 md:px-2 bg-black500 rounded-xl cursor-pointer"
            onClick={() => {
              navigate(`/all-games/${genre.path}`);
              scrollTo(0, 0);
            }}
          >
            <div className="relative pb-[90%] rounded overflow-hidden">
              <img
                src={genre.image}
                alt={genre.text}
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <p className="pb-4 md:pb-0 pt-4 lg:font-medium text-sm lg:text-base text-white50 text-center">
              {genre.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularGenres;
