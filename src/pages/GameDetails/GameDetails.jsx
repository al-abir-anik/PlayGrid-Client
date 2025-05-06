import { useLoaderData } from "react-router";

const GameDetails = () => {
  const gameDetails = useLoaderData();
  const { _id, title, image, price, category, description, platform, rating } =
    gameDetails;

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">{title}</h2>
      <div className="flex gap-20">
        {/* overview column */}
        <div className="w-3/4">
          <div className="">
            <img
              src={image}
              alt="game image"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h5 className="font-semibold my-3">ABOUT THIS GAME</h5>
            <p className="text-gray-600 mb-8">{description}</p>
          </div>
        </div>

        {/* details column */}
        <div className="w-1/4">
          <h3 className="text-3xl font-bold text-gray-800 mb-5">Details</h3>
          <p className="text-gray-500 mb-4">
            <strong>Category :</strong> {category}
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Price :</strong> $ {price}
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Platform:</strong> {platform}
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Post Time:</strong> time here
          </p>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-500 font-bold text-xl">
              rating: {rating}
            </span>
            <span className="text-gray-500 text-sm">(count here Reviews)</span>
          </div>
          <div className="flex flex-col">
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <button>Add To Wishlist</button>
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
            placeholder="Write your review here..."></textarea>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
            disabled>
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
