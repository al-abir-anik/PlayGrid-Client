import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { TiLocationArrow } from "react-icons/ti";
import Button from "../../../components/Button";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: "https://wallpapercave.com/wp/wp12657125.jpg",
      title: "Grand theft auto v",
      description:
        "London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.",
      gameIcon:
        "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?resize=1&w=480&h=270&quality=medium",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755163841/pubg_htvf7k.jpg",
      title: "PUBG: battleground",
      description:
        "London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.",
      gameIcon:
        "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-logo-5xma7.png?resize=1&w=480&h=270&quality=medium",
    },
    {
      id: 3,
      img: "https://wallpapercave.com/wp/wp4705321.jpg",
      title: "GOD OF WAR",
      description:
        "God of War is an action-adventure game franchise created by David Jaffe and its become a flagship series for PlayStation, consisting of nine installments across multiple platforms.",
      gameIcon:
        "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-ic1-400x400-5819bbf696c5.png?resize=1&w=480&h=270&quality=medium",
    },
    {
      id: 4,
      img: "https://wallpapercave.com/wp/wp14481597.jpg",
      title: "Fifa 25",
      description:
        "Call of Duty: Modern Warfare III is the twentieth installment of the Call of Duty series and is the third entry in the rebooted Modern Warfare sub-series, following Call of Duty: Modern Warfare II.",
      category: "FIRST PERSON SHOOTER",
      gameIcon:
        "https://cdn2.unrealengine.com/egs-easportsfc25standardedition-eacanada-ic1-400x400-ebb6decd53c9.png?resize=1&w=480&h=270&quality=medium",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755165973/valhalla_cmayrg.jpg",
      title: "AC: valhalla",
      description:
        "London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.",
      gameIcon:
        "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fassassins-creed-valhalla%2Fhome%2FAC-KINGDOM-PREORDER_STANDARD-EDITION_EPIC_Game_Logo_whiteblue_1000x375-1000x375-baa332e9500ef71697f4a31924488fe309c4784d.png?resize=1&w=480&h=270&quality=medium",
    },
    {
      id: 6,
      img: "https://i.ibb.co/RkRqhP7C/wp9129545-playstation-4-4k-wallpapers.jpg",
      title: "GOD OF WAR",
      description:
        "God of War is an action-adventure game franchise created by David Jaffe and its become a flagship series for PlayStation, consisting of nine installments across multiple platforms.",
      gameIcon:
        "https://cdn2.unrealengine.com/egs-godofwar-santamonicastudio-ic1-400x400-5819bbf696c5.png?resize=1&w=480&h=270&quality=medium",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full relative h-screen select-none">
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute w-full h-full top-0 left-0 bg-cover bg-center transform scale-100 hero-zoom"
                style={{ backgroundImage: `url(${slide.img})` }}
              ></div>
              <div className="w-full h-full absolute top-0 left-0 bg-black/20"></div>

              {/* Content */}
              <div className="relative w-[88%] h-[88vh] mx-auto flex flex-col justify-center gap-4">
                <h2 className="w-1/2 special-font font-zentry hero-heading text-7xl md:text-9xl lg:text-[10rem] text-white50">
                  {slide.title}
                </h2>
                <p className="mb-5 text-lg md:w-96 font-robert-regular text-white50">
                  Enter the Metagame Layer, Unleash the Play Economy...
                </p>
                <Button
                  id="watch-details"
                  title="Game Details"
                  leftIcon={<TiLocationArrow className="text-lg" />}
                  containerClass="bg-yellow300 text-black500"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div id="yo" className="w-full absolute bottom-14">
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
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <img
                src={s.gameIcon}
                alt="game-icon"
                draggable="false"
                className={`w-48 h-32 mx-auto object-contain ${
                  i === activeIndex ? "scale-125" : "scale-80 opacity-60 mt-10"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="hero-prev hero-arrow left-50 group">
          <HiArrowLongLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
        </button>
        <button className="hero-next hero-arrow right-50 group">
          <HiArrowLongRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
