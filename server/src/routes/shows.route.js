import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/list/:list/:page", async (req, res) => {
  const { list, page } = req.params;

  const url = `https://api.themoviedb.org/3/tv/${list}`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      language: "en-US",
      page: page || 1,
    },
  };

  try {
    const response = await axios.get(url, options);
    res.send(response.data);
  } catch (error) {
    console.log("Shows list: " + error);
    res.status(404).send(`Error getting shows`);
  }
});

router.get("/details/:id", async (req, res) => {
  const { id } = req.params;

  const url = `https://api.themoviedb.org/3/tv/${id}`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      language: "en-US",
    },
  };

  try {
    const response = await axios.get(url, options);
    res.send(response.data);
  } catch (error) {
    console.log("TV Show details: " + error);
    res.status(404).send(`Error getting TV show details`);
  }
});

export default router;
