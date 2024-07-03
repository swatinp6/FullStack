let goToGoa=(success,failure)=>{
    let bank_bal=50000;
    if(bank_bal>10000){
        success("Go to Goa and enjoy")
    }
    else{
        failure("sit at home")
    }
    //bank_bal>10000?success("Go to Goa and enjoy"):failure("Sit at home")
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})