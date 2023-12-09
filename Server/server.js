const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");

const errorHandler = require("./middleware/errorHandler.js");

const cors = require("cors");
// const { default: connectDB } = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const shoes = require("./routes/shoes");

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/v1/shoes", shoes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
  )
);
