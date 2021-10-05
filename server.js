' use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGODB}`, { useNewUrlParser: true }); //check
let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

// testing endpoint
app.get('/test', (req, res) => {
    res.status(200).send('working');
})

// api data
let getAPIData = require('./controllers/APIData.controller');
app.get('/api-data', getAPIData);

// seed function (.get)
// let seederFunction = require('./models/Watch.models');
// app.get('/seed', (req, res)=> {
//     seederFunction();
//     res.status(200).send('Seeded successfully')
// })

// CRUD methods
let { likeWatch, getLikes, editWatch, dislikeWatch } = require('./controllers/CRUDMethods.controller');
// POST (like) --- link: /like and a body
app.post('/like', likeWatch);
// GET (all email likes) --- link: /getLikes?email=EMAIL
app.get('/getLikes', getLikes);
// PUT (edit) --- link: /edit/id?email=EMAIL and a body
app.put('/edit/:id', editWatch);
// DELETE (delete) --- link: /dislike/id?email=EMAIL
app.delete('/dislike/:id', dislikeWatch);