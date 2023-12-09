const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold
    );
  } catch (err) {
    console.log(`${err}`.red);
  }
};

module.exports = connectDB;
