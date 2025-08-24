import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const PopularGenres = () => {
  const navigate = useNavigate();

  const popularGenres = [
    {
      text: "Action Games",
      path: "action",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183260/action_zucuhf.webp",
    },
    {
      text: "Adventure Games",
      path: "adventure",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183255/adventure_kwkryc.webp",
    },
    // {
    //   text: "Action-Adventure Games",
    //   path: "action adventure",
    //   image: actionAdventure_image,
    // },
    {
      text: "Open World Games",
      path: "open world",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183255/open_world_k7ingh.webp",
    },
    {
      text: "Competitive Games",
      path: "competitive",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183255/competitive_dgbxgg.webp",
    },
    {
      text: "RPG Games",
      path: "rpg",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183256/rpg_oxdlg5.webp",
    },
    {
      text: "Horror Games",
      path: "horror",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183255/horror_rib0ry.webp",
    },
    {
      text: "Racing Games",
      path: "racing",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183256/racing_qytqoq.webp",
    },
    {
      text: "VR Games",
      path: "vr",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183259/vr_gmpwdr.webp",
    },
    {
      text: "Sports Games",
      path: "sports",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183258/sports_tnzegf.webp",
    },
    {
      text: "Shooter Games",
      path: "shooter",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183257/shooter_aegrw3.webp",
    },
    {
      text: "Fighting Games",
      path: "fighting",
      image:
        "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183255/fighting_wrg55f.webp",
    },
    {
      text: "Casual Games",
      path: "casual",
      image: "https://res.cloudinary.com/dwka0ok0n/image/upload/v1755183255/casual_fpbncl.webp",
    },
  ];

  return (
    <div className="space-y-10">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".pg-next",
          prevEl: ".pg-prev",
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
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
        className="mySwiper"
      >
        {popularGenres.map((genre, index) => (
          <SwiperSlide
            key={index}
            className="group md:py-4 md:px-4 bg-black500 rounded-xl cursor-pointer"
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
            <p className="pb-4 md:pb-0 pt-4 lg:font-medium text-sm lg:text-base text-white50 group-hover:text-yellow300 text-center">
              {genre.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularGenres;
