import fs from 'fs';




export abstract class CsvFileReader<T> {
    data: T[] = [];
    constructor(public filename: string) {}

    // mark this method as abstract which means it will be implemented by child class
    abstract mapRow(row:string[]): T;

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
        .map(this.mapRow)
    }
}