const express = require("express");
const cors = require("cors");

const database = require("./database/db");
const noiseRoute = require("./routes/noise.router")
const app = express();

const port = process.env.PORT || 4000;

database();
app.use(cors());
app.use(express.json());

app.use("/api", noiseRoute)

app.listen(port, () => {
  console.log(`Server is Running on ${port} ...`);
});