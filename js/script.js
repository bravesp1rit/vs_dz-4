'use strict';

let mathOperation = prompt('What do you wanna do? Write "add", "sub", "mult" or "div" to start script', '');
let num1FromUser = +prompt('Enter first number', '');
let num2FromUser = +prompt('Enter second number', '');

if(mathOperation == 'add'){
    alert(`Result: ${num1FromUser} + ${num2FromUser} = ` + (num1FromUser + num2FromUser));
} else if(mathOperation == 'sub'){
    alert(`Result: ${num1FromUser} - ${num2FromUser} = ` + (num1FromUser - num2FromUser));
} else if(mathOperation == 'mult'){
    alert(`Result: ${num1FromUser} * ${num2FromUser} = ` + (num1FromUser * num2FromUser));
} else if(mathOperation == 'div'){
    alert(`Result: ${num1FromUser} / ${num2FromUser} = ` + (num1FromUser / num2FromUser));
} else{
    alert('Error, try again');
}
