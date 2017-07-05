"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.mover = function (distanciaEmMetros) {
        console.log(this.nome + " moveu " + distanciaEmMetros + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map