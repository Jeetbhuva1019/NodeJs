const express = require("express");
const port = 1008;

const app = express();

let Books = [];

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.post("/addData", (req, res) => {
    req.body.id = String(Date.now());
    Books.push(req.body);
    res.redirect("/");
})

app.get("/editData/:id", (req, res) => {
    let singleData = Books.find((item) => item.id == req.params.id)
    res.render("edit", { singleData});
})

app.get("/deleteData", (req, res) => {
    let deleteRecord = Books.filter((e) => e.id !== req.query.id)
    Books = deleteRecord;
    res.redirect("/");
})

app.post("/updateData", (req, res) => {
    Books.map((e, i) => {
        if (e.id == req.body.id) {
            (e.id = req.body.id),
                (e.name = req.body.name),
                (e.auther = req.body.auther),
                (e.date = req.body.date),
                (e.price = req.body.price)
        }
    })
    res.redirect("/");
})

app.get("/", (req, res) => {
    res.render("index", { Books });
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started On Port : " + port);

})