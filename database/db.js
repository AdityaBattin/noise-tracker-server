require("dotenv").config();
const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DataBase Connected..");
    })
    .catch((error) => {
      console.error("DataBase Connection Error ( CHECK YOUR INTERNET ) : " + error);
    });
};

module.exports = database;