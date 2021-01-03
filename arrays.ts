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




