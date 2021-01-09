"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // putting get means we do not need to call length as if it were a function --> see line below export. we call it as if it were an array or string
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    // only need to compare index 0, but include both params to show other devs the purpose of this function (for readibility)
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        // if left side > right side = true, swap them
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
// const exampleCollection = new NumbersCollection([1,2,3]);
// exampleCollection.length;
