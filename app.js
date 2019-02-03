var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var path = require('path');
var router = express.Router();
var port = 3000;

//route for index page
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //var title = "Welcome to the GameApp Page";
});

//route for list page
router.get('/list', function(req,res){
    res.sendFile(path.join(__dirname+'/list.html'));
});

//route for login page
router.get('/login', function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
});

//sets up server
app.use('/', router);
app.listen(port, function(){
console.log("Server is running on Port " + port);
});
