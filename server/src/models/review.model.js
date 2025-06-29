import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
  review: String,
  rating: Number,
});

const Review = mongoose.model("Review", reviewSchema);
export { Review, reviewSchema };
