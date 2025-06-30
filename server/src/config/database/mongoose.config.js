import mongoose from "mongoose";

async function connectToDatabase() {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.PRODUCTION_DATABASE
      : process.env.DEVELOPMENT_DATABASE;

  try {
    await mongoose.connect(url);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
}

export { connectToDatabase };
