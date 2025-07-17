import { useLoaderData } from "react-router";
import { Rating } from "primereact/rating";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext";

const GameDetails = () => {
  const { user } = useContext(AuthContext);
  const gameDetails = useLoaderData();
  const {
    _id,
    name,
    developer,
    poster,
    screenshots,
    genres,
    features,
    currentPrice,
    offerPrice,
    category,
    description,
    platform,
    rating,
    requirement: { minimum, recommended },
  } = gameDetails;
  const [thumbnail, setThumbnail] = useState(screenshots[0]);
  // const [relatedProducts, setRelatedProducts] = useState([]);

  const handleAddWishlist = async (id) => {
    const res = await axios.patch(`http://localhost:5000/user-wishlist/add`, {
      email: user?.email,
      gameId: id,
    });

    if (res.data.modifiedCount > 0) {
      console.log("Game added to wishlist");
      // Optional: update local wishlist or show toast
    } else {
      console.log("Game already in wishlist");
    }
  };

  return (
    <div className="w-3/4 mx-auto px-4 py-12 mb-20">
      {/* Header */}
      <div className="space-y-5 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">{name}</h2>
        <span className="flex items-center gap-3">
          <Rating value={5} disabled cancel={false} />
          <p className="text-xl font-medium text-black/80">4.9</p>
          <p className="text-black/80">( 3 Player Review )</p>
        </span>
      </div>

      {/* main */}
      <div className="flex justify-between items-start">
        <div className="w-[70%] space-y-14">
          {/* image gallery */}
          <div className="flex flex-col gap-5">
            <div className="w-full h-full rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-5">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(screenshot)}
                  className="w-28 h-20 rounded opacity-80 hover:opacity-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={screenshot}
                    alt="game-screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-xl font-semibold">ABOUT THIS GAME</h5>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
          </div>

          {/* genre & features */}
          <div className="space-y-4">
            <div>
              <h5 className="text-xl font-medium mb-2">Genres</h5>
              <div className="flex gap-2">
                {genres.map((genre) => (
                  <p className="px-2 py-1 text-gray-600 border border-gray-500/30 rounded">
                    {genre}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium mb-2">Features</h5>
              <div className="flex gap-2">
                {features.map((feature) => (
                  <p className="px-2 py-1 text-gray-600 border border-gray-500/30 rounded">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Requirement section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">SYSTEM REQUIREMENTS</h2>
            <div className="w-full h-fit bg-white">
              <div>
                <h3>Minimum</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {Object.entries(minimum).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full h-fit bg-white">
              <div>
                <h3>Recommended</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {Object.entries(minimum).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="mt-10 space-y-5">
            <h5 className="text-xl font-semibold">PLAYER REVIEWS</h5>
            <div className="py-5 mb-6">
              <textarea
                className="w-full border border-gray-300 rounded p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
                rows="3"
                placeholder="Write your review here..."
              ></textarea>
              <button
                disabled
                className="grow px-10 py-3 bg-[#45F882] text-gray-700 rounded-lg hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer "
              >
                Submit Review
              </button>
            </div>

            {/* Display Reviews */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-2">
                  <strong>User1:</strong> gta v was absolutely fun!
                </p>
                <p className="text-sm text-gray-400">
                  Posted on January 12, 2025
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-2">
                  <strong>User2:</strong> All gamer should experience this.
                  Highly recommend!
                </p>
                <p className="text-sm text-gray-400">
                  Posted on January 11, 2025
                </p>
              </div>
              {/* Add more reviews here */}
            </div>
          </div>
        </div>

        {/* details column */}
        <div className="w-1/4 space-y-4 bg-white sticky top-0">
          <img src={poster} alt="game poster" className="mb-10" />
          {/* <h5 className="text-2xl font-bold pb-5">GAME DETAILS</h5> */}
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Price</span>
            <span>:</span>
            <span className="pl-3">$ {offerPrice}</span>
          </p>
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Genre</span>:
            <span className="pl-3">Action-Adventure</span>
          </p>
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Developer</span>:
            <span className="pl-3">Rockstar Games</span>
          </p>
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Publisher</span>
            <span>:</span>
            <span className="pl-3">Rockstar Games</span>
          </p>
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Release Date</span>
            <span>:</span>
            <span className="pl-3">11 May 2014</span>
          </p>
          <div className="flex flex-col gap-3 my-10">
            <button className="grow px-10 py-3 bg-[#45F882] text-gray-700 rounded-lg hover:bg-[#ffa825]/80 active:scale-95 cursor-pointer ">
              Buy Now
            </button>
            <button className="grow px-10 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-[#ffa825]/80 active:scale-95 cursor-pointer ">
              Add To Cart
            </button>
            <button
              onClick={() => handleAddWishlist(_id)}
              className="grow px-10 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-[#ffa825]/80 active:scale-95 cursor-pointer"
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
