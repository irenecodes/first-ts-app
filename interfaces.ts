interface Reportable {
    summary(): string
}


const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `In summary, name is ${this.name}.`
    }
}

// of type Reportable since it contains summary.
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`
    }
}

// destructured 
const printVehicle = ({name, year, broken}: {name: string, year: number, broken: boolean }): void => {
    console.log(`
        Destructured ...
        Name: ${name},
        Year: ${year}.
        Broken: ${broken}
    `);
}

// with interface 
const printSummaryInterface = (item: Reportable): void => {
    console.log(`
        With Interface ...
        ${item.summary()}
    `);
}

printVehicle(oldCivic)
printSummaryInterface(oldCivic)

printSummaryInterface(drink);