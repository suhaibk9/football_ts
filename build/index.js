"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const obj = MatchReader_1.MatchReader.fromCsv('football.csv');
obj.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Everton');
summary.buildAndPrintReport(obj.matches);
