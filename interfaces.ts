interface Vehicle {
    name: string,
    year: number,
    broken: boolean
}


const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
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
    `);
}

printVehicle(oldCivic)
printVehicleInterface(oldCivic)