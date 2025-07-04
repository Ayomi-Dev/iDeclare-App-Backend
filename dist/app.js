import express from "express";
import cors from "cors";
// Make sure the file exists at the specified path, or update the path if necessary
import bibleRoutes from "./routes/bible";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api", bibleRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
