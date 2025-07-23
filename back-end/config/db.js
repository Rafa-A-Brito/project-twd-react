import "dotenv/config";
import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Conexão BEM-SUCEDIDA com o MongoDB 👌");
  } catch (error) {
    console.log("Conexão MAL-SUCEDIDA com o MongoDB ❌", error);
  }
};
