import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router";

const BentoCard = ({ gameId, src, title, description }) => {
  return (
    <Link to={`/game/${gameId}`} className="relative size-full">
      <video
        src={src}
        loop
        muted
        playsInline
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => {
          e.currentTarget.pause();
          e.currentTarget.currentTime = 0;
        }}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white50 pointer-events-none">
        <div>
          <h1 className="bento-title special-font hover:text-primary">
            {title}
          </h1>
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const Features = () => {
  return (
    <section className="bg-black500 pb-52 text-white50">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg">Into the Metagame Layer</p>
          <p className="max-w-md font-circular-web text-lg opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        {/* Fall guyz */}
        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh] xl:h-[75vh]">
          <BentoCard
            gameId="688385fa0cd22b41dfaa17c2"
            src="https://res.cloudinary.com/dwka0ok0n/video/upload/v1753448638/hero-1_wmekwi.mp4"
            title={
              <>
                f<b>a</b>ll g<b>u</b>yz
              </>
            }
            description="The game of games app transforming moments across Web2 & Web3 titles into rewards"
          />
        </div>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          {/* gta 5 */}
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              gameId="68867ad60cd22b41dfaa1989"
              src="https://res.cloudinary.com/dwka0ok0n/video/upload/v1755236747/feature-2_vteaod.mp4"
              title={
                <>
                  ap<b>e</b>x leg<b>e</b>nd
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>

          {/* valorant */}
          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              gameId="6884d54c0cd22b41dfaa188f"
              src="https://res.cloudinary.com/dwka0ok0n/video/upload/v1753448386/feature-1_mizmsy.mp4"
              title={
                <>
                  v<b>a</b>lora<b>n</b>t
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </div>
          {/* pubg */}
          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              gameId="6886675b0cd22b41dfaa1967"
              src="https://res.cloudinary.com/dwka0ok0n/video/upload/v1753289717/feature-4_yptcjv.mp4"
              title={
                <>
                  p<b>u</b>bg
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </div>
          {/* wild rift */}
          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              gameId="689eba88211e3db3ac17d1cc"
              src="https://res.cloudinary.com/dwka0ok0n/video/upload/v1753448383/feature-3_a6wqp0.mp4"
              title={
                <>
                  le<b>a</b>gue of leg<b>e</b>nd
                </>
              }
              description="Team up with friends and test your skills in 5v5 MOBA combat."
            />
          </div>

          <Link to={"/store"} className="bento-tilt_2 ">
            <div className="group p-5 flex size-full flex-col justify-between text-black500 bg-primary hover:bg-primary/90 duration-300 ease-in-out cursor-pointer">
              <h1 className="bento-title special-font max-w-64">
                expl<b>o</b>re m<b>o</b>re g<b>a</b>mes.
              </h1>

              <TiLocationArrow className="m-10 scale-[5] self-end group-hover:scale-[7] group-hover:rotate-12 transition-transform duration-500" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
