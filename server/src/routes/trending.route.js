import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/:media", async (req, res) => {
  const { media } = req.params;

  const url = `https://api.themoviedb.org/3/trending/${media}/day`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    res.send(response.data);
  } catch (error) {
    console.log("Trending movies error: " + error);
    res.status(404).send("Failed to get trending movies");
  }
});

export default router;
