import {Spacecraft, Containership} from "./baseShips"

//Classe que herda de Spacecraft e implementa a interface Containership
class MilleniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 3;
    }

    jumpIntoHyperSpace(){
        let i = Math.random()
        if(i >= 0.5){
            super.jumpIntoHyperSpace();
            console.log(i)
        }else{
            console.log("Failed to jump into hyperspace")
        }
    }
}

export {MilleniumFalcon}
