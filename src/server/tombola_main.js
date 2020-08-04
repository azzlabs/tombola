module.exports = class Tombola {
    constructor () {
        this.RandTools = require('./rand_tools.js');
    }

    newGame (room_name, room_slug) {
        var game_data = { room_name: room_name, room_slug: room_slug, board: { remaining_numbers: [], called_list: [], last_called: -1 }, cards: [] };

        for (var i = 1; i <= 90; i++) 
            game_data.board.remaining_numbers.push(i);

        for (var i = 1; i <= 30; i++) 
            game_data.cards.push({ taken: false, content: this.genCard() });

        return game_data;
    }

    genCard () {

        const tools = new this.RandTools(); 
        const extract_pool = [];
        var card = [[], [], []];

        // Inizializzo un array per colonna
        for (var i = 0; i < 9; i++) {
            extract_pool[i] = new this.RandTools();
            extract_pool[i].distRandInit((i * 10) + 11, (i * 10) + 1);
        }

        // Estrazione per ogni riga
        for (var i = 0; i < 9; i++) {
            card[0].push(extract_pool[i].distRandNext());
            card[1].push(extract_pool[i].distRandNext());
            card[2].push(extract_pool[i].distRandNext());
        }

        // Buco la prima riga
        tools.distRandInit(9);
        for (var i = 0; i < 4; i++) card[0][tools.distRandNext()] = -1;

        // BuGo la seconda riga
        tools.distRandInit(9);
        for (var i = 0; i < 4; i++) card[1][tools.distRandNext()] = -1;

        // Buco la terza riga in funzione delle righe
        // precendenti (ogni colonna deve avere almeno un numero)
        tools.distRandInit(9);
        var buchi = 0;
        while (buchi < 4) {
            const hit = tools.distRandNext();

            if (card[0][hit] != -1 || card[1][hit] != -1) {
                card[2][hit] = -1;
                buchi++;
            }
        }

        return card;
    }

    extractNumber (board_data, count = 1) {
        const tools = new this.RandTools();

        for (var i = 0; i < count; i++) {
            tools.distRandInitStatic(board_data.remaining_numbers);

            board_data.last_called = tools.distRandNext();
            board_data.called_list.push(board_data.last_called);
            board_data.remaining_numbers = tools.dist_rand;
        }

        return board_data;
    }
}