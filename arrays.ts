const carMakers = ['ford', 'toyota', 'chevy'];

// putting complex objects inside 
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// 30. Why Typed Arrays? 

// 1) Help with inference when extracting values 
const car = carMakers[0];
const myCar = carMakers.pop();
// console.log(myCar);

// 2) Prevent incompatable values
// carMakers.push(100);

// 3) Help with Map, forEach, reduce functions 
var carMakersCopy = carMakers.map((car:string):string => {
    return car.toUpperCase()
})

console.log(carMakersCopy);

// 4) Flexible - arrays can contain multiple different types 
const importantDates = [new Date(), '2030-10-10'];

// without the annotation, will get the any type which we want to avoid 
const annotatedImportantDates: (Date | string)[] = []

