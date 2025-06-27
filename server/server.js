import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/config/database/mongoose.config.js";

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes

// Server
app.listen(PORT, () => {
  console.log("Server has started");
  connectToDatabase();
});
