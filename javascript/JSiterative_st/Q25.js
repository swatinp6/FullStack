
// program to check an Armstrong number of three digits

//let sum = 0;
//const number = 407
//let temp = number;
//while (temp > 0) {
  //  let remainder = temp % 10;
    //sum += remainder * remainder * remainder;
    //temp = parseInt(temp / 10); 
//}
//if (sum == number) {
  //  console.log(`${number} is an Armstrong number`);
//}
//else {
  //  console.log(`${number} is not an Armstrong number.`);
//}



//Write a program to check if a given number is an Armstrong number or not.? ('n' numbers)
const number = "9474"
const numberOfDigits = number.length;
let sum = 0;
let temp = number;
while (temp > 0) {
let remainder = temp % 10;
sum += remainder ** numberOfDigits;
temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}