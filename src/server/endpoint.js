module.exports = class Endpoint {
    dispatchEndpoint(res, endpoint_name, params) {
        var data = {endpoint_name, params};

        this.sendEndpoint(res, data);
    }

    sendEndpoint(res, data, status = 'OK', message = false) {
        res.send(JSON.stringify({status: status, data: data, message: message}));
    }
}