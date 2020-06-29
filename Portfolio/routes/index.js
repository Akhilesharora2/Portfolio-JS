'use strict';
var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'Express' });
});

router.get('/services', function (req, res) {
    res.render('services', { title: 'Express' });
});

router.get('/project', function (req, res) {
    res.render('project', { title: 'Express' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Express' });
});
//app.get('/contact', function (req, res) {
//    console.log("woring");
//    res.render('contact', { title: 'Express' });
//});

//app.get('/project', function (req, res) {
//    res.render('project', { name: 'akhil' });
//});

module.exports = router;
