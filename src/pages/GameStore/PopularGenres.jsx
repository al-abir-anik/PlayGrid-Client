import { genres } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router";

const PopularGenres = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        slidesPerView={5}
        spaceBetween={30}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper"
      >
        {genres.map((genre, index) => (
          <SwiperSlide
            key={index}
            className="group py-6 px-5 bg-[#202024] rounded-xl cursor-pointer"
            // style={{ backgroundColor: genre.bgColor }}
            onClick={() => {
              navigate(`/all-games/${genre.path}`);
              scrollTo(0, 0);
            }}
          >
            <div className="relative pb-[60%] rounded overflow-hidden">
              <img
                // src={category.image}
                src="/public/img/contact-1.webp"
                alt={genre.text}
                className="absolute top-0 left-0 w-full h-full  object-cover group-hover:scale-110 transition"
              />
            </div>
            <p className="mt-5 font-medium text-white text-center">
              {genre.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularGenres;
