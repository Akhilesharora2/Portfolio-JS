'use strict';
var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/akhil', function (req, res) {
    res.render('about', { title: 'Express' });
});

app.get('/contact', function (req, res) {
    console.log("woring");
    res.send('contact');
});

//app.get('/project', function (req, res) {
//    res.render('project', { name: 'akhil' });
//});

module.exports = router;
