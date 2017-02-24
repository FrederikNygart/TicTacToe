import {Field} from "./Field";
/**
 * Created by frederik on 1/22/2017.
 */
class Player {

    private _hasTurn: boolean = false;
    private _score: number;
    private _position: number;
    private _fieldValue: number;

    constructor(position:number) {
        this._position = position;
        this._fieldValue = position + 1;
    }

    ticField(field: Field) {
        field.ticked = true;
        field.value = this._fieldValue;
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
     get fieldValue(): number {
        return this._fieldValue;
    }

    set fieldValue(value: number) {
        this._fieldValue = value;
    }
}

export { Player };