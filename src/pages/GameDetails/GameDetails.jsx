import { useLoaderData } from "react-router";
import ImageGallery from "./ImageGallery/ImageGallery";

const GameDetails = () => {
  const gameDetails = useLoaderData();
  const {
    _id,
    title,
    image,
    images,
    genre,
    price,
    category,
    description,
    platform,
    rating,
  } = gameDetails;

  return (
    <div className="w-3/4 mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">{title}</h2>
      <div className="flex justify-between items-start">
        {/* Description column */}
        <div className="w-[70%] space-y-20">
          <div className="">
            <ImageGallery gameImages={images}></ImageGallery>
          </div>
          <div className="space-y-6">
            <h5 className="text-2xl font-semibold">ABOUT THIS GAME</h5>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
          </div>
        </div>

        {/* details column */}
        <div className="w-1/4 space-y-4 bg-white sticky top-0">
          <img src={image} alt="game poster" className="mb-10"/>
          {/* <h5 className="text-2xl font-bold pb-5">GAME DETAILS</h5> */}
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Price</span>
            <span>:</span>
            <span className="pl-3">$ {price}</span>
          </p>
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Genres</span>
            <span>:</span>
            <span className="pl-3">{genre.join(", ")}</span>
          </p>
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Platform</span>
            <span>:</span>
            <span className="pl-3">{platform.join(", ")}</span>
          </p>
          <p className="flex gap-2">
            <span className="min-w-28 text-lg font-medium">Developer</span>
            <span>:</span>
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
            <button className="grow px-10 py-3 bg-[#45F882] text-gray-700 rounded-lg hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
              Buy Now
            </button>
            <button className="grow px-10 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
              Add To Cart
            </button>
            <button className="grow px-10 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-[#ffa825]/80 transition ease-in focus:scale-90 cursor-pointer ">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Requirement section */}
      <div>
        <h2 className="text-lg font-semibold">System Requirements</h2>
      </div>

      {/* Review Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
        {/* Add a Review */}
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Add a Review
          </h3>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
            rows="4"
            placeholder="Write your review here..."
          ></textarea>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
            disabled
          >
            Submit Review
          </button>
        </div>

        {/* Display Reviews */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-600 mb-2">
              <strong>User1:</strong> This meal was absolutely delicious!
            </p>
            <p className="text-sm text-gray-400">Posted on January 12, 2025</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-600 mb-2">
              <strong>User2:</strong> Perfectly cooked and flavorful. Highly
              recommend!
            </p>
            <p className="text-sm text-gray-400">Posted on January 11, 2025</p>
          </div>
          {/* Add more reviews here */}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
