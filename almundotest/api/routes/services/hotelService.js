var fs = require('fs');
var path = require('path');

var hotels = null;

fs.readFile(path.join(__dirname, '../hotels.json'), (err, data) => {  
    if (err) throw err;
    hotels = JSON.parse(data);
});

var filterHotels = function(params){
    
    var result = hotels;
    
    //fix null queryParam
    if(params.name && params.name === 'null'){
        params.name = null;
    }
    //fix array for stars
    if(params.stars && !Array.isArray(params.stars)){
        params.stars = [params.stars];
    }
    
    //Search way too vanilla
    if(params.name){
        result = hotels.filter(function (e) {
            return e.name.toLowerCase().indexOf(params.name.toLowerCase()) >= 0;
        });
    }
    if(params.stars && Array.isArray(params.stars) && result.length > 0){
        result = result.filter(function (e) {
            return params.stars.indexOf(e.stars+'') >= 0;
        });
    }
    
    return result;
}

exports.getHotels = function (params) {

    return filterHotels(params);
};