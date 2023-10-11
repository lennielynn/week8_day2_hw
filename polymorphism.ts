import Game from "./RPG";
import Archer from "./Archer";
import Peon from "./Peons";
import Oger from "./Ogres";
import Knight from "./Knights";
import { Attack, Defense } from "./Interfaces";


const characters : Defense[] & Attack[] = [new Archer(25), new Knight(20), new Oger(15), new Peon(5)]

for(const character of characters){
    character.defense(),
    character.attack()
}