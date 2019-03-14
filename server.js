const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const items = require("./routes/api/items");
const recipes = require("./routes/api/recipes");

// var formidable = require("formidable");
// var fs = require("fs");
// var grid = require("gridfs-stream");
// var multer = require("multer");

// require('dotenv').config();

const app = express();
// const routes = require('./routes/api/index');

//Middleware
app.use(express.json());
app.use(cors());

//DB Config
const db = require("./config/keys").mongoURI;

mongoose.Promise = global.Promise;
// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use("/items", items);
app.use("/recipes", recipes);
// app.use("/image", image, function() {
//     var img = multer({ inMemory: true });
//     a.img.data = img.buffer;
//     a.save(cb);
//   });

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//defined as an environmental variable for Heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
