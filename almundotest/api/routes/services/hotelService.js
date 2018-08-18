const Promise = require('promise');
const hotelDao = require('../daos/hotelDao');

let filterHotels = function(params){
    
    let result = [];
    
    //fix null queryParam
    if(params.name && params.name === 'null'){
        params.name = null;
    }
    //fix array for stars
    if(params.stars && !Array.isArray(params.stars)){
        params.stars = [params.stars];
    }
    //cast array of stars to Number
    params.stars = params.stars.map(Number);

    return hotelDao.fetchHotels(params);
}

exports.getHotels = function (params) {

    return filterHotels(params);
};