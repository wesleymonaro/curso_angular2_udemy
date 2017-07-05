import { Dao } from "./dao";
import { Animal } from "../aula07-classes/Animal";
import { Cavalo } from "../aula07-classes/cavalo";

let dao: Dao<Animal> = new Dao<Animal>();

let animal : Animal = new Animal("Rex");
let cavalo : Cavalo = new Cavalo("Titã");

dao.insert(animal);
dao.insert(cavalo);