const express = require('express');
const route = express.Router();
const ctl = require('../controller/clt');
const multer = require('../middleware/multer');

route.get('/', ctl.login);
route.get('/logOut', ctl.logOut);
route.post('/logIn', ctl.userLogIn);
route.get('/dashBoard', ctl.Admin);
route.get('/viewAdmin', ctl.viewAdmin);
route.get('/addAdmin', ctl.addAdmin);
route.post('/addAdmin', multer, ctl.addAdminData);
route.get('/deleteAdmin', ctl.deleteAdmin);
route.get('/updateAdminPage', ctl.updateAdminPage);
route.post('/updateAdmin', multer, ctl.updateAdmin);

module.exports = route;