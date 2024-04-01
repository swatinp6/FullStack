//Write a program to print the Fibonacci number series up to a given number.
//Expected out 17 -: 0 1 1 2 3 5 8 13
// program to generate fibonacci series up to n terms

// take input from the user
const number = 8
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}