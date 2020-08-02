module.exports = class Endpoint {
    dispatchEndpoint(res, endpoint_name, params) {
        var data = false;
        var status = 'OK';
        var msg = '';

        switch (endpoint_name) {
            case 'room_select':
                if (typeof params.room_name !== 'undefined') {
                    const Room = require('./rooms.js');
                    var rm = new Room();

                    data = { room: rm.getRoom(params.room_name) };

                    if (data.room === false) {
                        status = 'ERR';
                        msg = 'Cannot retrieve room data';
                    }
                } else {
                    status = 'ERR';
                    msg = 'Room name required';
                }
                break;
            case 'echo':
                data = {endpoint_name, params};
                break;
            default:
                data = false;
                msg = 'Invalid endpoint';
                break;
        }

        this.sendEndpoint(res, data, status, msg);
    }

    sendEndpoint(res, data, status = 'OK', message = false) {
        res.send(JSON.stringify({status: status, data: data, message: message}));
    }
}