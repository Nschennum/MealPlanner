const express = require("express");
const mongoose = require("mongoose");
const config = require('config');
const path = require("path");

// var formidable = require("formidable");
// var fs = require("fs");
// var grid = require("gridfs-stream");
// var multer = require("multer");

// require('dotenv').config();

const app = express();
// const routes = require('./routes/api/index');

//Middleware
app.use(express.json());


//DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Routes
app.use('/api/items', require('./routes/api/items'));
app.use('api/recipes', require('./routes/api/recipes'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));