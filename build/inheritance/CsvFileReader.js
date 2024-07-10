"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        const file = fs_1.default.readFileSync(this.filename, { encoding: 'utf-8' });
        this.data = file
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
