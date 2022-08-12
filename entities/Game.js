const mongoose = require('mongoose');

const GameShema = new mongoose.Schema({
        nom: String,
        nbJoueurMin: Number,
        nbJoueurMax: Number,
        regle: String,
        plateau: String,
        cases: Array,
        auteur: String,
        des: Array,
});

const Game = mongoose.model('Game', GameShema);

module.exports.modele = GameShema;
module.exports = Game;
