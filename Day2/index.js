const express = require("express");
const port = 1008;

const app = express()

let Students = []

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.post("/addData", (req, res) => {
    req.body.id = String(Date.now());
    Students.push(req.body);
    res.redirect("/");
})

app.get("/deleteData", (req, res) => {
    let deleteRecord = Students.filter((e) => e.id !== req.query.id);
    Students = deleteRecord;
    res.redirect("/");
})

app.get("/editData/:id", (req, res) => {
    let singleData = Students.find((item) => item.id == req.params.id)
    res.render("edit", { singleData })
})

app.post("/updateData", (req, res) => {
    Students.map((e, i) => {
        if (e.id == req.body.id) {
            (e.id = req.body.id),
                (e.name = req.body.name),
                (e.city = req.body.city)
        }
    })
    res.redirect("/");
})

app.get("/", (req, res) => {
    res.render("index", { Students })
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on Port : " + port);

})