import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDb = async () => {
    try{
        console.log("URL> ",`${process.env.MONGODB_URL}/${DB_NAME}`)
        const connectionString = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("DB connected", connectionString)
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}