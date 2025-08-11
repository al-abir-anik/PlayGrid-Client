import { useEffect, useState } from "react";
import { Link } from "react-router";

const RelatedProducts = ({ gameId }) => {
  const [stopScroll, setStopScroll] = useState(false);
  const [relatedGames, setRelatedGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/related-games?id=${gameId}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedGames(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [gameId]);

  return (
    <div className="mt-14 lg:mt-28 space-y-6 lg:space-y-8">
      <h3 className="text-xl lg:text-2xl font-semibold uppercase">Games You Might Like</h3>

      <div
        className="overflow-hidden w-full relative mx-auto mb-12"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: relatedGames.length * 3500 + "ms",
          }}
        >
          <div className="flex gap-3 lg:gap-6">
            {[...relatedGames, ...relatedGames].map((card, index) => (
              <Link
                to={`/game/${card._id}`}
                key={index}
                className="w-32 lg:w-52 relative group hover:scale-95 transition-all duration-300"
              >
                <img
                  src={card.poster}
                  alt="game poster"
                  className="w-full h-full rounded object-cover"
                />
                <div className="flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/30">
                  <p className="text-white50 text-lg font-bold text-center uppercase">
                    {card.name}
                  </p>
                  <p className="mt-2 text-sm text-gray-300 font-medium text-center">
                    {card.developer}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        to={"/all-games"}
        className="px-12 py-3 text-sm font-bold text-primary border border-primary rounded-2xl hover:bg-primary hover:text-white50 uppercase transition-colors cursor-pointer"
      >
        See more
      </Link>
    </div>
  );
};

export default RelatedProducts;
