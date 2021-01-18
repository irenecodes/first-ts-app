"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // convert [28/10/2018] to return number 
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    // new Date constructor, day, month which is 0 indexed, and year 
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
