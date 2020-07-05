const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//set up express app
const app = express();

//connect to mongoDB
mongoose.connect("mongodb://localhost/freelancer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

app.use(cors());

app.use(bodyParser.json());

//initialize routes
app.use("/api", require("./routes/api"));

//error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

//listen for request
app.listen(process.env.port || 3000, function () {
  console.log("now listening for request");
});
