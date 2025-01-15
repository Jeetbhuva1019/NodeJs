const http = require("http");
const port = 1090;

const portHandle = (req,res) => {
    res.write("<h1>Server Started</h1>");
    res.end();
};

const server = http.createServer(portHandle);

server.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on Port : " + port);


});