import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bibleRoutes from "./routes/bible"; // Adjust the import path as necessary
import personalizationRoutes from "./routes/personalization"; // Adjust the import path as necessary

const app = express();
const PORT = process.env.PORT_NUMBER

app.use(cors());
app.use(express.json());
app.use("/api", bibleRoutes);
app.use("/api", personalizationRoutes);
app.post("/api/test", (req, res) => {
  res.json({ message: "Test route working." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
