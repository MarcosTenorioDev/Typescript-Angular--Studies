"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacecraft = void 0;
//Exemplo de uma classe
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    ;
    // O código acima é o mesmo que: 
    // public propulor: string
    //
    // constructor (propulsor: string){
    // this.propulsor = propulsor
    //}
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering Hyperspace with ".concat(this.propulsor));
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
var ship = new Spacecraft('hyperdrive');
