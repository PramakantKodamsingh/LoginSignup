import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
// mongodb connect
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(chalk.bgYellow(`Server is running in http://localhost:${port}`));
});
