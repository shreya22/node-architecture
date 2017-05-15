/**
 * Created by shreya on 15/5/17.
 */

let fn = require('../common-utils/functions');
let deferred = require('../common-utils/deferred');

let isAuthorised= function (header) {
    var apiKey= header.apiKey || "";
    if (apiKey === "#letsKarmyo") {
        return deferred.success({authorised: true});
    }
    else{
        return deferred.failure({auhorised:false});
    }
};

module.exports= {
    isAuthorised: isAuthorised()
};