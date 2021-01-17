import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n').map((row: string): string[] => {
    return row.split(',');
})

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

// JS solution putting it in an obj so even if any of these won't be used, another dev won't be tempted to delete 
// const MatchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// }

// TS solution - using enumerations 
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

// when create an enum, we create a TYPE of MatchResult as well 
// example on lines 29-33 but it will not run. it is just an example to show that the annotation should return type of MatchResult
const printMatchResult = (): MatchResult => {
    if(match[5] === 'H') {
        return MatchResult.HomeWin
    }
}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);