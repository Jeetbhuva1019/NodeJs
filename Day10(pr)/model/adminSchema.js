const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true
    },
    hobby : {
        type : [String],
        require : true
    },

})


const Admin = mongoose.model('New_Admin_Panel',adminSchema);

module.exports = Admin;