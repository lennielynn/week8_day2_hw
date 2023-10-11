import Game from "./RPG"

export default class Knight extends Game{
    static className = 'Knight'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('The knight attacks with a sword')
    }

    defense(): void {
        console.log('The knight defends with armor')
    }

    collectGold()  {
        return this._gold ++
    }

}