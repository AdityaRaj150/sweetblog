import express from "express";
import bodyParser from "body-parser";
import exp from "constants";

const app = express();
const port = 3001;
var blogList = []

app.use(express.static("public"));  

app.get("/", (req, res) => {
    blogList = [];
    res.render("index.ejs");
})

app.use(bodyParser.urlencoded({extended: true}));
app.post("/add", (req, res) => {
    var content = req.body.message;
    blogList.push(content);
    res.render("index.ejs", {allBlogs: blogList});
} )
app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
})