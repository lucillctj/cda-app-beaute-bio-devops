import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://lucillectj:x2oIUIJzmAwknezT@cda.o4hdy5x.mongodb.net/cda-app-beaute-bio");
        console.log("DB Connected");
    } catch (err){
        console.error("Error to connect database");
    }
};

export default connectDB;