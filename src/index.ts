import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
const obj = MatchReader.fromCsv('football.csv');
obj.load();
const summary = Summary.winsAnalysisWithHtmlReport('Everton');
summary.buildAndPrintReport(obj.matches);
