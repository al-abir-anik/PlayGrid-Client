import { FaDesktop, FaTags } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "../HeroBanner/banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/rGx7kwgF/wp12988880-call-of-duty-modern-warfare-iii-gaming-poster-wallpapers.jpg",
      title: "Modern Warfare III",
      description:
        "Call of Duty: Modern Warfare III is a 2023 first-person shooter game developed by Sledgehammer Games and published by Activision. It is the twentieth installment of the Call of Duty series and is the third entry in the rebooted Modern Warfare sub-series, following Call of Duty: Modern Warfare II.",
      platform: "PLAYSTATION 4, XBOX, PC",
      category: "FIRST PERSON SHOOTER",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/hR00yMbW/wp6072800-gaming-poster-wallpapers.jpg",
      title: "Assassin's Creed",
      description:
        "London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.",
      platform: "PLAYSTATION 5, XBOX",
      category: "ACTION, ADVENTURE",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/YTjPS2GN/wp9129545-playstation-4-4k-wallpapers.jpg",
      title: "GOD OF WAR",
      description:
        "God of War is an action-adventure game franchise created by David Jaffe and developed by Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 video game console and has become a flagship series for PlayStation, consisting of nine installments across multiple platforms.",
      platform: "PLAYSTATION 2, PC",
      category: "ROLEPLAY, ADVENTURE",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="bg-black/30 w-full h-full">
                <div className="h-full text-center flex flex-col justify-center items-center gap-10">
                  <div className="flex gap-14 text-sm font-semibold">
                    <p className="flex items-center gap-2">
                      <FaDesktop className="text-lg text-[#45F882]" />{" "}
                      {slide.platform}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaTags className="text-lg text-[#45F882]" />{" "}
                      {slide.category}
                    </p>
                  </div>
                  <h2 className="text-white text-8xl font-bold logo-font">
                    {slide.title}
                  </h2>
                  <p className="w-1/2  text-white text-lg mb-5">
                    {slide.description}
                  </p>
                  <div className="space-x-16">
                    <button className=" mt-10 px-10 py-3 border border-[#45F882] text-white rounded-3xl hover:bg-[#45F882] transition ease-in focus:scale-90 cursor-pointer ">
                      Buy Now
                    </button>
                    <button className=" mt-10 px-10 py-3 border-[#45F882] text-white rounded-3xl hover:bg-[#45F882] transition ease-in focus:scale-90 cursor-pointer ">
                      Game Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
