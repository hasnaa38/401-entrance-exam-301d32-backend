'use strict';

const mongoose = require('mongoose');

const watchSchema = mongoose.Schema({
    title: String,
    description: String,
    price: String,
    image: String,
    email: String
});

const WatchModel = mongoose.model('watches', watchSchema);

const seederFunction = () => {
    let seedWatch = new WatchModel({
        title: 'Black watch',
        description: 'A black watch',
        price: '380',
        image: 'https://i.pinimg.com/736x/e7/98/4b/e7984bd42e79ecc54d4bd11b13c3d532--mens-designer-watches-uniform-wares.jpg',
        email: 'v.salvatore7.gs@gmail.com'
    });
    seedWatch.save();
}

// module.exports = seederFunction;
module.exports = WatchModel;