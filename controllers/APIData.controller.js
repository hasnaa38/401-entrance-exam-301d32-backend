'use strict';

let APIData = require('../models/APIData.model');
let axios = require('axios');

let getAPIData = async(req, res) => {
    axios.get('https://watches-world.herokuapp.com/watches-list/').then(res => {
        return res.data.map(item => {
            return new APIData(item.title, item.description, item.toUSD, item.image_url);
        })
    }).then(output => {
        res.status(200).json(output);
    }).catch(error => {
        res.status(400).send('an error occurred');
    })
}

module.exports = getAPIData;