var express = require('express');
var News = require('../db/models').News;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    News.findAll({where:{servicetype:2},limit:1000,order: 'publishtime DESC'}).then(function(news){
      res.render('index',{
        news:news,
        title:'训练鹰眼'
      });
    });
});

//修正正负面
router.get('/:id/correctNews/:type',function(req,res){
  var id = req.params.id;
  var type = parseInt(req.params.type);
  News.findOne({where:{id:id}}).then(function(news){
    news.adjust_bond_rate = type;
    news.save();
  }).catch(function(err){
    console.log(err);
  });
});

module.exports = router;
