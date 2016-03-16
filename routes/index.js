var express = require('express');
var News = require('../db/models').News;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    News.findAll({where:{servicetype:0,rate:-1},limit:1000,order: 'publishtime DESC'}).then(function(news){
      res.render('index',{
        news:news,
        title:'训练鹰眼'
      });
    });
});

module.exports = router;
