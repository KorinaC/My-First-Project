
let number = 3;
if(number % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

let isLoggedIn = true ;
let message = isLoggedIn ? "Save password?" : "Please enter a loggin and password";
console.log(message);

let pricePerUnit = 30; 
let quantity = 50; 
let isAvailable = true;
let totalCost = pricePerUnit * quantity
if (isAvailable = true ) {
    console.log("The total cost of the inventory at the warehouse " + totalCost )
}
else {(number % 2 !== 0)
    console.log("There is no inventory at the warehouse")
}


let currentYear = new Date().getFullYear();
if (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0)
{ console.log(currentYear + " this is a leap year")
}
else { 
    console.log(currentYear + " this year is not leap")   
} 