import { useContext, useEffect, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const UserReview = ({ reviews, gameId }) => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState("");
  const [allReviews, setAllReviews] = useState([]);

  // Initialized local review state from prop
  useEffect(() => {
    setAllReviews(reviews);
  }, [reviews]);

  const handlePostReview = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setRatingError("Please select a rating.");
      return;
    }
    setRatingError("");
    const newReview = {
      comment,
      rating,
      username: user?.displayName,
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
        setRating(0);
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
          className="w-full border border-black200 rounded-xl p-4 mb-4 focus:outline-none focus:border-blue300"
        ></textarea>

        {/* rating */}
        <AnimatePresence>
          {comment.length > 0 && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 flex items-center-safe gap-3"
            >
              <p className="text-offWhite50">Rate this game:</p>
              <span className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    onClick={() => {
                      setRating(star);
                      setRatingError("");
                    }}
                    className={`text-2xl cursor-pointer ${
                      star <= rating ? "text-yellow300" : "text-yellow100/60"
                    }`}
                  />
                ))}
              </span>
              <p className="ml-2 text-sm font-light text-red-400">
                {ratingError}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* cancel & submit */}
        <div className="flex gap-3">
          <AnimatePresence>
            {comment.length > 0 && (
              <motion.button
                type="button"
                onClick={() => {
                  setComment("");
                  setRating(0);
                }}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-12 py-3 text-white50 bg-black500 hover:bg-black100/30 rounded-xl active:scale-95 font-general whitespace-nowrap text-sm font-bold uppercase cursor-pointer"
              >
                Cancel
              </motion.button>
            )}
          </AnimatePresence>

          <button
            disabled={comment.length === 0}
            type="submit"
            className={`px-12 py-3 text-black700 rounded-xl font-general whitespace-nowrap text-sm font-bold uppercase ${
              comment.length === 0
                ? "bg-blue300/50 cursor-not-allowed"
                : "bg-blue300 hover:bg-blue300/90 active:scale-95 cursor-pointer"
            }`}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display Reviews */}
      <div className="space-y-2">
        {reviews.length === 0 ? (
          <p className="font-medium text-lg text-offWhite50">
            No review yet. Be the first to review!
          </p>
        ) : (
          allReviews.map((review, index) => (
            <div
              key={index}
              className="p-4 flex justify-between items-start text-offWhite50 bg-black500 rounded-lg"
            >
              <div>
                <p className="mb-2">
                  <strong className="text-black100">{review.username}: </strong>
                  {review.comment}
                </p>
                <p className="text-black100">{review.date}</p>
              </div>
              <div className="flex items-center gap-1 mr-3">
                <FaStar className="text-yellow300" />
                <p className="font-medium">
                  {review.rating ? review.rating : 4}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserReview;
