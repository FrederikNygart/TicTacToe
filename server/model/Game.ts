import {Player} from "./Player";
import {Field} from "./Field";
/**
 * Created by frederik on 1/22/2017.
 */

class Game {

    private _players: Player[];
    private _fields: Field[];
    private _numberOfPlayers:number = 2;

    constructor(columns: number, rows: number){
        this._players = [];
        this._fields = [];
        this.addPlayers(this._numberOfPlayers);
        this.setUpGrid(columns,rows);
    }

    turn(playerNumber: number, fieldNumber: number){
        var player = this.getPlayer(playerNumber);
        var field = this.getField(fieldNumber);  
        this.takeTurn(player, field);
        this.checkForWin();
    }

    getPlayer(byNumber:number){
        for (var i = 0; i < this._players.length; i++){
            var player = this._players[i];
            if (player.position === byNumber) {
                return player;
            }
        }
        console.log("ERROR: Couldn't find player");
        return null;
    }

    private getField(fieldNumber: number) {
        for (let i = 0; i < this._fields.length; i++){
            let field = this._fields[i];
            if (field.position=== fieldNumber) {
                return field;
            }
        }
        console.log("ERROR: Couldn't find field");
        return null;
    }

    private checkForWin() {
        this.fields.length
    }

    addPlayers(amount:number){
        for (let i = 0; i < amount ; i++){
            let p = new Player(i+1);
            this._players.push(p);
        }
    }

    createField(position:number){
        let field = new Field(position);
        this._fields.push(field);
    }

    setUpGrid(columns:number, rows:number){
        let position = 0;
        for (let c = 0; c < columns; c++){
            for (let r = 0; r < rows; r++){
                this.createField(position);
                position++;
            }
        }
    }

    greeter(){
        console.log("Yo world!")
    }

    get players(): Player[] {
        return this._players;
    }
    set players(value: Player[]) {
        this._players = value;
    }

    get fields(): Field[] {
        return this._fields;
    }
    set fields(value: Field[]) {
        this._fields = value;
    }

    private takeTurn(player: Player, field: Field) {
        player.ticField(field);
        this.nextPlayersTurn(player);
    }

    private nextPlayersTurn(player: Player) {

    }


}
export { Game };