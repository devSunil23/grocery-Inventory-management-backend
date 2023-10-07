import mongoose from "mongoose";

const connectToDataBase = async () => {
  const url = `mongodb://localhost:27017/grocery`;
  try {
    await mongoose.connect(url);
    console.log("database connected successfully !");
  } catch (error) {
    console.log(error);
  }
};
export default connectToDataBase;
