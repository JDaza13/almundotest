const Promise = require('promise');
const hotelDao = require('../daos/hotelDao');

//Service methods

const filterHotels = function(params){
    
    let result = [];
    
    //fix null queryParam
    if(params.name && params.name === 'null'){
        params.name = null;
    }
    //fix array for stars
    if(params.stars && !Array.isArray(params.stars)){
        params.stars = [params.stars];

    }
    if(params.stars && Array.isArray(params.stars)){
        //cast array of stars to Number
        params.stars = params.stars.map(Number);
    }
    
    return hotelDao.fetchHotels(params);
}

const insertHotels = function(hotelArray) {
  return hotelDao.createHotels(hotelArray);  
};

const editHotel = function(hotelData, hotelId) {
  return hotelDao.editHotel(hotelData, hotelId);  
};

const removeHotel = function(hotelId) {
  return hotelDao.deleteHotel(hotelId);  
};

//Service exports

exports.getHotels = function (params) {

    return filterHotels(params);
};

exports.putHotels = function (hotels) {
    return insertHotels(hotels);
};

exports.updateHotel = function (hotelData, hotelId) {
    return editHotel(hotelData, hotelId);
};

exports.deleteHotel = function (hotelId) {
    return removeHotel(hotelId);
};