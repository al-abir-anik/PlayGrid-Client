import { useState } from "react";
import { useLoaderData } from "react-router";
import { useAppContext } from "../../contexts/AppContext";
import { BsWindows, BsPlaystation, BsXbox } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import RelatedProducts from "../../components/RelatedProducts";
import UserReview from "./UserReview";
import Button from "../../components/Button";
import { FaStar } from "react-icons/fa6";

const GameDetails = () => {
  const gameDetails = useLoaderData();
  if (!gameDetails) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white50">
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
  } = gameDetails;
  const [thumbnail, setThumbnail] = useState(screenshots[0]);

  const {
    cartItems,
    handleAddToCart,
    cartBtnLoading,
    wishlist,
    handleAddToWishlist,
    wishBtnLoading,
  } = useAppContext();

  const isCarted = cartItems?.some((g) => String(g._id) === String(_id));
  const isWished = wishlist?.some((g) => String(g._id) === String(_id));

  return (
    <div className="w-3/4 mx-auto px-4 py-12 mb-20 text-white50">
      <div className="space-y-5 mb-10">
        <h2 className="text-4xl font-medium">{name}</h2>
        {/* <span className="flex items-center gap-3">
          <Rating value={rating} disabled cancel={false} />
          <p className="text-xl font-medium">4.9</p>
          <p className="">( 3 Player Review )</p>
        </span> */}
        <div className="flex items-center gap-2">
          <span className="py-2 px-5 flex items-center gap-1.5 bg-black500 rounded-full">
            <FaStar className="text-lg text-yellow300" />{" "}
            <p className="text-xl font-medium">{rating}</p>
          </span>
          <p className="text-offWhite50">({reviews.length} Reviews)</p>
        </div>
      </div>

      <div className="flex justify-between items-start">
        {/* left */}
        <div className="w-[73%] space-y-12">
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
          <p className="text-lg mb-12 text-offWhite50">{summary}</p>
          {/* genres */}
          <div className="space-y-10 text-offWhite50">
            <div>
              <h5 className="text-xl font-semibold mb-2.5 text-white50">
                GENRES
              </h5>
              <div className="flex gap-3">
                {genres.map((genre) => (
                  <p
                    key={genre}
                    className="px-4 py-1.5 border border-black200 rounded-2xl"
                  >
                    {genre}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-2.5 text-white50">
                FEATURES
              </h5>
              <div className="flex gap-3">
                {features.map((feature) => (
                  <p
                    key={feature}
                    className="px-4 py-1.5 border border-black200 rounded-2xl"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* description */}
          <div className="w-[95%] space-y-4">
            <h5 className="text-xl font-semibold">ABOUT THIS GAME</h5>
            <p className="text-lg text-black100">{description}</p>
          </div>
          {/* Requirement*/}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">SYSTEM REQUIREMENTS</h2>
            <div className="w-full flex gap-20">
              <div className="w-5/12">
                <h3 className="mb-2.5 uppercase">Minimum</h3>
                <ul className="space-y-2">
                  {Object.entries(minimum).map(([key, value]) => (
                    <li key={key} className="flex flex-col ">
                      <span className="text-black100">{key}</span>{" "}
                      <span className="text-offWhite50">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-5/12">
                <h3 className="mb-2.5 font-medium uppercase">Recommended</h3>
                <ul className="space-y-2">
                  {Object.entries(recommended).map(([key, value]) => (
                    <li key={key} className="flex flex-col ">
                      <span className="text-black100">{key}</span>{" "}
                      <span className="text-offWhite50">{value}</span>
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
          {/* price */}
          <div className="pt-20">
            <div className="flex items-center gap-3">
              <p className="text-4xl font-medium leading-none">${offerPrice}</p>
              <p className="mt-1 px-2 py-1 text-sm font-medium text-white50 bg-blue300 rounded-full">
                -
                {Math.round(((regularPrice - offerPrice) / regularPrice) * 100)}
                %
              </p>
              <p className="mt-2 text-offWhite50 text-lg line-through">
                ${regularPrice}
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-offWhite50">
              Sale ends 8/1/2025 at 12:00 AM
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-3 my-4">
            <Button
              id="buy-now"
              title="Buy Now"
              // onClickFunc={() => setShowCheckout(true)}
              containerClass="w-full !py-3 !rounded-2xl bg-yellow300 text-black500"
            />
            <Button
              id="add-to-cart"
              title={
                cartBtnLoading[_id] ? (
                  <div className="w-5 h-5 mx-auto border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
                ) : isCarted ? (
                  "Added in cart"
                ) : (
                  "Add to Cart"
                )
              }
              onClickFunc={() => handleAddToCart(_id)}
              disableFunc={isCarted || cartBtnLoading[_id]}
              containerClass={`w-full !py-3 !rounded-2xl bg-black500 text-white50 ${
                isCarted ? "!cursor-not-allowed" : ""
              }`}
            />
            <Button
              id="add-to-wishlist"
              title={
                wishBtnLoading[_id] ? (
                  <div className="w-5 h-5 mx-auto border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
                ) : isWished ? (
                  "Added in wishlist"
                ) : (
                  "Add to Wishlist"
                )
              }
              onClickFunc={() => handleAddToWishlist(_id)}
              disableFunc={isWished || wishBtnLoading[_id]}
              containerClass={`w-full !py-3 !rounded-2xl bg-black500 text-white50 ${
                isWished ? "!cursor-not-allowed" : ""
              }`}
            />
          </div>
          {/* infos */}
          <div className="">
            <p className="py-4 border-b border-black500 flex justify-between gap-2">
              <span className="min-w-28 text-black100">Developer</span>
              <span className="pl-3 font-medium text-offWhite50">
                {developer}
              </span>
            </p>
            <p className="py-4 border-b border-black500 flex justify-between gap-2">
              <span className="min-w-28 text-black100">Refund Type</span>
              <span className="pl-3 font-medium text-offWhite50">
                Refundable
              </span>
            </p>
            <p className="py-4 border-b border-black500 flex justify-between gap-2">
              <span className="min-w-28 text-black100">Release Date</span>
              <span className="pl-3 font-medium text-offWhite50">
                {releaseDate}
              </span>
            </p>
            {/* platform */}
            <p className="py-4 border-b border-black500 flex justify-between gap-2">
              <span className="min-w-28 text-black100">Platform</span>
              <span className="pl-3 flex gap-3 text-lg text-offWhite50">
                {platform.some((p) => p.toLowerCase().includes("xbox")) && (
                  <BsXbox />
                )}
                {platform.some((p) =>
                  p.toLowerCase().includes("playstation")
                ) && <BsPlaystation />}
                {platform.some((p) => p.toLowerCase().includes("windows")) && (
                  <BsWindows />
                )}
              </span>
            </p>
          </div>
          {/* share & report */}
          <div className="w-full mt-2 flex gap-8">
            <button className="w-full py-3 rounded-2xl flex items-center justify-center gap-1 bg-black500 cursor-pointer">
              <IoShareSocial /> <p>Share</p>
            </button>
            <button className="w-full py-3 rounded-2xl flex items-center justify-center gap-1 bg-black500 cursor-pointer">
              <MdOutlineReportGmailerrorred className="text-lg" /> <p>Report</p>
            </button>
          </div>
        </div>
      </div>

      {/*********RELATED GAMES************/}
      <RelatedProducts gameId={_id} />
    </div>
  );
};

export default GameDetails;
