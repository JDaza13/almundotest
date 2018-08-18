const express = require('express');
const router = express.Router();
const Promise = require('promise');

const hotelService = require('./services/hotelService');

/* GET hotels listing. */
router.get('/get-hotels', function(req, res, next) {
  
  let hotelsResult = hotelService.getHotels(req.query);
  
  hotelsResult
    .then(function(data){
      res.send(data);
    })
    .catch(function(err){
      res.status(500).send('Caught error fetching hotels.');
    });
});

module.exports = router;