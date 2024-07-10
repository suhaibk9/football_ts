import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../utils';
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;
    let HomeWin = 0;
    let AwayWin = 0;
    for (let match of matches) {
      if (match[5] === MatchResult.HomeWin && match[1] === this.team) {
        HomeWin++;
        wins++;
      } else if (match[5] === MatchResult.AwayWin && match[2] === this.team) {
        AwayWin++;
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games, ${HomeWin} at home and ${AwayWin} away from home`;
  }
}
