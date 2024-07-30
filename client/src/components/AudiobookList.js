import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AudiobookList() {
  const [audiobooks, setAudiobooks] = useState([]);
  const [filteredaudiobooks, setfilteredAudiobooks] = useState([]);
  const [search, setSearch] = useState({ genre: '', author: '', rating: '' });

  useEffect(() => {
    if (audiobooks.length === 0) {
      fetchAudiobooks();
    } else {
      const temp = audiobooks.filter((item) => {
        const genreMatch = search.genre === "" || item.genre.toLowerCase().includes(search.genre.toLowerCase());
        const authorMatch = search.author === "" || item.author.toLowerCase().includes(search.author.toLowerCase());
        const ratingMatch = search.rating === "" || (item.rating !== undefined && item.rating.toString() === search.rating);
        return genreMatch && authorMatch && ratingMatch;
      });
      setfilteredAudiobooks(temp);
    }
  }, [search, audiobooks]);

  const fetchAudiobooks = async () => {
    try {
      const response = await axios.get('https://audiobook-system-fullstack.onrender.com/api/audiobooks');
      setAudiobooks(response.data);
      setfilteredAudiobooks(response.data);
    } catch (error) {
      console.error('Failed to fetch audiobooks:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/background-images-with-line-art-hd-1080p-free-download-hd_822642-411.jpg')", backgroundSize: 'cover' }}>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 text-blue">Audiobooks</h1>
      <div className="flex flex-col items-center gap-2 mb-7 p-4 bg-white bg-opacity-50 rounded-3xl border-4 border-gray-500">
        <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
        <div className="flex gap-5">
          <input type="text" placeholder="Search by genre..." className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setSearch({ ...search, genre: e.target.value })} />
          <input type="text" placeholder="Search by author..." className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setSearch({ ...search, author: e.target.value })} />
          <input type="number" placeholder="Search by rating..." className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setSearch({ ...search, rating: e.target.value })} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredaudiobooks.map(book => (
          <div key={book._id} className="card bg-base-100 shadow-xl rounded-3xl border-4 border-blue-500 hover:border-red-700">
            <figure className="px-10 pt-10">
              <img src={book.coverImage} alt={book.title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-semibold">{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.genre}</p>
              <p>Rating: {book.rating}</p>
              <div className="card-actions">
                <Link to={`/audiobooks/${book._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AudiobookList;
