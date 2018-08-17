var express = require('express');
var router = express.Router();

var hotelService = require('./services/hotelService');

/* GET hotels listing. */
router.get('/get-hotels', function(req, res, next) {
  
  var hotelsResult = hotelService.getHotels(req.query);
  res.send(hotelsResult);
});

module.exports = router;