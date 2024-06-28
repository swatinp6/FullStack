function hello(){
    console.log("Hello!!!");
    
}
function goodBye(callback){
    console.log("Goodbye!!!");
    callback();
}
function wait(){
    console.log("wait!!!");
}
goodBye(hello);
goodBye(wait);