module.exports = class Rooms {

    constructor () {
        this.fs = require('fs');
        this.storage_path = '../shared/db-rooms/';
    }

    getRoom (room_name) {
        if (room_name.length > 1 && room_name.match(/^[0-9a-zA-Z_\s-]+$/)) {
            const clean_name = room_name.replace(/[\W_]+/g, '_');

            try {
                const room_data = require(this.storage_path + clean_name + '.json');
                return room_data;
            } catch (e) {
                const Tombola = require('./tombola_main.js'); 
                var tombola = new Tombola();
                const new_game = tombola.newGame(room_name, clean_name);

                this.fs.writeFile(require('path').resolve(__dirname, this.storage_path + clean_name + '.json'), JSON.stringify(new_game), function (err) {
                    if (err) return console.log(err);
                    console.log('Created new room');
                });
                return new_game;
            }
        } else {
            return false;
        }
    }
}