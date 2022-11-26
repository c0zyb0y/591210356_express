var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.status(200).json({
    Fullname:'Phupha Noppakun'
  })
});
router.get('/bio', function(req, res, next) {
  res.status(200).json({
    Fullname:'Phupha Noppakun',
    nickname:'PooH',
    hobby:'Sleep',
    gitusername:'c0zyb0y'
  })
});


module.exports = router;
