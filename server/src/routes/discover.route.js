import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/:media/:with_genres/:page", async (req, res) => {
  const { media, with_genres, page } = req.params;

  const url = `https://api.themoviedb.org/3/discover/${media}`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      with_genres,
      page,
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
