var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    bio: String,
    quote: String 
})

module.exports = mongoose.model("TodoApp", todoSchema);