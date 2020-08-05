module.exports = class RandTools {
    /** 
     * Inizializza l'array interno vuoto
     */
    constructor() {
        this.dist_rand = [];
    }

    /** 
     * Genera numero random, min e max inclusi
     * 
     * @param {number} min      Limite inferiore
     * @param {number} max      Limite superiore
     * @returns {number}        Numero casuale nel range selezionato
     */
    randInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /** 
     * Inizializza l'array interno sequenzialmente con interi
     * 
     * @param {number} end      Ultimo numero dell'array
     * @param {number} max      Primo numero dell'array
     */
    distRandInit (end, start = 0) {
        this.dist_rand = [];
        for (var i = start; i < end; i++) {
            this.dist_rand.push(i);
        }
    }

    /** 
     * Inizializza l'array interno da un array esistente
     * 
     * @param {array} arr      Array dal quale inizializzare l'array interno
     */
    distRandInitStatic (arr) {
        this.dist_rand = arr;
    }

    /** 
     * Ottiene casualmente un elemento dall'array e lo rimuove
     * 
     * @return {number}     Restituisce il numero estratto casualmente
     */
    distRandNext () {
        return this.dist_rand.splice(Math.floor(Math.random() * this.dist_rand.length), 1)[0];
    }
}