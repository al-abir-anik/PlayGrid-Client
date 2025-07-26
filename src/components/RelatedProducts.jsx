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
    <div className="flex flex-col items-center mt-28">
      <div className="py-10 flex flex-col items-center w-max">
        <h3 className="text-3xl font-semibold uppercase">Related Games</h3>
        <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
      </div>

      <div
        className="overflow-hidden w-full relative mx-auto"
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
          <div className="flex gap-12">
            {[...relatedGames, ...relatedGames].map((card) => (
              <Link
                to={`/game/${card._id}`}
                key={card.name}
                className="w-56 relative group hover:scale-95 transition-all duration-300"
              >
                <img
                  src={card.poster}
                  alt="game poster"
                  className="w-full h-full rounded object-cover"
                />
                <div className="flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/30">
                  <p className="text-white text-lg font-bold text-center uppercase">
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
        className="mx-auto px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition cursor-pointer"
      >
        See more
      </Link>
    </div>
  );
};

export default RelatedProducts;
