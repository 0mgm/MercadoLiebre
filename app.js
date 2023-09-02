const express = require("express")
const path = require("path")
const port = process.env.PORT || 5000;
const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => console.log("El servidor esta andando en el puerto " + port))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})


app.post("/procesarregistro", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})