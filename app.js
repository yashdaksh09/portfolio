const express = require("express");
const app = express();
const port = 2305;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("boilerplatecode");
});

app.listen(port, () => {
    console.log("listening to port 2305");
});