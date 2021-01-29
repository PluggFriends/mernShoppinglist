const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());


//database config that you have in ./config/keys

const db = require('./config/keys').mongoURI;

//connect to mongo
 
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
       console.error(err);
    else
       console.log("Connected to the mongodb"); 
  });

 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

