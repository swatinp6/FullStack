//JavaScript Program to find largest of Three Numbers?

var num1=10
var num2= -20
var num3=100
let largest;
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("largest number is " +largest);