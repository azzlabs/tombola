module.exports = class Rooms {

    constructor () {
        this.fs = require('fs');
        this.storage_path = '../shared/db-rooms/';
    }

    /** 
     * Restituisce una stanza di gioco. 
     * Eventualmente, se non esiste il file corrispondente, la crea.
     * 
     * @param {string} room_name     Nome della stanza
     * @param {bool} [create_new]    Se a "true", e la stanza non esiste, crea e inizializza una stanza nuova
     * @returns {object}             Restituisce la struttura di una stanza, oppure false
     */
    getRoom (room_name, create_new = false) {
        if (room_name.length > 1 && room_name.match(/^[0-9a-zA-Z_\s-]+$/)) {
            const clean_name = room_name.replace(/[\W_]+/g, '_');

            try {
                // const room_data = require(this.storage_path + clean_name + '.json'); Mantiene i moduli in cache! UFF
                const room_data = JSON.parse(this.fs.readFileSync(require('path').resolve(__dirname, this.storage_path + clean_name + '.json'), 'utf8')); 
                return room_data;
            } catch (e) {
                if (create_new) {
                    const Tombola = require('./tombola_main.js'); 
                    var tombola = new Tombola();
                    const new_game = tombola.newGame(room_name, clean_name);
    
                    this.fs.writeFile(require('path').resolve(__dirname, this.storage_path + clean_name + '.json'), JSON.stringify(new_game), function (err) {
                        if (err) return console.error(err);
                        console.log('Created new room');
                    });
                    return new_game;
                } else return false;
            }
        } else {
            return false;
        }
    }

    /** 
     * Salva su file la stanza modificata
     * 
     * @param {string} room_slug     Slug della stanza (nome file)
     * @param {object} room_data     Struttura della stanza da salvare
     */
    saveRoom (room_slug, room_data) {
        if (room_slug.match(/^[0-9a-zA-Z_]+$/) == null) return false;

        this.fs.writeFile(require('path').resolve(__dirname, this.storage_path + room_slug + '.json'), JSON.stringify(room_data), function (err) {
            if (err) return console.error(err);
            console.log('Edited room');
        });
    }
}