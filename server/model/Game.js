"use strict";
var Player_1 = require("./Player");
var Field_1 = require("./Field");
/**
 * Created by frederik on 1/22/2017.
 */
var Game = (function () {
    function Game(columns, rows) {
        this._numberOfPlayers = 2;
        this._players = [];
        this._fields = [];
        this.addPlayers(this._numberOfPlayers);
        this.setUpGrid(columns, rows);
    }
    Game.prototype.turn = function (playerNumber, fieldNumber) {
        var player = this.getPlayer(playerNumber);
        var field = this.getField(fieldNumber);
        this.takeTurn(player, field);
        this.checkForWin();
    };
    Game.prototype.getPlayer = function (byNumber) {
        for (var i = 0; i < this._players.length; i++) {
            var player = this._players[i];
            if (player.position === byNumber) {
                return player;
            }
        }
        console.log("ERROR: Couldn't find player");
        return null;
    };
    Game.prototype.getField = function (fieldNumber) {
        for (var i = 0; i < this._fields.length; i++) {
            var field = this._fields[i];
            if (field.position === fieldNumber) {
                return field;
            }
        }
        console.log("ERROR: Couldn't find field");
        return null;
    };
    Game.prototype.checkForWin = function () {
        this.fields.length;
    };
    Game.prototype.addPlayers = function (amount) {
        for (var i = 0; i < amount; i++) {
            var p = new Player_1.Player(i + 1);
            this._players.push(p);
        }
    };
    Game.prototype.createField = function (position) {
        var field = new Field_1.Field(position);
        this._fields.push(field);
    };
    Game.prototype.setUpGrid = function (columns, rows) {
        var position = 0;
        for (var c = 0; c < columns; c++) {
            for (var r = 0; r < rows; r++) {
                this.createField(position);
                position++;
            }
        }
    };
    Game.prototype.greeter = function () {
        console.log("Yo world!");
    };
    Object.defineProperty(Game.prototype, "players", {
        get: function () {
            return this._players;
        },
        set: function (value) {
            this._players = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (value) {
            this._fields = value;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.takeTurn = function (player, field) {
        player.ticField(field);
        this.nextPlayersTurn(player);
    };
    Game.prototype.nextPlayersTurn = function (player) {
    };
    return Game;
}());
exports.Game = Game;
