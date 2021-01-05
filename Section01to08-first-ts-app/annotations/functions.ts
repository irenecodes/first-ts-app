// add annotiations to a and b so we know what types of args to accept 
// const add = (a, b) => {

// }

// const add = (a: number, b: number): number => {
//     return a + b;
// }

// inference knows this will be a number 
const add = (a: number, b: number) => {
    return a + b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string) => {
    console.log(message);
    
}


const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
}

const todaysWeather = {
    date: new Date,
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(`${forecast.date}
    ${forecast.weather}`);  
} 

// ES2015  - when destructuring, have the destructure and annotation seperately ({}): annotation: returned type
const logWeatherES2015 = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date, weather);
    
}

// logWeather(todaysWeather)
logWeatherES2015(todaysWeather)