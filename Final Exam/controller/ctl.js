const schema = require("../model/Schema");

module.exports.register = async (req, res) => {
  res.render("Register");
};

module.exports.login = async (req, res) => {
  res.render("login");
};

module.exports.dashboard = async (req, res) => {
  res.render("dashboard");
};

module.exports.addRegister = async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;
    if (!name || !mobile || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    const existingUser = await schema.findOne({});
    if (existingUser) {
      return res.redirect("/dashboard");
    }
    await schema.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error adding data to Mongoose:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }

    const user = await schema.findOne({ email, password });
    if (!user) {
      return res.redirect("/login");
    }

    res.redirect("/dashboard");
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
};
