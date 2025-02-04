const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = require("./app");

//linked .env file
dotenv.config({ path: "./config.env" });

//specified the port that application has been run
const port = process.env.PORT || 3007;

app.listen(port, () => {
  console.log(`app running on port ${port}...`);
  require("./dbconfig");
});
