const schema = require('../model/schema');
const fs = require("fs");
const Admin = require('../model/schema');
const path = require('path');

module.exports.login = (req, res) => {
    res.render('logIn');
};

module.exports.logOut = (req, res) => {
    res.clearCookie("adminData");
    res.redirect("/");
}

module.exports.userLogIn = async (req, res) => {
    console.log(req.body.email);
    let admin = await Admin.findOne({ email: req.body.email });
    console.log(admin);
    if (admin) {
        if (admin.password === req.body.password) {
            res.cookie("adminData", admin);
            res.redirect('/dashBoard');
        } else {
            res.redirect('/');
        }
    }
    else {
        res.redirect('/');
    }
}

module.exports.Admin = (req, res) => {
    if (req.cookies && req.cookies.adminData) {
        res.render("dashBoard");
    } else {
        res.redirect("/");
    }
}

module.exports.addAdmin = (req, res) => {
    if (req.cookies && req.cookies.adminData) {
        res.render('addAdmin');
    } else {
        res.redirect("/");
    }
}

module.exports.addAdminData = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    req.body.image = req.file.path;
    await Admin.create(req.body).then((data) => {
        res.redirect("/viewAdmin");
    });
};

module.exports.viewAdmin = async (req, res) => {
    if (req.cookies && req.cookies.adminData) {
        const data = await Admin.find();
        res.render('viewAdmin', { data });
    } else {
        res.redirect('/');
    }
}

module.exports.deleteAdmin = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id).then((data) => {
        res.redirect('/viewAdmin');
    });
}

module.exports.updateAdminPage = async (req, res) => {
    let data = await schema.findById(req.query.id);
    res.render('updateAdmin', { data });
};

module.exports.updateAdmin = async (req, res) => {
    let img = "";
    let singleData = await Admin.findById(req.body.id);
    req.file ? img = req.file.path : img = singleData.image;
    req.file && fs.unlinkSync(singleData.image);
    req.body.image = img;
    let data = await Admin.findByIdAndUpdate(req.body.id, req.body);
    data && res.redirect('/viewAdmin');
};