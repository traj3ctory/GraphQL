const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorScema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model("Author", authorScema);