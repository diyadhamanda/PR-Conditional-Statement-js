let account = {
    name: "Diya Dhamanda",
    principal: 500000,  
    rate: 0,           
    time: 0,            
};

if (account.principal >= 500000) {
    account.rate = 9.5;
    account.time = 10;
}
else if (account.principal >= 300000) {
    account.rate = 7.5;
    account.time = 5;
}
else if (account.principal >= 150000) {
    account.rate = 4.5;
    account.time = 3;
}
else {
    account.rate = 2.5;
    account.time = 1;  
}

account.simpleInterest = (account.principal * account.rate * account.time) / 100;
account.totalAmount = account.principal + account.simpleInterest;


console.log();
console.log("*** SIMPLE INTEREST CALCULATION ***");
console.log();
console.log("Account Holder: " + account.name);
console.log("Principal Amount: ₹" + account.principal);
console.log("Rate of Interest: " + account.rate + "%");
console.log("Total Time Period: " + account.time + " years");
console.log("Simple Interest: ₹" + account.simpleInterest);
console.log("-------------------------------------");
console.log("Total Amount to Pay: ₹" + account.totalAmount);
