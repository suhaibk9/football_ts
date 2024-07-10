import { OutputTarget } from '../Summary';
import fs from 'fs';
export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<div style="display:flex; justify-content:center;">
    <h1>Final Output</h1><br/>
    <h3>${report}</h3>
    </div>`;
    fs.writeFileSync('report.html', html);
  }
}
