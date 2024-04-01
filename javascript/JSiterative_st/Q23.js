//Write a program to read 5 numbers and print only the even numbers?
let numbers = [8,2,1,4,5,9]; 
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(`Even numbers in the array: ${evenNumbers}`);
