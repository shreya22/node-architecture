
let express = require('express');
let router = express.Router();

let fn = require('../lib/common-utils/functions');
let testAPI = require('../controllers/testAPI');
let apiObj= new testAPI();

let moment = require('moment-timezone');

function callAPI(req, res, apiMethod) {
    let params = {};
    params = req.params;
    params.headers = req.headers;
    if (req.method.toLowerCase() !== "get") {
        params.post = req.body;
    }

    params.query = req.query;
    params.middlewareStorage = req.middlewareStorage;

    apiMethod(params)
        .success(function (result) {
            res.send(result);
        })
        .failure(function (error) {
            console.logger.error(error);
            if (!(Object.prototype.toString.call(error) === '[object Object]')) {
                error = {success: false, error: error};
            }
            console.logger.error(error);
            res.status(500).send(error);
        });
}

router.get('/test', function (req, res) {
    callAPI(req, res, fn.bind(apiObj, 'testApi'));
});

module.exports= router;

