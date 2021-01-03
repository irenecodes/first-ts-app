// :number is the annotation 
// let apples: number = 5;

let apples = 5;

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null

let nothing: undefined = undefined;

// built in objects 
let now: Date = new Date()

// Array - expecting array that will contain nothing but strings 
let colors: string[] = ['red', "green", 'blue']

console.log(colors);


let myNumbers: number[] = [2,1,25]

let truths: boolean[] = [true, false]

// Classes
class Car {

}

let car: Car = new Car()

// Object literal - put the name and what the expected value is
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// Function
// The annotation ... : (i: number) => void 
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


// When to use annotations 
// 1) Function that returns the 'any' type --> JSON.parse will return any
const json = '{"x": 10, "y": 20}';
const coordinates: {X: number; y: number} = JSON.parse(json);
console.log(coordinates);


// 2) When we declare a var on one line and initialize it later 
let words = ['red', 'green', 'blue'];
// let foundWord; //currently inferred from usage 
// annotation below: 
let foundWord: boolean;

for (let i = 0; i <  words.length; i++) {
    if (words[i] === 'green') {
        // only intialize it here 
        foundWord = true;
    }
}

// 3) Var whose type cannot be inferred correctly 
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}
