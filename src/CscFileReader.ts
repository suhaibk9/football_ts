import fs from 'fs';
export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {
    this.filename = filename;
  }
  read(): void {
    const file = fs.readFileSync(this.filename, { encoding: 'utf-8' });
    this.data = file.split('\n').map((row: string): string[] => row.split(','));
  }
}
