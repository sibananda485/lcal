const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
first:String,
last:String
});

module.exports = mongoose.model("candidate",candidateSchema)