//Write a program to print the least number in given three numbers?

var a=10,b=1000,c=100
if(a==b && b==c && c==a){
    console.log("All are equal");

}
else if(a<b && a<c){
    console.log("a is least or less than b and c");

}
else if(b<a & b<c){
    console.log("b is least or less");

}
else{
    console.log("c is least or less");
}