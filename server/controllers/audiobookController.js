import Audiobook from '../models/Audiobook.js';

export const getAllAudiobooks = async (req, res) => {
    try {
        const audiobooks = await Audiobook.find({});
        res.json(audiobooks);
      } catch (error) {
        res.status(500).send(error.toString());
      }
};

export const getAudiobookById = async (req, res) => {
  try {
    // const _id = req.params.id;
    // console.log(_id);
    const audiobook = await Audiobook.findById(req.params.id);
    if (!audiobook) {
      return res.status(404).send('Audiobook not found');
    }
    res.status(201).json(audiobook);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

export const postAddAudioBook = async (req, res) => {
  try {
    const { title, author, coverimage, genre,rating, publishedDate, description } = req.body;
    const newAudiobook = new Audiobook({
      title: title,
      author:author,
      coverimage:coverimage,
      genre:genre,
      rating:rating,
      publishedDate:publishedDate,
      description:description
    });
    await newAudiobook.save();
    res.status(201).json(newAudiobook);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};