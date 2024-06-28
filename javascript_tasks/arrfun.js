let numbers=[1,2,3,4,5,6,7,8,9];
function display(elements){
    console.log(elements);
}
numbers.forEach(display);
function double(elements){
    console.log(elements*2);
}
function square(elements){
    console.log(Math.pow(elements,2));
}
function cube(elements){
    console.log(Math.pow(elements,3));
}

numbers.forEach(double);
numbers.forEach(square);
numbers.forEach(cube);