import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle from "../../../components/AnimatedTitle";
import Button from "../../../components/Button";

const JoinApp = () => {
  const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} alt="playgridApp-poster" className="w-full h-auto rounded-xl"/>
    </div>
  );
  return (
    <div id="app-poster" className="relative my-20 lg:my-40 min-h-96 w-11/12 mx-auto">
      <div className="relative rounded-lg bg-black pt-14 lg:pt-24 pb-18 lg:pb-32 text-white50 lg:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden lg:block lg:left-40 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1 md:scale-125"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40 md:scale-150"
            src="img/contact-2.webp"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          {/* <p className="mb-5 font-general text-xs uppercase">Join PlayGrid</p> */}
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="md:!text-8xl font-zentry !text-5xl !leading-[0.9]"
          />

          <Button
            id="watch-trailer"
            title="Join PlayGrid"
            // leftIcon={<TiLocationArrow className="text-lg" />}
            containerClass="bg-yellow300 text-black500 mt-10"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute -top-40 left-20 w-60 sm:top-1/2 lg:left-auto md:right-4 xl:right-24 lg:top-0 lg:w-80">
        <ImageClipBox
          clipClass="absolute lg:scale-150 2xl:scale-200"
          src="img/swordman-partial.webp"
        />
        <ImageClipBox
          clipClass="swordman-clip-path lg:scale-150 2xl:scale-200"
          src="img/swordman.webp"
        />
      </div>
    </div>
  );
};

export default JoinApp;
