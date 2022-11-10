import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "config";

dotenv.config({ path: `env/.env.${process.env.NODE_ENV}` });

const app = express();
const port = config.port;

app.use(morgan(`${config.env === "production" ? "combined" : "dev"}`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});
