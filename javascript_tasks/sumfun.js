function sum(callback,x,y){
    let result=x+y;
    callback(result);
}
function displayResult(result){
    console.log(result);
}
sum(displayResult,10,20);