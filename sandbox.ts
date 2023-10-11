abstract class Game {
    static className = 'Game'
    constructor(protected _gold: number){}
    protected get gold(): number {
        return this._gold;
    }
    protected set gold(value: number) {
        this._gold = value;
    }
    abstract attack(): void
    abstract defense(): void
    abstract collectGold(): void   
}

class Archer extends Game{
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

class Knight extends Game{
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
class Oger extends Game{
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
class Peon extends Game{
    static className = 'Peon'
    constructor(protected _gold: number){
        super(_gold)
    }
    attack(): void {
        console.log('The Peon attacks with a club')
    }
    defense(): void {
        console.log('the Peon defends with a shield')
    }
    collectGold()  {
        return this._gold ++
    }
}