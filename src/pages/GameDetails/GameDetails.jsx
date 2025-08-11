import { useState } from "react";
import { useLoaderData } from "react-router";
import { useAppContext } from "../../contexts/AppContext";
import { BsWindows, BsPlaystation, BsXbox } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import RelatedProducts from "./RelatedProducts";
import UserReview from "./UserReview";
import Button from "../../components/Button";
import { FaStar } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbHeartPlus } from "react-icons/tb";
import { TbHeartCheck } from "react-icons/tb";

const GameDetails = () => {
  const gameDetails = useLoaderData();
  const {
    _id,
    name,
    developer,
    summary,
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
  // if (!gameDetails) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center text-white50">
  //       <div className="w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
  //       <p className="ml-4 text-lg">Loading Game Details...</p>
  //     </div>
  //   );
  // }

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

  const discount = Math.round(
    ((regularPrice - offerPrice) / regularPrice) * 100
  );

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto py-4 lg:py-12 mb-10 lg:mb-20 text-white50">
      <div className="space-y-2 lg:space-y-5 mb-4 lg:mb-10">
        <h2 className="text-2xl lg:text-4xl font-medium">{name}</h2>
        <div className="flex items-center gap-2">
          <span className="py-2 px-5 flex items-center gap-1.5 bg-black500 rounded-full">
            <FaStar className="text-lg text-yellow300" />{" "}
            <p className="lg:text-xl font-medium">{rating}</p>
          </span>
          <p className="text-sm lg:text-base text-offWhite50">
            ( {reviews.length} Reviews )
          </p>
        </div>
      </div>

      <div className="flex justify-between items-start">
        {/* left */}
        <div className="w-full lg:w-[73%] space-y-8 lg:space-y-12">
          {/* image */}
          <div className="flex flex-col gap-5">
            <div className="w-full h-full rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-1 md:gap-3 lg:gap-5">
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
          {/* info column for small screen */}
          <div className="space-y-3 block lg:hidden">
            {/* price */}
            <div className="pb-2">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <p className="text-2xl font-medium leading-none">
                  {isNaN(discount) ? "Free" : `$${offerPrice}`}
                </p>
                {isNaN(discount) || (
                  <p className="px-2 py-1 text-xs font-medium text-white50 bg-primary rounded-full">
                    -{discount} %
                  </p>
                )}
                {isNaN(discount) || (
                  <p className="mt-0.5 text-offWhite50 line-through">
                    ${regularPrice}
                  </p>
                )}
              </div>
              {isNaN(discount) || (
                <p className="mt-4 text-sm font-medium text-center sm:text-left text-offWhite50">
                  Sale ends 8/1/2025 at 12:00 AM
                </p>
              )}
            </div>
            {/* buttons */}
            <div className="flex justify-center sm:justify-start gap-3 my-4 !text-sm">
              <Button
                id="buy-now"
                title={isNaN(discount) ? "Get" : "Buy Now"}
                // onClickFunc={() => setShowCheckout(true)}
                containerClass="!px-6 sm:!px-8 !py-2 bg-yellow300 text-black500"
              />
              <Button
                id="add-to-cart"
                title={
                  cartBtnLoading[_id] ? (
                    <div className="w-4 h-4 mx-auto border-1 border-white50 border-t-transparent rounded-full animate-spin"></div>
                  ) : isCarted ? (
                    <TbShoppingBagCheck className="text-2xl" />
                  ) : (
                    <TbShoppingBagPlus className="text-2xl" />
                  )
                }
                onClickFunc={() => handleAddToCart(_id)}
                disableFunc={isCarted || cartBtnLoading[_id]}
                containerClass={`!p-4 !rounded-full bg-black500 text-white50 ${
                  isCarted ? "!cursor-not-allowed" : ""
                }`}
              />
              <Button
                id="add-to-wishlist"
                title={
                  wishBtnLoading[_id] ? (
                    <div className="w-4 h-4 mx-auto border-1 border-white50 border-t-transparent rounded-full animate-spin"></div>
                  ) : isWished ? (
                    <TbHeartCheck className="text-2xl" />
                  ) : (
                    <TbHeartPlus className="text-2xl" />
                  )
                }
                onClickFunc={() => handleAddToWishlist(_id)}
                disableFunc={isWished || wishBtnLoading[_id]}
                containerClass={`!p-4 !rounded-full bg-black500 text-white50 ${
                  isWished ? "!cursor-not-allowed" : ""
                }`}
              />
            </div>
            {/* infos */}
            <div className="sm:w-3/4">
              <p className="py-1.5 border-b border-black200 flex justify-between gap-2">
                <span className="min-w-28 text-black100">Developer</span>
                <span className="pl-3 font-medium text-offWhite50">
                  {developer}
                </span>
              </p>
              <p className="py-1.5 border-b border-black200 flex justify-between gap-2">
                <span className="min-w-28 text-black100">Refund Type</span>
                <span className="pl-3 font-medium text-offWhite50">
                  Refundable
                </span>
              </p>
              <p className="py-1.5 border-b border-black200 flex justify-between gap-2">
                <span className="min-w-28 text-black100">Release Date</span>
                <span className="pl-3 font-medium text-offWhite50">
                  {releaseDate}
                </span>
              </p>
              {/* platform */}
              <p className="py-1.5 border-b border-black200 flex justify-between gap-2">
                <span className="min-w-28 text-black100">Platform</span>
                <span className="pl-3 flex gap-3 text-lg text-offWhite50">
                  {platform.some((p) => p.toLowerCase().includes("xbox")) && (
                    <BsXbox />
                  )}
                  {platform.some((p) =>
                    p.toLowerCase().includes("playstation")
                  ) && <BsPlaystation />}
                  {platform.some((p) =>
                    p.toLowerCase().includes("windows")
                  ) && <BsWindows />}
                </span>
              </p>
            </div>
            {/* share & report */}
            <div className="sm:w-3/4 mt-6 flex gap-8 text-sm text-white50">
              <button className="w-full py-3 rounded-2xl flex items-center justify-center gap-1 bg-black500 cursor-pointer">
                <IoShareSocial /> <p>Share</p>
              </button>
              <button className="w-full py-3 rounded-2xl flex items-center justify-center gap-1 bg-black500 cursor-pointer">
                <MdOutlineReportGmailerrorred className="text-lg" />{" "}
                <p>Report</p>
              </button>
            </div>
          </div>
          <p className="text-lg lg:text-xl mb-8 lg:mb-12 text-offWhite50">
            {summary}
          </p>
          {/* genres */}
          <div className="space-y-8 text-offWhite50">
            <div>
              <h5 className="text-lg lg:text-xl font-semibold mb-2.5 text-white50">
                GENRES
              </h5>
              <div className="flex flex-wrap gap-3">
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
              <h5 className="text-lg lg:text-xl font-semibold mb-2.5 text-white50">
                FEATURES
              </h5>
              <div className="flex flex-wrap gap-3">
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
            <h5 className="text-lg lg:text-xl font-semibold">
              ABOUT THIS GAME
            </h5>
            <p className="text-base lg:text-lg text-black100">{description}</p>
          </div>
          {/* Requirement*/}
          <div className="space-y-4">
            <h2 className="text-lg lg:text-xl font-semibold">
              SYSTEM REQUIREMENTS
            </h2>
            <div className="w-full flex gap-10 lg:gap-20">
              <div className="w-5/12">
                <h3 className="mb-2.5 uppercase text-sm lg:text-base">
                  Minimum
                </h3>
                <ul className="space-y-2">
                  {Object.entries(minimum).map(([key, value]) => (
                    <li key={key} className="flex flex-col ">
                      <span className="text-black100">{key}</span>{" "}
                      <span className="text-sm lg:text-base text-offWhite50">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-5/12">
                <h3 className="mb-2.5 font-medium uppercase text-sm lg:text-base">
                  Recommended
                </h3>
                <ul className="space-y-2">
                  {Object.entries(recommended).map(([key, value]) => (
                    <li key={key} className="flex flex-col ">
                      <span className="text-black100">{key}</span>{" "}
                      <span className="text-sm lg:text-base text-offWhite50">
                        {value}
                      </span>
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
        <div className="w-[22%] space-y-6 py-3 hidden lg:block sticky top-20">
          {/* price */}
          <div className="">
            <div className="flex items-center gap-3">
              <p className="text-3xl font-medium leading-none">
                {isNaN(discount) ? "Free" : `$${offerPrice}`}
              </p>
              {isNaN(discount) || (
                <p className="px-2 py-1 text-xs font-medium text-white50 bg-primary rounded-full">
                  -{discount} %
                </p>
              )}
              {isNaN(discount) || (
                <p className="mt-0.5 text-offWhite50 text-lg line-through">
                  ${regularPrice}
                </p>
              )}
            </div>
            {isNaN(discount) || (
              <p className="mt-4 text-sm font-medium text-offWhite50">
                Sale ends 8/1/2025 at 12:00 AM
              </p>
            )}
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-3 my-4">
            <Button
              id="buy-now"
              title={isNaN(discount) ? "Get" : "Buy Now"}
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

      {/********* RELATED GAMES ************/}
      <RelatedProducts gameId={_id} />
    </div>
  );
};

export default GameDetails;
