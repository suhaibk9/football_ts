import fs from 'fs';
import { MatchResult } from './utils';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;
  read() {
    const file = fs.readFileSync(this.filename, { encoding: 'utf-8' });
    this.data = file
      .split('\n')
      .map((row) => row.split(','))
      .map(this.mapRow);
  }
}
