import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/:media", async (req, res) => {
  const { media } = req.params;

  const url = `https://api.themoviedb.org/3/genre/${media}/list`;

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
    console.log("Movie genres: " + error);
    res.status(404).send("Error getting movie genres");
  }
});

export default router;
