"use strict";
var Player = (function () {
    function Player(position) {
        this._hasTurn = false;
        this._position = position;
        this._fieldValue = position + 1;
    }
    Player.prototype.ticField = function (field) {
        field.ticked = true;
        field.value = this._fieldValue;
    };
    Player.prototype.takeTurn = function (field) {
        this.ticField(field);
        this.hasTurn = false;
    };
    Object.defineProperty(Player.prototype, "hasTurn", {
        get: function () {
            return this._hasTurn;
        },
        set: function (value) {
            this._hasTurn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "fieldValue", {
        get: function () {
            return this._fieldValue;
        },
        set: function (value) {
            this._fieldValue = value;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
