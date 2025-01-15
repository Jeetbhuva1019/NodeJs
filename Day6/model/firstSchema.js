const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    auther: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
});
const firstSchema = mongoose.model("book", schema);
module.exports = firstSchema;