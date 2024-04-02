
function add(x, y) {
    return x + y;
}


function subtract(x, y) {
    return x - y;
}


function multiply(x, y) {
    return x * y;
}


function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
}
console.log("Addition: " + add(5, 3)); 
console.log("Subtraction: " + subtract(5, 3)); 
console.log("Multiplication: " + multiply(5, 3));
console.log("Division: " + divide(6, 3)); 
console.log("Division by zero: " + divide(6, 0)); 
