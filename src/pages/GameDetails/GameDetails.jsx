import { useState } from "react";
import { useLoaderData } from "react-router";
import { useAppContext } from "../../contexts/AppContext";
import { Rating } from "primereact/rating";
import { BsWindows, BsPlaystation, BsXbox } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import RelatedProducts from "../../components/RelatedProducts";
import UserReview from "./UserReview";

const GameDetails = () => {
  const gameDetails = useLoaderData();

  if (!gameDetails) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-4 text-lg">Loading Game Details...</p>
      </div>
    );
  }

  const {
    _id,
    name,
    developer,
    summary,
    poster,
    screenshots,
    genres,
    features,
    regularPrice,
    offerPrice,
    description,
    platform,
    releaseDate,
    rating,
    requirement: { minimum, recommended },
    reviews,
  } = gameDetails || {};
  const {
    cartItems,
    handleAddToCart,
    cartBtnLoading,
    wishlist,
    handleAddToWishlist,
    wishBtnLoading,
  } = useAppContext();
  const [thumbnail, setThumbnail] = useState(screenshots[0]);

  const isCarted = cartItems?.some((g) => String(g._id) === String(_id));
  const isWished = wishlist?.some((g) => String(g._id) === String(_id));

  return (
    <div className="w-3/4 mx-auto px-4 py-12 mb-20 text-white">
      <div className="space-y-5 mb-10">
        <h2 className="text-4xl font-bold">{name}</h2>
        <span className="flex items-center gap-3">
          <Rating value={5} disabled cancel={false} />
          <p className="text-xl font-medium">4.9</p>
          <p className="">( 3 Player Review )</p>
        </span>
      </div>

      <div className="flex justify-between items-start">
        {/* left */}
        <div className="w-[73%] space-y-14">
          {/* image */}
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
          <p className="text-lg text-gray-700 mb-8">{summary}</p>
          {/* genres */}
          <div className="space-y-4">
            <div>
              <h5 className="text-xl font-medium mb-2">Genres</h5>
              <div className="flex gap-2">
                {genres.map((genre) => (
                  <p
                    key={genre}
                    className="px-2 py-1 text-gray-600 border border-gray-500/30 rounded"
                  >
                    {genre}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium mb-2">Features</h5>
              <div className="flex gap-2">
                {features.map((feature) => (
                  <p
                    key={feature}
                    className="px-2 py-1 text-gray-600 border border-gray-500/30 rounded"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* description */}
          <div className="w-[95%] space-y-3">
            <h5 className="text-xl font-semibold">ABOUT THIS GAME</h5>
            {description.split("\n").map((line, index) => (
              <p key={index} className="text-lg text-gray-500">
                {line}
              </p>
            ))}
          </div>
          {/* Requirement*/}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">SYSTEM REQUIREMENTS</h2>
            <div className="w-full flex gap-20">
              <div className="w-5/12">
                <h3 className="mb-2 font-medium uppercase">Minimum</h3>
                <ul className="space-y-2">
                  {Object.entries(minimum).map(([key, value]) => (
                    <li key={key} className="flex flex-col ">
                      <span className="text-gray-700/60">{key}</span>{" "}
                      <span className="text-lg text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-5/12">
                <h3 className="mb-2 font-medium uppercase">Recommended</h3>
                <ul className="space-y-2">
                  {Object.entries(recommended).map(([key, value]) => (
                    <li key={key} className="flex flex-col ">
                      <span className="text-gray-700/60">{key}</span>{" "}
                      <span className="text-lg text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Review */}
          <UserReview reviews={reviews} gameId={_id} />
        </div>

        {/* right info column */}
        <div className="w-[22%] space-y-6 sticky top-0">
          {/* <img src={poster} alt="game poster" className="mb-8" /> */}
          {/* price */}
          <div className="pt-20">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 text-sm font-medium text-white bg-blue300 rounded-full">
                -30%
              </span>
              <p className="line-through">${regularPrice}</p>
              <p className="text-xl font-medium">$ {offerPrice}</p>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-500">
              Sale ends 8/1/2025 at 12:00 AM
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-3 my-4">
            <button className="grow px-10 py-3 bg-[#45F882] text-gray-700 rounded-lg hover:bg-[#ffa825]/80 active:scale-95 cursor-pointer ">
              Buy Now
            </button>

            <button
              onClick={() => handleAddToCart(_id)}
              disabled={isCarted || cartBtnLoading[_id]}
              className={`grow px-10 py-3 bg-gray-200 text-gray-700 rounded-lg  ${
                isCarted
                  ? "cursor-not-allowed"
                  : "hover:bg-[#ffa825]/80 active:scale-95  cursor-pointer"
              }`}
            >
              {cartBtnLoading[_id] ? (
                <div className="w-5 h-5 mx-auto border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
              ) : isCarted ? (
                "Added in cart"
              ) : (
                "Add to Cart"
              )}
            </button>

            <button
              onClick={() => handleAddToWishlist(_id)}
              disabled={isWished || wishBtnLoading[_id]}
              className={`grow px-10 py-3 bg-gray-200 text-gray-700 rounded-lg  ${
                isWished
                  ? "cursor-not-allowed"
                  : "hover:bg-[#ffa825]/80 active:scale-95  cursor-pointer"
              }`}
            >
              {wishBtnLoading[_id] ? (
                <div className="w-5 h-5 mx-auto border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
              ) : isWished ? (
                "Added in wishlist"
              ) : (
                "Add to Wishlist"
              )}
            </button>
          </div>
          {/* infos */}
          <div className="">
            <p className="py-4 border-b border-gray-300 flex justify-between gap-2">
              <span className="min-w-28 text-gray-600">Developer</span>
              <span className="pl-3">{developer}</span>
            </p>
            <p className="py-4 border-b border-gray-300 flex justify-between gap-2">
              <span className="min-w-28 text-gray-600">Refund Type</span>
              <span className="pl-3">Refundable</span>
            </p>
            <p className="py-4 border-b border-gray-300 flex justify-between gap-2">
              <span className="min-w-28 text-gray-600">Release Date</span>
              <span className="pl-3">{releaseDate}</span>
            </p>
            <p className="py-4 border-b border-gray-300 flex justify-between gap-2">
              <span className="min-w-28 text-gray-600">Platform</span>
              {/* <span className="pl-6">{platform}</span> */}
              <span className="pl-3 flex gap-3 text-lg">
                <BsXbox /> <BsPlaystation /> <BsWindows />
              </span>
            </p>
          </div>
          {/* share & report */}
          <div className="w-full mt-2 flex gap-10">
            <button className="w-full py-1.5 bg-gray-300 rounded flex items-center justify-center gap-1 cursor-pointer">
              <IoShareSocial /> <p>Share</p>
            </button>
            <button className="w-full py-1 bg-gray-300 rounded flex items-center justify-center gap-1 cursor-pointer">
              <MdOutlineReportGmailerrorred className="text-lg" /> <p>Report</p>
            </button>
          </div>
        </div>
      </div>

      {/*********RELATED GAMES************/}
      {/* <RelatedProducts game={gameDetails} /> */}
      <RelatedProducts gameId={_id} />
    </div>
  );
};

export default GameDetails;
