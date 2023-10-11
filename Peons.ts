import Game from "./RPG"

export default class Peon extends Game{
    static className = 'Peon'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('The Peon attacks with a Club')
    }

    defense(): void {
        console.log('the Peon defends with a shield')
    }

    collectGold()  {
        return this._gold ++
    }

}