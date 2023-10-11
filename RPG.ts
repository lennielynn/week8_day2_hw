 export default abstract class Game {
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