"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const utils_1 = require("../utils");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        let HomeWin = 0;
        let AwayWin = 0;
        for (let match of matches) {
            if (match[5] === utils_1.MatchResult.HomeWin && match[1] === this.team) {
                HomeWin++;
                wins++;
            }
            else if (match[5] === utils_1.MatchResult.AwayWin && match[2] === this.team) {
                AwayWin++;
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games, ${HomeWin} at home and ${AwayWin} away from home`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
