"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var starFighters_1 = require("../starFighters");
//Instância de uma classe
var newShip = new starFighters_1.MilleniumFalcon;
//Chamada do método
newShip.jumpIntoHyperSpace();
// função anonima para checar se é boa para carga que recebe como parâmetro uma nave do tipo MilleniumFalcon
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
// verificação ternária
console.log("Is falcon good for the job? ".concat(goodForTheJob(newShip) ? 'Yes' : 'No'));
