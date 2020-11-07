// Temperature Converter from Kelvin to Celsius, then to Fahrenheit and to Newton Scale.

// constant variable with temperature in Kelvin
const kelvin = 283;
// print the result of Kelvin temperature
console.log(`The temperature is ${kelvin} Kelvin`);
// constant variable with coversion from Kelvin to Celsius
const celsius = kelvin - 273;
// print the result of Celsius temperature
console.log(`The temperature is ${celsius} degrees Celsius`);
// Non-constant variable with conversion from Celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
// Non-constant variable with conversion from Fahrenheit to Newton Scale
let newton = celsius * (33 / 100);
// Round down the Newton temperature
newton = Math.floor(newton);
// print the result of Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// print the result of newton scale temperatue
console.log(`The temperature is ${newton} degrees Newton`);
