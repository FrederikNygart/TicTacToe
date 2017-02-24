"use strict";
var Player_1 = require("./Player");
var Field_1 = require("./Field");
var Game = (function () {
    function Game(columns, rows) {
        this._numberOfPlayers = 2;
        this._gameOver = false;
        this._players = [];
        this._fields = [];
        this.addPlayers(this._numberOfPlayers);
        this.setUpGrid(columns, rows);
    }
    Game.prototype.addPlayers = function (amount) {
        for (var i = 0; i < amount; i++) {
            var p = new Player_1.Player(i + 1);
            this._players.push(p);
        }
    };
    Game.prototype.createField = function (position) {
        var field = new Field_1.Field(position);
        field.value = 1;
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
                console.log("getting field with value: " + field.value);
                return field;
            }
        }
        console.log("ERROR: Couldn't find field");
        return null;
    };
    Game.prototype.turn = function (playerNumber, fieldNumber) {
        var player = this.getPlayer(playerNumber);
        var field = this.getField(fieldNumber);
        this.takeTurn(player, field);
        this.checkForWin(player);
    };
    Game.prototype.takeTurn = function (player, field) {
        player.ticField(field);
        this.nextPlayerHasTurn(player);
    };
    Game.prototype.nextPlayerHasTurn = function (currentPlayer) {
        currentPlayer.hasTurn = false;
        var indexOfCurrentPlayer = this._players.indexOf(currentPlayer);
        var indexOfNextPlayer = indexOfCurrentPlayer + 1;
        if (indexOfNextPlayer + 1 >= this._players.length) {
            indexOfNextPlayer = 0;
        }
        this._players[indexOfNextPlayer].hasTurn = true;
    };
    Game.prototype.checkForWin = function (player) {
        var value = player.fieldValue;
        if (this.checkHorizontalWin(value) || this.checkVerticalWin(value) || this.checkDiagonalWin(value)) {
            this._winner = player;
            this._gameOver = true;
        }
    };
    Game.prototype.checkHorizontalWin = function (value) {
        var count = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < this._fields.length; col += 3) {
                var field = row + col;
                if (this._fields[field].value === value) {
                    count++;
                }
            }
            if (count < 3) {
                count = 0;
            }
        }
        return count === 3;
    };
    Game.prototype.checkVerticalWin = function (value) {
        var count = 0;
        for (var col = 0; col < this._fields.length; col += 3) {
            for (var row = 0; row < 3; row += 1) {
                var field = col + row;
                if (this._fields[field].value === value) {
                    count++;
                }
            }
            if (count < 3) {
                count = 0;
            }
        }
        return count === 3;
    };
    Game.prototype.checkDiagonalWin = function (value) {
        var count = 0;
        for (var field = 0; field < 9; field += 4) {
            if (this._fields[field].value === value) {
                count++;
            }
        }
        if (count < 3) {
            count = 0;
        }
        for (var field = 2; field < 7; field += 2) {
            if (this._fields[field].value === value) {
                count++;
            }
        }
        return count >= 3;
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
    Object.defineProperty(Game.prototype, "gameOver", {
        get: function () {
            return this._gameOver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "winner", {
        get: function () {
            return this._winner;
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
exports.Game = Game;
