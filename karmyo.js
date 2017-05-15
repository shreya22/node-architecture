/**
 * Created by shreya on 15/5/17.
 */

let debug = require('debug');
let app = require('./app');
let config = require('config');

app.set('port', process.env.NODE_PORT || config.karmyo.port || 7777);

let server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
    console.logger.debug('Express server listening on port ' + server.address().port);
});