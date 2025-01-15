const express = require("express");
const port = "1008";

const app = express();
const path = require("path");
const db = require("./config/db");

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    let data=schema.find({});
    res.render("index", { data });
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server is running on port : " + port);
});