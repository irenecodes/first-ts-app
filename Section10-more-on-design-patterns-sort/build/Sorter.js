"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// to make abstract class, add abstract keyword to class definition, mention will have methods that WILL be created in future 
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        // this.collection.indexOf
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
