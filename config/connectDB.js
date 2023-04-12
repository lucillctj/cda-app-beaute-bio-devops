import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (err){
        console.error("Error to connect database");
    }
};

export default connectDB;