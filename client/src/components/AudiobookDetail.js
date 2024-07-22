import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AudiobookDetail() {
  const { id } = useParams();
  const [audiobook, setAudiobook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAudiobook = async () => {
      try {
        const result = await axios.get(`http://localhost:3001/api/audiobooks/${id}`);
        setAudiobook(result.data);
      } catch (error) {
        console.error('Error fetching audiobook:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const result = await axios.get(`http://localhost:3001/api/reviews/${id}`);
        setReviews(result.data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchAudiobook();
    fetchReviews();
  }, [id]);

  if (!audiobook) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6 " style={{ backgroundImage: "url('https://img.freepik.com/free-vector/tropical-leaves-background-zoom_23-2148580778.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user')", backgroundSize: 'cover' }}>
      <div className="shadow-lg rounded-lg overflow-hidden border-4 border-gray-400"style={{ backgroundImage: "url('https://img.freepik.com/free-vector/tropical-leaves-background-zoom_23-2148580778.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user')", backgroundSize: 'cover' }}>
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl font-bold text-white mb-2">{audiobook.title}</h2>
          <p className="text-sm text-white">{audiobook.author}</p>
          <img src={audiobook.coverImage} alt={audiobook.title} className="w-full object-cover object-center rounded-3xl mt-2" style={{ height: '300px' }} />
          <p className="text-white mt-3">{audiobook.description}</p>
          <Link to={`/reviews/${id}`} className="btn btn-primary mt-4">
                                Add Review
                   </Link>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-400">Reviews</h3>
        {reviews.length > 0 ? (
          <ul className="space-y-4 mt-3">
            {reviews.map((review, index) => (
              <li key={index} className="bg-gray-100 text-gray-200 p-4 rounded-lg shadow "style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/background-images-with-line-art-hd-1080p-free-download-hd_822642-411.jpg')", backgroundSize: 'cover' }}>
                <p><strong>Rating:</strong> <span className="text-white">{review.rating}</span></p>
                <p><strong>Comment:</strong> {review.comment}</p>
                <p><strong>Recommend:</strong> {review.recommend}</p>
            
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 mt-2">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default AudiobookDetail;
