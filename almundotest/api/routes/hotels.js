var path = require('path');
var express = require('express');
var router = express.Router();

var fs = require('fs');

var hotels = null;

fs.readFile(path.join(__dirname, 'hotels.json'), (err, data) => {  
    if (err) throw err;
    hotels = JSON.parse(data);
});

/* GET hotels listing. */
router.get('/', function(req, res, next) {
  res.send(hotels);
});

module.exports = router;
