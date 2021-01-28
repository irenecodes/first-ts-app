import fs from 'fs';
import {dateStringToDate} from './utils'
import {MatchResult} from './MatchResult'

// creating a tuple structure
type MatchData = [Date, string, string, number, number, MatchResult, string];


export class CsvFileReader {
    data: MatchData[] = [];
    constructor(public filename: string) {}

    read() {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        // split single string row to array of strings 
        .map((row: string): string[] => {
            return row.split(',');
        }) 
        // conversion process for each of the values 
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, 
                row[6]
            ]
        })
    }
}