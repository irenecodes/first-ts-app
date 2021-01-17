"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n').map(function (row) {
    return row.split(',');
});
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
// JS solution putting it in an obj so even if any of these won't be used, another dev won't be tempted to delete 
// const MatchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// }
// TS solution - using enumerations 
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
// when create an enum, we create a TYPE of MatchResult as well 
// example on lines 29-33 but it will not run. it is just an example to show that the annotation should return type of MatchResult
var printMatchResult = function () {
    if (match[5] === 'H') {
        return MatchResult.HomeWin;
    }
};
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
