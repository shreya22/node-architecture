/**
 * Created by shreya on 15/5/17.
 */

let mongoose = require("mongoose");
let mongoConnection = require('../mongoConn').connection;
let fn = require('../../lib/common-utils/functions');
let deferred = require('../../lib/common-utils/deferred');

mongoose.Promise = global.Promise;
let karmyoDB= mongoConnection.useDb("karmyoDB");

let testSchema= mongoose.Schema({
    name: String
}, {strict: false});

let testModel= karmyoDB.model("testCollection", testSchema, "testCollection");

class TestRepo{

    test(){
        let query= {name: "test"};
        return fn.defer(testModel.create, testModel)(query);
    }
}

module.exports= TestRepo;

