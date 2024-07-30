
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ReviewForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({
    rating: '',
    comment: '',
    recommend: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`https://audiobook-system-fullstack.onrender.com/api/reviews/`, { ...review, audiobookId: id });
      navigate(`https://audio-book-system-full-stack.vercel.app/audiobooks/${id}`); // Redirect back to the audiobook detail page
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/background-images-with-line-art-hd-1080p-free-download-hd_822642-411.jpg')", backgroundSize: 'cover' }}>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-lg mx-auto bg-white p-5 rounded-lg shadow backdrop-blur-sm bg-opacity-90">
          <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">Add a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
              <input
                type="number"
                placeholder="Rating"
                value={review.rating}
                onChange={e => setReview({ ...review, rating: e.target.value })}
                className="input input-bordered w-full max-w-xs"
                required
                min="1"
                max="5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Comment</label>
              <textarea
                placeholder="Your comment here..."
                value={review.comment}
                onChange={e => setReview({ ...review, comment: e.target.value })}
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Would you recommend this?</label>
              <select
                value={review.recommend}
                onChange={e => setReview({ ...review, recommend: e.target.value })}
                className="select select-bordered w-full"
                required
              >
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit Review</button>
          </form>
        </div>
      </div>
      <footer className="text-center p-4 text-white bg-blue-800">
        <p>Thank you for your review!</p>
      </footer>
    </div>
  );
}

export default ReviewForm;
