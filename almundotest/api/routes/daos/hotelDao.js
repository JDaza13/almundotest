const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Promise = require('promise');

const url = 'mongodb://almundouser:almundopass1@ds123532.mlab.com:23532/almundotest';
const connectParser = { useNewUrlParser: true };
const dbName = 'almundotest';
const hotelsCollection = 'hotels';

exports.pingDB = function (){
    MongoClient.connect(url, connectParser, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server.");
        client.close();
    });
}

exports.fetchHotels = function (params) {

    return new Promise(function(resolve,reject) {
        
        MongoClient.connect(url, connectParser, function(err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            
            findhotels(db, function(docs) {
                resolve(docs);
                client.close();
            }, params);
        });
    });

};

const findhotels = function(db, callback, params) {

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