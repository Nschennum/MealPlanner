const express = require('express'); 
const mongoose = require('mongoose'); 

const items = require('./routes/api/items');

const app = express(); 
//Middleware
app.use(express.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/items', items);

//defined as an environmental variable for Heroku
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server started on port ${port}`)); 