import { useState } from "react";
import { useNavigate } from "react-router";
import { heroSlides } from "../../../assets/assets";
import Button from "../../../components/Button";
import { TiLocationArrow } from "react-icons/ti";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full relative h-screen text-white50 select-none">
      <style>{`.swiper-slide .hero-zoom {
          transform: scale(1);
          transition: transform 4s ease-in;
        }
        .swiper-slide.swiper-slide-active .hero-zoom {
          transform: scale(1.03);
        }`}</style>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop={true}
        allowTouchMove={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute w-full h-full top-0 left-0 bg-cover bg-center transform scale-100 hero-zoom"
                style={{ backgroundImage: `url(${slide.img})` }}
              ></div>
              <div className="w-full h-full absolute top-0 left-0 bg-black/25"></div>

              {/* Content */}
              <div className="w-[88%] h-[88vh] mx-auto flex flex-col justify-center gap-8 relative">
                <h2 className="w-1/2 special-font font-zentry hero-heading text-7xl md:text-9xl lg:text-[9rem]">
                  {slide.title}
                </h2>
                <p className="w-1/3 mb-2 text-lg text-white hidden md:block">{slide.summary}</p>
                <Button
                  id="watch-details"
                  title="Game Details"
                  onClickFunc={() => navigate(`/game/${slide.id}`)}
                  leftIcon={<TiLocationArrow className="text-lg" />}
                  containerClass="bg-yellow300 text-black500"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Game Icon slide */}
      <div className="w-full absolute bottom-6 md:bottom-12">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          allowTouchMove={false}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-3/5"
        >
          {heroSlides.map((s, i) => (
            <SwiperSlide key={i}>
              <img
                src={s.gameIcon}
                alt="game-icon"
                draggable="false"
                className={`w-48 h-32 mx-auto object-contain ${
                  i === activeIndex ? "scale-125" : "scale-80 opacity-0 lg:opacity-60 mt-10"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="hero-prev hero-arrow left-10 md:left-50 group">
          <HiArrowLongLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
        </button>
        <button className="hero-next hero-arrow right-10 md:right-50 group">
          <HiArrowLongRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
