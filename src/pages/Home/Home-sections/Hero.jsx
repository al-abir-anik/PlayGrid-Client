import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "../../../components/Loader";
import Button from "../../../components/Button";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1,
          ease: "power1.inOut",
        });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 0.6,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  // useGSAP(() => {
  //   gsap.set("#video-frame", {
  //     clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
  //     borderRadius: "0 0 40% 10%",
  //   });
  //   gsap.from("#video-frame", {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     borderRadius: "0 0 0 0",
  //     ease: "power1.inOut",
  //     scrollTrigger: {
  //       trigger: "#video-frame",
  //       start: "center center",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //   });
  // });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen">
      {loading && <Loader />}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden bg-white75"
      >
        <div>
          <div className="mask-clip-path absolute bottom-20 right-10 z-50 size-64 cursor-pointer overflow-hidden">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-50 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 rounded-sm origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font font-zentry hero-heading top-40 left-20 text-7xl md:text-9xl lg:text-[12rem] absolute z-40 text-white75">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-10 top-60 z-50 size-40">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font font-zentry hero-heading text-7xl md:text-9xl lg:text-[12rem] text-white75">
              VALORA<b>N</b>T
            </h1>
            <p className="mb-5 text-lg md:w-96 font-robert-regular text-white100">
              Enter the Metagame Layer , Unleash the Play Economy enter the
              Metagame Layer
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow className="text-lg" />}
              containerClass="bg-yellow300 text-black200"
            />
          </div>
        </div>
      </div>
      {/* background text animation */}
      {/* <h1 className="special-font font-zentry hero-heading mt-24 top-60 left-20 text-7xl md:text-9xl lg:text-[12rem] absolute text-black">
        VALORA<b>N</b>T
      </h1> */}
    </div>
  );
};

export default Hero;
