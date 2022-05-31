/* Practice problem based on Switch case statement */
// 1::: Read a single digit number and write the number in word
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter Your choice of number in between 0 to 10 : "));
    switch (number) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;  
        case 3:
            console.log("Three");
            break;

        case 4:
            console.log("Four");
            break;

        case 5:
            console.log("Five");
            break;

        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        case 10:
            console.log("Ten");
            break;
        default:
            console.log("Invalid number")
    }

/*=======================================================================*/
// 2::: Days of the week
let days = parseInt(prompt("Enter number between 0 to 6: "));

switch (days) {
    case 0:
        console.log("Sunday");
    break;
    
    case 1:
        console.log("Monday");
    break;

    case 2:
        console.log("Tuesday");
    break;

    case 3:
        console.log("Wednesday");
    break;

    case 4:
        console.log("Thursday");
    break;

    case 5:
        console.log("Friday");
    break;

    case 6:
        console.log("Saturday");
    break;

    default:
        console.log("Invalid input.");
    break;
}

/*=======================================================================*/
// 3::: Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let digit = parseInt(prompt("Enter Digit Numbers: "));

switch (digit) {
    case 1:
        console.log("Unit place");
    break;
    
    case 2:
        console.log("Ten place");
    break;

    case 3:
        console.log("Hundred place");
    break;

    case 4:
        console.log("Thousand place");
    break;

    case 5:
        console.log("Ten Thousand Place");
    break;

    case 6:
        console.log("Hundreds of thousands place");
    break;

    case 7: 
        console.log("Millions place")
    break;
    default:
        console.log("Invalid digit")
}