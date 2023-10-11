import Game from "./RPG"

export default class Archer extends Game{
    static className = 'Archer'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('Archer attacks with a Bow and Arrow')
    }

    defense(): void {
        console.log('The Archer defends with a tunic')
    }


    collectGold()  {
        return this._gold ++
    }

}