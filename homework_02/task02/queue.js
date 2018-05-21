"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this._store = [];
        // remove(el:T):T {
        //   return this._store;
        // }
    }
    Queue.prototype.put = function (el) {
        this._store.push(el);
    };
    Queue.prototype.get = function () {
        var firstElement = this._store.shift();
        return firstElement;
    };
    return Queue;
}());
exports.Queue = Queue;
