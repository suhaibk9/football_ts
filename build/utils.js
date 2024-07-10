"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    //10/08/2018
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (exports.MatchResult = MatchResult = {}));
