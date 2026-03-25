import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";

dotenv.config();

connectDB();

app.listen(5001, () => {
  console.log("Server running on port 5001");
});