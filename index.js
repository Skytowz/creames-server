const express = require("express");
const port = 3001;
const app = express();
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const mongoose = require("mongoose");

const game = require("./services/GameService");

/** MONGOOSE SETUP */
const url = 'mongodb://127.0.0.1:27017/creames'
mongoose.connect(url, {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', _ => {
    console.log('Database connected:', url);
})

db.on('error', err => {
    console.error('connection error:', err);
})

module.exports.db = db;

/** EXPRESS ROUte */

app.get('/',  (req,res) => {
    res.send("Hello World");
})

app.use('/games', game);

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})