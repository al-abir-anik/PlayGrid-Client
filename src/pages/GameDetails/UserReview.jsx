import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../../auth/AuthContext";
import { useContext, useEffect, useState } from "react";

const UserReview = ({ reviews, gameId }) => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [allReviews, setAllReviews] = useState([]);

  // Initialized local review state from prop
  useEffect(() => {
    setAllReviews(reviews);
  }, [reviews]);

  const handlePostReview = async (e) => {
    e.preventDefault();
    const newReview = {
      comment,
      userName: user?.displayName,
      date: new Date().toLocaleString(),
    };

    try {
      const res = await axios.patch(`http://localhost:5000/post-reviews`, {
        gameId,
        newReview,
      });

      if (res.data.modifiedCount > 0) {
        setAllReviews((prev) => [newReview, ...prev]);
        toast.success("Review Submitted.");
        setComment("");
      } else {
        console.error("Review submit failed!");
        toast.error("Review submit failed!");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("error:", error);
    }
  };

  return (
    <div className="mt-20 space-y-5">
      <h5 className="text-xl font-semibold">PLAYER REVIEWS</h5>
      <form onSubmit={handlePostReview} className="mb-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="2"
          placeholder="Write your review here..."
          className="w-full border border-gray-300 rounded p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
        ></textarea>
        <button
          disabled={comment.length === 0}
          type="submit"
          className={`grow px-10 py-3 text-gray-700 rounded-lg active:scale-95 ${
            comment.length === 0
              ? "bg-blue300/50 cursor-not-allowed"
              : "bg-blue300 cursor-pointer"
          }`}
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-400">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          allReviews.map((review, index) => (
            <div
              key={index}
              className=" rounded-lg p-4 text-gray-300 bg-gray-800"
            >
              <p className="mb-2">
                <strong>{review.userName}: </strong> {review.comment}
              </p>
              <p className="text-xs">{review.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserReview;
