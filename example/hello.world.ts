import { MilleniumFalcon } from "../starFighters"

//Instância de uma classe
let newShip = new MilleniumFalcon;
//Chamada do método
newShip.jumpIntoHyperSpace();

// função anonima para checar se é boa para carga que recebe como parâmetro uma nave do tipo MilleniumFalcon
let goodForTheJob = (ship: MilleniumFalcon): boolean => ship.cargoContainers > 2;

// verificação ternária
console.log(`Is falcon good for the job? ${goodForTheJob(newShip) ? 'Yes' : 'No'}`)