
import express from 'express';
import config from './config/config.js';
import mongoose from 'mongoose';
import cors from 'cors';

import  audiobooksRouter from './routes/audiobooks.js';
import  reviewsRouter from './routes/reviews.js';
 
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://audio-book-system-full-stack.vercel.app'  
}));
app.use('/api/audiobooks', audiobooksRouter);
app.use('/api/reviews', reviewsRouter);
app.get('/' , (req,res)=>{
  console.log("Backend Working as Expected")
  res.send('Backend Working as Expected');

})

mongoose.connect(config.mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
