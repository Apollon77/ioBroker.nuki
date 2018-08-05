/**
 *
 * nuki adapter
 *
 *
/* jshint -W097 */// jshint strict:false
/*jslint node: true */
'use strict';

// you have to require the utils module and call adapter function
var utils = require(__dirname + '/lib/utils'); // Get common adapter utils
var request = require('request');

// you have to call the adapter function and pass a options object
// name has to be set and has to be equal to adapters folder name and main file name excluding extension
// adapter will be restarted automatically every time as the configuration changed, e.g system.adapter.template.0
var adapter = new utils.Adapter('nuki');

// is called when adapter shuts down - callback has to be called under any circumstances!
adapter.on('unload', function (callback) {
    try {
        adapter.log.info('cleaned everything up...');
        callback();
    } catch (e) {
        callback();
    }
});

// is called if a subscribed object changes
adapter.on('objectChange', function (id, obj) {
    // Warning, obj can be null if it was deleted
    adapter.log.info('objectChange ' + id + ' ' + JSON.stringify(obj));
});

// is called if a subscribed state changes
adapter.on('stateChange', function (id, state) {
    // Warning, state can be null if it was deleted
    adapter.log.info('stateChange ' + id + ' ' + JSON.stringify(state));

    // you can use the ack flag to detect if it is status (true) or command (false)
    if (state && !state.ack) {
        adapter.log.info('ack is not set!');
    }
});

// Some message was sent to adapter instance over message box. Used by email, pushover, text2speech, ...
adapter.on('message', function (obj) {
    if (typeof obj === 'object' && obj.message) {
        if (obj.command === 'send') {
            // e.g. send email or pushover or whatever
            console.log('send command');

            // Send response in callback if required
            if (obj.callback) adapter.sendTo(obj.from, obj.command, 'Message received', obj.callback);
        }
    }
});

// is called when databases are connected and adapter received configuration.
// start here!
adapter.on('ready', function () {
    main();
});

function main() {

    let bridgeName = (adapter.config.bridge_name === "") ? bridgeName : adapter.config.bridge_name;
    var bridgeIp = adapter.config.bridge_ip;
    var bridgePort = adapter.config.bridge_port;
    var bridgeToken = adapter.config.token;
    var bridgeUrl = bridgeIp + ':' + bridgePort;
    
    // The adapters config (in the instance object everything under the attribute "native") is accessible via
    // adapter.config:
    adapter.log.debug('config Nuki bridge name: '   + bridgeName);
    adapter.log.debug('config IP address: '         + bridgeIp);
    adapter.log.debug('config port: '               + bridgePort);
    adapter.log.debug('config token: '              + bridgeToken);

    /**
     *
     *      For every state in the system there has to be also an object of type state
     *
     *      Here a simple template for a boolean variable named "testVariable"
     *
     *      Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
     *
     */

    adapter.setObjectNotExists(bridgeUrl + '.name', {
        type: 'state',
            common: {
                name: 'name',
                type: 'string',
                role: 'text'
            },
        native: {}
    });

    adapter.setState(bridgeUrl + '.name', {val: bridgeName, ack: true});

    request(
        {
            url: bridgeUrl + '/list?token='+ bridgeToken,
            json: true
        },
        function (error, response, content) {
            adapter.log.debug('Lock list requested');

            if (!error && response.statusCode == 200) {

                if (content && content.hasOwnProperty('nukiId')) {
                    for (var lockId in content) {
                        var obj = content.nukiId[lockId];

                        adapter.setObjectNotExists(bridgeUrl + '.' + obj.value_type, {
                            type: 'state',
                            common: {
                                name: obj.value_type,
                                type: 'number',
                                role: 'value'
                            },
                            native: {}
                        });
                        adapter.setState(bridgeUrl + '.' + obj.value_type, {val: obj.value, ack: true});
                    }
                } else {
                    adapter.log.warn('Response has no valid content. Check IP address and try again.');
                }

            } else {
                adapter.log.error(error);
            }
        }
    )

    adapter.setObject('testVariable', {
        type: 'state',
        common: {
            name: 'testVariable',
            type: 'boolean',
            role: 'indicator'
        },
        native: {}
    });

    // in this template all states changes inside the adapters namespace are subscribed
    adapter.subscribeStates('*');


    /**
     *   setState examples
     *
     *   you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
     *
     */

    // the variable testVariable is set to true as command (ack=false)
    adapter.setState('testVariable', true);

    // same thing, but the value is flagged "ack"
    // ack should be always set to true if the value is received from or acknowledged from the target system
    adapter.setState('testVariable', {val: true, ack: true});

    // same thing, but the state is deleted after 30s (getState will return null afterwards)
    adapter.setState('testVariable', {val: true, ack: true, expire: 30});



    // examples for the checkPassword/checkGroup functions
    adapter.checkPassword('admin', 'iobroker', function (res) {
        console.log('check user admin pw ioboker: ' + res);
    });

    adapter.checkGroup('admin', 'admin', function (res) {
        console.log('check group user admin group admin: ' + res);
    });



}
