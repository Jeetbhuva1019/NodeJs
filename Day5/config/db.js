const mongoose = require("mangoose");
mongoose.connect("mongoose://127.0.0.1/");
const db = mongoose.connection;
db.once('open', (err) => {
    err ? console.log(err) : console.log("Server Started");
});
module.exports = db;