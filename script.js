//Homework:13
let country = "France";
let continent = "Europe";
let population =  65 ;
let isIsland = false;

console.log (country) ;
console.log (continent) ;
console.log (population) ;

let countryDescription = country + ' is located in ' + continent + ', ' + population + ' million people live there.' ; 
console.log(countryDescription)

//Homework:2
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

//Homework:3
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

//Homework:4
 let fruits = [];
 fruits.push("apple","banana","orange");
 let len = fruits.length;
 console.log(fruits);

let numbers = [1,2,3,4,5];
console.log(numbers.pop());
console.log(numbers);

let colors = ["red","green","blue","yellow"];
console.log(colors);
console.log(colors.indexOf("green"));
console.log(colors.includes("oange"));

let names = ["John","Jane","Mike","Jennifer"];
console.log(names);
console.log(names.unshift("David"));
console.log(names.indexOf("Mike"));

let secondNumbers =[2,4,6,8,10];
console.log(secondNumbers.includes(5));
console.log(secondNumbers.push(12));
console.log(secondNumbers);

let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
console.log(months);

let monthsAlphabetOrder = months.sort();
console.log(monthsAlphabetOrder);

let result = months.filter((word) => word.length >3);
console.log(result);

let sixMonths = months.slice(6, 12);
console.log(sixMonths);

let filteredMonths = monthsAlphabetOrder.filter((word) => word.length >5) ;
  
//let phrase = filteredMonths.split("-");

console.log(filteredMonths.join("-"));

//Loop in Array

const fruits2 = ["apple", "banana", "orange"];
console.log(fruits2);

for ( let i = 0; i <= 3; i++ ) {
 console.log(i)
}

const numbers2 = [1,2,3,4];
console.log(numbers2);

let sum = 0;
for (let e of numbers2){
    sum += e;
}
console.log(sum);

const names2 = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
console.log(names2);
const nameLengths = [];

for (let i = 0; i < names2.length; i++) {
  const nameLength = names2[i].length;
  nameLengths.push(nameLength);
}
console.log(nameLengths);


const departments = [
    ["Alex", "Luca", "Marta"],
    ["Leo","Jared","Sophie"],
    ["Chester","Mike","Joe"],
    ["Lenet","Alison","Gaby"]
]
console.log(departments);

let employeeAlphabetOrder = departments.sort();
console.log (employeeAlphabetOrder);

 //Objects

 const person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 30, 
    occupation: "developer" }; 
  
console.log(person);


function createArray(n) {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        newArr.push(i);
    }
    return newArr;
}

let n = 17 ;
let arrayNumber = createArray(n);
console.log(arrayNumber);

let numbers7 = [5,10,15,20,25,30];
console.log(numbers7);
const maxNumbers7 = [];
let max = numbers7[0]; 

for (let i = 0; i < numbers7.length; i++) {
  if (numbers7[i] > max) {
    max = numbers7[i]; 
  }
}
  console.log(max)


function calculateAverageGrade(grades) {
    const gradeValues = Object.values(grades);
    const sum = gradeValues.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
    const average = sum / gradeValues.length;
    console.log(average);
  }
  const studentGrades = {
    math: 9,
    english: 9,
    astronomy: 8,
    physics: 9,
  };
  const averageGrade = calculateAverageGrade(studentGrades);

  console.log("The average grade is: " + averageGrade);

  function dog (name, age, color, puppies) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.puppies = puppies;
  }

  dog.prototype.addPuppies = function(numPuppies) {
    this.puppies = ['Puppy_1','Puppy_2','Puppy_3','Puppy_4','Puppy_5'];
    for (let i = 1; i <= numPuppies; i++) {
      this.puppies.push(`Puppy_${i}`);
    }
  };

  let myDog = new dog("Newton", 1, "golden");
  myDog.addPuppies();
  console.log(myDog); 














