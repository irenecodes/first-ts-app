interface Vehicle {
    name: string,
    year: number,
    broken: boolean,
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
const printVehicleInterface = (vehicle: Vehicle): void => {
    console.log(`
        With Interface ...
        Name: ${vehicle.name},
        Year: ${vehicle.year}.
        Broken: ${vehicle.broken}
        ${vehicle.summary()}
    `);
}

printVehicle(oldCivic)
printVehicleInterface(oldCivic)