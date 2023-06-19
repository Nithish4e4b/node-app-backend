const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const  booksRoute = require('./routes/books');
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());

app.use('/books', booksRoute);
// app.use((req, res, next) => {
//     console.log("I'm a middleware!!");
//     next();//route
// })

mongoose.connect('mongodb+srv://4e4b:Nithi4e4b@4e4bdb.vaxfwzd.mongodb.net/?retryWrites=true&w=majority');

const con = mongoose.connection; //to get the connection status

app.use('/books', booksRoute);

try {
    con.on("open", () => {
      console.log("MongoDB connected!!!!");
    });
  } catch (error) {
    console.log("Error: " + error);
  }

app.get('/', (req, res) => {
    res.send("Hello all!!!!");
})
app.get('/Welcome', (req, res) => {
    res.send("Hello all Welcome to this page!!");
})

app.listen(4000);