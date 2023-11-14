"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilleniumFalcon = void 0;
var baseShips_1 = require("./baseShips");
//Classe que herda de Spacecraft e implementa a interface Containership
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 3;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        var i = Math.random();
        if (i >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
            console.log(i);
        }
        else {
            console.log("Failed to jump into hyperspace");
        }
    };
    return MilleniumFalcon;
}(baseShips_1.Spacecraft));
exports.MilleniumFalcon = MilleniumFalcon;
