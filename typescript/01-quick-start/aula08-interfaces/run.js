"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var Animal_1 = require("../aula07-classes/Animal");
var dao = new animal_dao_1.AnimalDao();
var animal = new Animal_1.Animal("Rex");
dao.insert(animal);
//# sourceMappingURL=run.js.map