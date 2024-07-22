import express from 'express';
const audiobooksRouter = express.Router();
import * as audiobookController from '../controllers/audiobookController.js';

audiobooksRouter.get('/', audiobookController.getAllAudiobooks);
audiobooksRouter.get('/:id', audiobookController.getAudiobookById);
audiobooksRouter.post('/add',audiobookController.postAddAudioBook)
export default audiobooksRouter;
