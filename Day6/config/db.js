const {log}=require("console")
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/bookStore");

const db = mongoose.connection;

db.once('open', (err) => {
    err ? console.log(err) : console.log("Connected To MongoDB");
});
module.exports = db;