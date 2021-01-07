"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        // this.collection.indexOf
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - 1; j++) {
                //type guard to restore all methods associated w array
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // type guard if string to restore methods for strings 
                if (typeof this.collection === 'string') {
                    console.log('type guard for string');
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
