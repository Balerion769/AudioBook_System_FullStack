import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  audiobookId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Audiobook', 
    required: true 
  },
  rating: {type:Number ,default : 5},
  comment: {type:String , default:"It is a good web application"},
  recommend: {type: String , default: "Yes" },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
