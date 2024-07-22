import express from 'express';
const reviewsRouter = express.Router();
import * as reviewController from '../controllers/reviewController.js';

reviewsRouter.post('/', reviewController.addReview);
reviewsRouter.get('/:audiobookId', reviewController.getReviewsForAudiobook)
export default reviewsRouter;
