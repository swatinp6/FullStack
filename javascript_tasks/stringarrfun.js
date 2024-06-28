let fruits=["apple","banana","strawberry","orange"];
function display(element){
    console.log(element);
}
fruits.forEach(display);
function uppercase(element,index,array){
    array[index] = element.toUpperCase();
}
fruits.forEach(uppercase);
console.log(fruits);