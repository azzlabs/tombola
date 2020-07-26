module.exports = class RandTools {
    // Genera numero random, min e max inclusi
    randInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Inizializza l'array interno sequenzialmente con interi
    distRandInit (end, start = 0) {
        this.dist_rand = [];
        for (var i = start; i < end; i++) {
            this.dist_rand.push(i);
        }
    }

    // Inizializza l'array interno da un array esistente
    distRandInitStatic (arr) {
        this.dist_rand = arr;
    }

    // Ottiene casualmente un elemento dall'array e lo rimuove
    distRandNext () {
        return this.dist_rand.splice(Math.floor(Math.random() * this.dist_rand.length), 1)[0];
    }
}