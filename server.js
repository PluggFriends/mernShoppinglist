const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json()); //Bodyparser Middleware

const db = require('./config/keys').mongoURI; //database connection string located in ./config/keys

mongoose //connect to mongoDB
    .connect(db, {
        useNewUrlParser: true, //avoid DeprecationWarning
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000; //or port 5000
app.listen(port, () => console.log(`Server started on ${port}`));





//FATTAR EJ:
// env - const port = process.env.PORT || 5000;
// app.use('/api/items', items);

