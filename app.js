const express = require('express')
const mongoose = require('mongoose')
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")

const app = express()

const PORT = 8080

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname, "/public")))

app.engine("ejs", ejsMate)

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/profile", (req, res) => {
    res.render("profile.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})
