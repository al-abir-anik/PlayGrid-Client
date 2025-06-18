import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-blue200 pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue50 opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                v<b>a</b>lora<b>n</b>t
              </>
            }
            description="The game of games app transforming moments across Web2 & Web3 titles into rewards"
          />
        </div>
        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  gt<b>a</b> 5
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>

          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  wil<b>d</b> rift
                </>
              }
              description="Team up with friends and test your skills in 5v5 MOBA combat."
            />
          </div>

          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  p<b>u</b>bg
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </div>

          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-5.mp4"
              title={
                <>
                  r<b>o</b>cket leag<b>u</b>e
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </div>

          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
