import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/config/database/mongoose.config.js";
import { initiateMockServiceWorker } from "./src/mocks/node.js";
import genresRoute from "./src/routes/genres.route.js";
import trendingRoute from "./src/routes/trending.route.js";
import moviesRoute from "./src/routes/movies.route.js";

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/genres", genresRoute);
app.use("/trending", trendingRoute);
app.use("/movies", moviesRoute);

initiateMockServiceWorker(); // Mock Service Worker

// Server
app.listen(PORT, () => {
  console.log("Server has started");
  connectToDatabase();
});
