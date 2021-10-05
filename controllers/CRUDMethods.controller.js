'use strict';

let WatchModel = require('../models/Watch.models');

// POST (like)
const likeWatch = async (req, res) => {
    let watchData = req.body;
    let newWatch = new WatchModel({
        title: watchData.title,
        description: watchData.description,
        price: watchData.price,
        image: watchData.image,
        email: watchData.email
    });
    await newWatch.save();
    res.status(200).send('Liked successfully');
}
// GET (all email likes)
const getLikes = async (req, res) => {
    let email = req.query.email;
    WatchModel.find({ email: email }).then(likes => {
        res.status(200).json(likes);
    }).catch(error => {
        res.status(400).send('an error occurred');
    })
}
// PUT (edit)
// data in body, id in param, user email in query to get the new version 
const editWatch = async (req, res) => {
    let id = req.params.id;
    let email = req.query.email;
    let watchData = req.body;
    await WatchModel.findByIdAndUpdate(id, {
        title: watchData.title,
        description: watchData.description,
        price: watchData.price,
        image: watchData.image,
        email: email
    });
    WatchModel.find({ email: email }).then(likes => {
        res.status(200).json(likes);
    }).catch(error => {
        res.status(400).send('an error occurred');
    })
}
// DELETE (delete)
// id and email
const dislikeWatch = async (req, res) => {
    let id = req.params.id;
    let email = req.query.email;
    await WatchModel.findByIdAndRemove(id);
    WatchModel.find({ email: email }).then(likes => {
        res.status(200).json(likes);
    }).catch(error => {
        res.status(400).send('an error occurred');
    })
}

module.exports = { likeWatch, getLikes, editWatch, dislikeWatch };