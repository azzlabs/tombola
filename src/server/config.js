module.exports = class Config {
    constructor () {
        var config = false;
        try {
            config = require('../../config.json');
        } catch (e) {
            console.log('config.json not found. Reverting do default config.');
        }

        this.config = config !== false ? config : {
            port: 3000,
            storage_path: '../shared/db-rooms/'
        }
    }
}