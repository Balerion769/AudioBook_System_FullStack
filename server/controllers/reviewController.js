import  Review  from'../models/Review.js';

export const addReview = async (req, res) => {
  try {
    const { audiobookId, rating, comment ,recommend} = req.body;
    const newReview = new Review({
      audiobookId: audiobookId,
      rating:rating,
      comment:comment,
      recommend:recommend
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

export const getReviewsForAudiobook = async (req, res) => {
  try {
    const reviews = await Review.find({ audiobookId: req.params.audiobookId }).populate('audiobookId');
    res.status(201).json({reviews:reviews,
      message:"here are the reviews"
    });
  } catch (error) {
    res.status(500).send(error.toString());
  }
};
