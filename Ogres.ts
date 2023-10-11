import Game from "./RPG"

export default class Oger extends Game{
    static className = 'Oger'

    constructor(protected _gold: number){
        super(_gold)
    }

    attack(): void {
        console.log('the oger attacks with with a club')
    }

    defense(): void {
        console.log('The oger defends with a shield')
    }

    collectGold()  {
        return this._gold ++
    }

}