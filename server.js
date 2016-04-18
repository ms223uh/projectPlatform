var express = require("express");
var app = express();
app.set("view engine", "ejs");
var fs = require("fs");
var fileName = "foo.txt";
var fileName2 = "bar.txt";



//Index
app.get('/', function(req, res) {
     res.render('pages/index');
});
//About
app.get("/projects", function (req, res) {
    
    
    var data = fs.readFileSync(fileName, "utf8");
    console.log(data);
    var data2 = fs.readFileSync(fileName2, "utf8");
    console.log(data2);
    
   var project = [
        { ID: data},
        { ID: data2}
    ];
    res.render("pages/projects", {
        project: project
    });
    
    
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
        { ID: 'EJS', messages : 5 },
        { ID: 'Express', messages : 10 }
    ];
    res.render("pages/messages", {
        message: message
    });
});



app.listen(8080);
console.log("listening on port 8080! GG WP");