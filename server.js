var express = require("express");
var app = express();
app.set("view engine", "ejs");

//Index
app.get('/', function(req, res) {
     res.render('pages/index');
});
//About
app.get("/projects", function (req, res) {
    res.render("pages/projects");
});
//MyProjects
app.get("/myprojects", function (req, res) {
    res.render("pages/myprojects");
});
//CreateProjects
app.get("/createprojects", function (req, res) {
    res.render("pages/createprojects");
});
//Messages
app.get("/messages", function (req, res) {
     var message = [
        { ID: 'Node', messages : 3 },
        { name: 'EJS', messages : 5 },
        { name: 'Express', messages : 10 }
    ];
    res.render("pages/messages", {
        message: message
    });
});

app.listen(8080);
console.log("listening on port 8080! GG WP");