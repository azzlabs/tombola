module.exports = class Endpoint {
    dispatchEndpoint(res, endpoint_name, params) {
        var data = false;
        var status = 'OK';
        var msg = '';

        switch (endpoint_name) {
            case 'room_select':
                if (typeof params.room_name !== 'undefined') {
                    const Room = require('./rooms.js');
                    const rm = new Room();
                    const new_room = rm.getRoom(params.room_name);

                    if (new_room !== false) {
                        data = { room_name: new_room.room_name, room_slug: new_room.room_slug };
                    } else {
                        status = 'ERR';
                        msg = 'Nome della stanza non valido<br>Deve essere lungo almeno 2 caratteri e può contenere solo lettere, numeri, spazi o underscore';
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