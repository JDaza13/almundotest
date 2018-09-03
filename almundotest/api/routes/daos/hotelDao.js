const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const assert = require('assert');
const Promise = require('promise');

const envs = require('../../enviroments/envs');


const url = envs.getSelEnv().env.DBSettings.mongodburl;
const dbName = envs.getSelEnv().env.DBSettings.dbName;
const hotelsCollection = envs.getSelEnv().env.DBSettings.collectionName;
const connectParser = { useNewUrlParser: true };

//DAO methods

const findHotels = function(db, callback, params) {

    let query = {};
    
    if(params.name){
        query['name'] = { '$regex': params.name, '$options': 'i'};
    }
    if(params.stars){
        query['stars'] = { $in: params.stars }
    }

    const collection = db.collection(hotelsCollection);
    collection.find(query).toArray(function(err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const insertHotels = function(db, callback, hotelArray) {

    const collection = db.collection(hotelsCollection);

    collection.insertMany(hotelArray, function(err, result) {
        assert.equal(null, err);
        callback(result);
    });
}

const editHotel = function(db, callback, hotelData, id) {

    const collection = db.collection(hotelsCollection);
    let o_id = new mongo.ObjectID(id);

    collection.updateOne({ '_id' : o_id }, { $set: hotelData }, function(err, result) {
        assert.equal(null, err);
        callback(result);
    });
}

const removeHotel = function(db, callback,  id) {

    const collection = db.collection(hotelsCollection);
    let o_id = new mongo.ObjectID(id);

    collection.deleteOne({ '_id' : o_id }, function(err, result) {
        assert.equal(null, err);
        callback(result);
    });
}

//DAO exports

exports.pingDB = function (){
    
    return new Promise(function(resolve,reject) {
    
        MongoClient.connect(url, connectParser, function(err, client) {
            assert.equal(null, err);
            resolve("Connected successfully to server.");
            client.close();
        });
    
    });
}

exports.fetchHotels = function (params) {

    return new Promise(function(resolve,reject) {
        
        MongoClient.connect(url, connectParser, function(err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            
            findHotels(db, function(docs) {
                resolve(docs);
                client.close();
            }, params);
        });
    });

};

exports.createHotels = function (hotels) {

    return new Promise(function(resolve,reject) {
        
        MongoClient.connect(url, connectParser, function(err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            
            insertHotels(db, function(result) {
                resolve(result);
                client.close();
            }, hotels);
        });
    });

};

exports.editHotel = function (hotelData, hotelId) {

    return new Promise(function(resolve,reject) {
        
        MongoClient.connect(url, connectParser, function(err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            
            editHotel(db, function(result) {
                resolve(result);
                client.close();
            }, hotelData, hotelId);
        });
    });

};

exports.deleteHotel = function (hotelId) {

    return new Promise(function(resolve,reject) {
        
        MongoClient.connect(url, connectParser, function(err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            
            removeHotel(db, function(result) {
                resolve(result);
                client.close();
            }, hotelId);
        });
    });

};
