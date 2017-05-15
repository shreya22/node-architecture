// import all required dependencies
let deferred = require('../lib/common-utils/deferred');
let moment = require('moment-timezone');
let lodash = require('lodash');

let testRepo= require('../models/repo').testRepo;
let testObj= new testRepo();

class TestAPI {

    testApi(){
        return testObj.test();
    }
}

module.exports= TestAPI;