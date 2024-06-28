const num=[1,2,3,4,5,6,7,8,9];
//function display(element){
  //  console.log(element);
//}
//num.forEach(display);
function square(element){
    return Math.pow(element,2)
}
const squrt=num.map(square);
console.log(num);
console.log(squrt);