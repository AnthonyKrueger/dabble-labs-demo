const { Schema, model } = require('mongoose');

const popSchema = new Schema({
    country: {
        type: String
    },
    year: {
        type: Number
    },
    area: {
        type: Number
    },
    population: {
        type: Number
    }
})

const PopData = model('PopData', popSchema);

module.exports = { PopData };