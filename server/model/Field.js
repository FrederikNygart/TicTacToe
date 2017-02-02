"use strict";
/**
 * Created by frederik on 1/22/2017.
 */
var Field = (function () {
    function Field(position) {
        this._position = position;
    }
    Object.defineProperty(Field.prototype, "ticked", {
        get: function () {
            return this._ticked;
        },
        set: function (value) {
            this._ticked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}());
exports.Field = Field;
