import {Field} from "./Field";
/**
 * Created by frederik on 1/22/2017.
 */
class Player {

    private _hasTurn: boolean = false;
    private _score: number;
    private _position: number;

    constructor(position:number) {
        this._position = position;
    }

    ticField(field: Field) {
        if (this.hasTurn) {
            field.ticked = true;
            field.value = this._position;
        }
    }

    takeTurn(field: Field){
        this.ticField(field)
        this.hasTurn = false;
    }

    get hasTurn(): boolean {
        return this._hasTurn;
    }

    set hasTurn(value: boolean) {
        this._hasTurn = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get position(): number {
        return this._position;
    }
}

export { Player };