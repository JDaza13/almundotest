const express = require('express');
const router = express.Router();
const Promise = require('promise');

const hotelService = require('./services/hotelService');

/* GET hotels listing. */
router.get('/get-hotels', function(req, res, next) {
  
  try{
    let hotelsResult = hotelService.getHotels(req.query);
    
    hotelsResult
      .then(function(data){
        res.send(data);
      })
      .catch(function(err){
        res.status(500).send('Caught error fetching hotels.', err);
      });
  }
  catch(err){
    res.status(500).send('Caught error fetching hotels.', err);
  }
});

router.put('/create-hotels', function(req, res, next) {
  
  try{
    if(req.body.hotelArray){
      let hotelsPutResult = hotelService.putHotels(req.body.hotelArray);
      
      hotelsPutResult
        .then(function(data){
          res.send(data);
        })
        .catch(function(err){
          res.status(500).send('Caught error creating hotels.', err);
        });
    }
    else{
      res.status(400).send('Invalid request for creation of hotels.');
    }
  }
  catch(err){
    res.status(500).send('Caught error creating hotels.', err);
  }
});

router.post('/edit-hotel/:hotelId', function(req, res, next) {
  
  try{
    let hotelEditResult = hotelService.updateHotel(req.body, req.params.hotelId);
      
    hotelEditResult
      .then(function(data){
        res.send(data);
      })
      .catch(function(err){
        res.status(500).send('Caught error editing a hotel.', err);
      });
  }
  catch(err){
    res.status(500).send('Caught error editing a hotel.', err);
  }
});

router.delete('/delete-hotel/:hotelId', function(req, res, next) {
  
  try{
    let hotelDeleteResult = hotelService.deleteHotel(req.params.hotelId);
      
    hotelDeleteResult
      .then(function(data){
        res.send(data);
      })
      .catch(function(err){
        res.status(500).send('Caught error deleting a hotel.', err);
      });
  }
  catch(err){
    res.status(500).send('Caught error deleting a hotel.', err);
  }
});

module.exports = router;