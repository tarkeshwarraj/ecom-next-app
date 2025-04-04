import mongoose from "mongoose";


const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://tarkeshwarraj:1aozQW1CehU51D5E@cluster0.9apdlwv.mongodb.net/blogCollection'); // Where we provide collection name
    console.log("DB Connected")
}

export default ConnectDB;