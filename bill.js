
let item1 = "Laptop Bag";
let price1 = 3000;

let item2 = "Bluetooth Speaker";
let price2 = 5000;

let item3 = "Wireless Mouse";
let price3 = 4500;

let discountRate = 0;
let subtotal = price1 + price2 + price3;

if (subtotal >= 15000) 
    {
    discountRate = 20;
} 
else if (subtotal >= 10000)
     {
    discountRate = 15;
} 
else if (subtotal >= 5000)
     {
    discountRate = 5;

} else
     {
    "NO DISCOUNT ";
}

let discountAmount = (subtotal * discountRate) / 100;
let total = subtotal - discountAmount;


console.log();
console.log(" ***SHOPPING BILL*** ");
console.log();
console.log(item1 + " " + price1);
console.log(item2 + " " + price2);
console.log(item3 + " " + price3);
console.log("---------------------------------");
console.log("Subtotal : " + subtotal);
console.log("Discount (" + discountRate + "%):" + discountAmount);
console.log("---------------------------------------------");
console.log("Total Payable   : " + total);


