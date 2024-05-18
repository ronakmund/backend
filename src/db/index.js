import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const connectDb = async () => {
    try {
        const connectionString = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log('DB connected to host: ', connectionString.connection.host);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
