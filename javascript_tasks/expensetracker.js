class BankAccount{
    account_bal=0;
    
    depositExpense(amount){
        this.account_bal=this.account_bal+amount
    }
    withdrawalExpense(amount){
        this.account_bal=this.account_bal-amount
    }
    getBalance(){
        return this.account_bal
    }
}
let a1=new BankAccount()
a1.depositExpense(200)
console.log(a1);
a1.getBalance()
console.log(a1);
a1.withdrawalExpense(100)
console.log(a1);
console.log("***balance***");
console.log(a1.getBalance());