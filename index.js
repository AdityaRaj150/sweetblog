const express = require("express")
require("dotenv").config()

const app = express();
var blogList = []

const port = process.env.PORT || 3000
app.use(express.static("public"));  
app.use(express.json());
app.get("/", (_, res) => {
    blogList = [];
    res.render("index.ejs");
})

app.post("/add", (req, res) => {
    var content = req.body.message;
    blogList.push(content);
    res.render("index.ejs", {allBlogs: blogList});
} )
app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
})