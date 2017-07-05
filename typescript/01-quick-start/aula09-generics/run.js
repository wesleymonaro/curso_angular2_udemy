"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var Animal_1 = require("../aula07-classes/Animal");
var cavalo_1 = require("../aula07-classes/cavalo");
var dao = new dao_1.Dao();
var animal = new Animal_1.Animal("Rex");
var cavalo = new cavalo_1.Cavalo("Titã");
dao.insert(animal);
dao.insert(cavalo);
//# sourceMappingURL=run.js.map