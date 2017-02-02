/**
 * Created by frederik on 1/22/2017.
 */
class Field{

    private _ticked: boolean;
    private _value: number;
    private _position: number;
    constructor(position){
        this._position = position;
    }

    get ticked(): boolean {
        return this._ticked;
    }

    set ticked(value: boolean) {
        this._ticked = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }
}
export { Field };
