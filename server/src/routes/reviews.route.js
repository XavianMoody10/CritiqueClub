import { Router } from "express";
import { Review } from "../models/review.model.js";
import { Media } from "../models/media.model.js";

const router = Router();

router.post("/", async (req, res) => {
  const { mediaId, review, rating } = req.body;

  try {
    const doesMediaDocExist = await Media.findOne({ mediaId });

    if (doesMediaDocExist) {
      const updatedMediaDoc = await Media.findOneAndUpdate(
        { mediaId },
        { $push: { reviews: { review, rating } } },
        { new: true }
      );

      return res.send(updatedMediaDoc);
    }

    await Media.create({ mediaId });
    const newReviewDoc = await Review.create({ review, rating });

    const updatedMediaDoc = await Media.findOneAndUpdate(
      { mediaId },
      { $push: { reviews: newReviewDoc } },
      { new: true }
    );

    return res.send(updatedMediaDoc);
  } catch (error) {
    console.log("POST Review Error: " + error);
    res.status(404).send("Error posting review");
  }
});

router.get("/:mediaId", async (req, res) => {
  const { mediaId } = req.params;
  try {
    const doesMediaDocExist = await Media.findOne({ mediaId });

    if (!doesMediaDocExist) {
      return res.status(404).send("No reviews...yet");
    }

    const mediaDoc = await Media.findOne({ mediaId });
    res.send(mediaDoc);
  } catch (error) {
    console.log("GET Review Error: " + error);
    res.status(404).send("Error getting reviews");
  }
});

export default router;
