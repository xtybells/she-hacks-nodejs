const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/main-router");
const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://christy:christy123@cluster0-krqf5.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    console.log(err);  
  }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

//create a default route(404)(7)
app.use("*", (req, res) => {
  res.status(404).send("<h1>404, page not found</h1>");
});
//attach the server to a port(1)
//go to the browser and type the port(2)
app.listen(process.env.PORT || 3000, () => {
  console.log("server running at port:3000");
});
