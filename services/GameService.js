const express = require("express");
const { db } = require("../entities/Game");
const Game = require("../entities/Game");
const gameRoute = express.Router();

const gooseGame = new Game({
    nom:`Jeu de l'oie`,
    nbJoueurMin: 2,
    nbJoueurMax: 4,
    regle: "Avancer de case en case",
    carte: "https://4.bp.blogspot.com/-sMDWgNCCMD0/V0W-X5-I0zI/AAAAAAAAG80/HQjBxKIAHL8BNTLUVz_KzLnapHngIEEYQCLcB/s1600/plateau%2B7x7.JPG",
    case: [[1,1],[1,2],[1,3]],
    auteur: "Creames",
    des: [[1,6],[1,6]]
})

gameRoute.get('/', (req,res) => {
    res.send(gooseGame)
});

gameRoute.post('/',(req,res) => {
    console.log(req.body);
    const newGame = new Game(req.body);
    newGame.save();
    res.send(201);
})

module.exports = gameRoute;