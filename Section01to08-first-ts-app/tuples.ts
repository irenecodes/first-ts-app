// Tuple: array-like structure where each element represents some property of a record

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// as a tuple. without the annotation, it is just an array
const pepsi: [ string, boolean, number] = ['brown', true, 40];
// throws error 
// pepsi[0] = 20;

// type alias creates an idea of a tuple 
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 20];

const carSpecs: [number, number] = [400, 3445];

// more likely to use objects since it provides more info 
const carStats = {
    hp: 400,
    weight: 3445
}