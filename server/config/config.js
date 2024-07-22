import dotenv from 'dotenv';
dotenv.config();

const config = {
    mongodbUrl: process.env.MONGODB_URL,
    // other config variables
};

export default config;
