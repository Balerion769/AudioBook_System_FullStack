import  mongoose from 'mongoose';

const audiobookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImage: {type:String , default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funblast.com%2Ffree-book-cover-mockups-psd%2F&psig=AOvVaw1ERBFhLxThwWI7GWuKpC19&ust=1721486487062000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDqkpCrs4cDFQAAAAAdAAAAABAE'},
  genre: String,
  rating: Number,
  publishedDate: {type: Date , default: Date.now()},
  description: String
});

const Audiobook = mongoose.model('Audiobook', audiobookSchema);

export default Audiobook;
