// 1: Basic addition
let a = 10;
let b = 5;
let c = a+b;
let d = "Raj";  //Providing extra String Value
console.log(c , d);

// 2: Getting Random Number
console.log(Math.floor(Math.random() * 10));

// 3: Using Random function to get Dice Number between 1 to 6
console.log(Math.floor(Math.random() * 7));

// 4: Adding two Random Dice Number and Print the Result
let Dice1 = Math.floor(Math.random() * 7);
let Dice2 = Math.floor(Math.random() * 7);
let Result = Dice1 + Dice2;
console.log(Result);

// 5: Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let R1 = Math.floor(Math.random() * 90 + 10);
let R2 = Math.floor(Math.random() * 90 + 10);
let R3 = Math.floor(Math.random() * 90 + 10);
let R4 = Math.floor(Math.random() * 90 + 10);
let R5 = Math.floor(Math.random() * 90 + 10);

let sum = R1 + R2 + R3 + R4 + R5;
let avg = (R1 + R2 + R3 + R4 + R5)/5;

console.log("The Sum of All 5 Randome number is: " + sum);
console.log("The Average of All 5 Randome number is: " + avg);
 