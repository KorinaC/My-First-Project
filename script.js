let country = "France";
let continent = "Europe";
let population =  65 ;
let isIsland = false;

console.log (country) ;
console.log (continent) ;
console.log (population) ;

let countryDescription = country + ' is located in ' + continent + ', ' + population + ' million people live there.' ; 
console.log(countryDescription)


let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.89;

let bmiSarah = weightSarah / (heightSarah ** 2);
console.log(bmiSarah)

let bmiBob = weightBob / (heightBob ** 2);
console.log(bmiBob)

if (bmiSarah < 18,5) {
    console.log("Underweight")
} else {(bmiSarah = 18,5 && bmiSarah < 25) 
    console.log("Sarah has a normal weight")
} 

if (bmiBob > 25 ) {
    console.log("Overweight")
} else {(bmiBob = 25 && bmiBob < 25) 
    console.log("Bob has a normal weight")
} 

let countryCode = 'MD'

switch (countryCode) {
    case 'LU':
     console.log('Luxembourg');
     break;
    case 'FR':
     console.log('France');
     break;
    case 'MD':
     console.log('Moldova');
     break;
    case 'IT':
     console.log('Italy');
     break;   
}

let grade = 89;

switch (grade) {
    case grade >= 97 && grade <= 100:
     console.log('A+');
     break;
    case grade >= 93 :
     console.log('A');
     break;
    case grade >= 90 :
     console.log('A-');
     break;
    case grade >= 87 :
     console.log('B+');
     break; 
    case grade >= 83:
     console.log('B');
     break;
    case grade >= 80:
     console.log('B-');
     break;
    case grade >= 77:
     console.log('C+');
     break;
    case grade >= 73:
     console.log('C');
     break; 
     case grade >= 70:
     console.log('C-');
     break;
    case grade >= 67:
     console.log('D+');
     break;
    case grade >= 63:
     console.log('D');
     break;
    case grade >= 60:
     console.log('D-');
     break; 
    case grade >= 59 :
     console.log('F');
     break; 
}

function tellFortune(jobTitle, location, partnerName, kidsNumber) {
    var fortune = 'You will be a  ' + jobTitle + ' in ' + location+ ' and married to ' + partnerName+ '  with ' + kidsNumber + ' kids.';
    console.log(fortune);
}

tellFortune('manager', 'France', 'Alexander', 3);
tellFortune('director', 'Luxembourg', 'Leo', 2);
tellFortune('CFO', 'Switzerland', 'Sebastien', 1);


function calculateDogAge(dogAge) {
    var dogYears = 7 * dogAge;
    console.log("Your dog is " + dogAge + " years old in dog years.");
}

calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(7);

let number = 3;
if(number % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

let isLoggedIn = true ;
if(isLoggedIn ) {
    console.log("user is logged in");
}
else {
    console.log("please enter user name and password");
}

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