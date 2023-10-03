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

//Homework:14
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

//Homework:15
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
};

///

let currentYear = new Date().getFullYear();
if (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0)
{ console.log(currentYear + " this is a leap year")
}
else { 
    console.log(currentYear + " this year is not leap")   
};

//Homework:17
 let fruits = [];
 fruits.push("apple","banana","orange");
 let len = fruits.length;
 console.log(fruits);

 ///

let numbers = [1,2,3,4,5];
console.log(numbers.pop());
console.log(numbers);

///

let colors = ["red","green","blue","yellow"];
console.log(colors);
console.log(colors.indexOf("green"));
console.log(colors.includes("oange"));

///

let names = ["John","Jane","Mike","Jennifer"];
console.log(names);
console.log(names.unshift("David"));
console.log(names.indexOf("Mike"));

///

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

console.log(filteredMonths.join("-"));

//Homework 18//

const fruits2 = ["apple", "banana", "orange"];
console.log(fruits2);

for ( let i = 0; i <= 3; i++ ) {
 console.log(i)
}

 ///

const numbers2 = [1,2,3,4];
console.log(numbers2);

let sum = 0;
for (let e of numbers2){
    sum += e;
}
console.log(sum);

///

const names2 = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
console.log(names2);
const nameLengths = [];

for (let i = 0; i < names2.length; i++) {
  const nameLength = names2[i].length;
  nameLengths.push(nameLength);
}
console.log(nameLengths);

///

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

///

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

///

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

///

function calculateAverageGrade(grades) {
    const gradeValues = Object.values(grades);
    const sum = gradeValues.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
    const average = sum / gradeValues.length;
    console.log("The average grade is: " + average);
  }

  const studentGrades = {
    math: 9,
    english: 9,
    astronomy: 8,
    physics: 9,
  };

  const averageGrade = calculateAverageGrade(studentGrades);

  ///
  function dog (name, age, color, puppies) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.puppies = puppies;
  }

  dog.prototype.addPuppies = function(numPuppies) {
    this.puppies = ['Puppy_1','Puppy_2','Puppy_3','Puppy_4','Puppy_5'];
    for (let i = 0; i <= numPuppies; i++) {
      this.puppies.push(`Puppy_${i}`);
    }
  };

  let myDog = new dog("Newton", 1, "golden");
  myDog.addPuppies();
  console.log(myDog); 

  //Homework 19//
     
    let personDesc = ['name = John','age:30', 'city: New-York'];
    let i = 0;
    let text = '';
    while (personDesc[i]) {
        text +- personDesc[i] + '\n';
        i++;
    }
    console.log(text);

    ///

    function keyInObject(obj, keyToFind) {
        for (let key in obj) {
            if (key == keyToFind) {
                return true;
            }
        }
    };

    let guy = {
        name: 'John',
        age: 30,
        city: 'New-York'
    };

    let keyToFind = 'age';
    if (keyInObject (guy, keyToFind)) {
        console.log ('true');
    } else {
        console.log('false');
    };

    ///

    function countVowels(string) {
        let vowels =['a','A','e','E','i','I','o','O','u','U'];
        let count = 0;
        let i = 0;
    while (i < string.length) {
        let char = string[i];
        if (vowels.includes(char)) {
            count++
        }
        i++;
    }
        return count;
    }

    let stringContent = 'Hello world, my name is Albert';
    let answer = countVowels(stringContent);
    console.log(answer); 

//     function combineTheWords(obj){
//         let keys = Object.keys(obj);
//         let combineValue = '';
//         let i = 0;
//     do {
//         let currentProp = keys[i];
//         combineValue += obj[currentProp];
//         i++;
//         console.log(combineValue)

//     } while (i<keys.length);

//      return combineValue
//    }

//    let obj = { prop1: 'Hello', prop2:'World', prop3: '!'}
//    console.log (combineTheWords(obj));

let initialObject = { prop1: 'Hello', prop2: 'World', prop3: '!'}

function combineTheWords(obj) {
    let objKeys = Object.keys(obj);

    let result = '' ;
    let i = 0;
    do {
        let currentKey = objKeys[i];
        let currentValue = initialObject [currentKey];
        result += currentValue;
        i++;
    } while (i < objKeys.length);
    return result;
}

console.log(combineTheWords(initialObject));

//     function calculateAverageMark(_students) {
//         let average = {};

//     students.forEach(s => {
//         let averageMark = s.marks.reduce((a, i) => a + i) / s.marks.length;
//         average[s.name] = `medium: ${averageMark.toFixed(2)}`;
//      });
//      return average;
//     }

//     let students = [
//     {
//         name: "John",
//         marks: [8, 7, 9]
//     },
//     {
//         name: "Mary",
//         marks: [9, 9, 10]
//     },
//     {
//         name: "Alex",
//         marks: [6, 7, 8]
//     }
// ];
// let studentAverageMark = calculateAverageMark(students);
// console.log(studentAverageMark);

 let input = {
    John: [8,7,9],
    Mary: [9,9,10],
    Alex: [6,8,7],
 };

 const getMedium = (initialObj) => {
    let resultObject = Object.assign({}, initialObj);
    for (element in initialObj) {
        let curentValue = initialObj[element];

        i = 0;
        let sum = 0;
        let medium = 0;
        let arrayLength = curentValue.length;

        while (i < arrayLength) {
            sum += curentValue[i];
            i++;
        }
        medium = sum / arrayLength;

        resultObject[element] = `medium: ${medium}`;
    }
    return resultObject;
 };
 console.log(getMedium(input));

 ///

const reversedWords = (initialString) => {
    const initialStringArray = initialString.split('');

    const resultStringArray = [];
    let i = initialStringArray.length - 1;
    do {
        resultStringArray.push(initialStringArray[i]);
        i--;
    }
    while (i >= 0);

    let resultString = resultStringArray.join('');
    return resultString;
};
let initialString = 'Hello, world!';

console.log(reversedWords(initialString));

///

function isPalindrome(str) {
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();
 
    let start = 0;
    let end = cleanedStr.length - 1;
  
    while (start < end) {
      if (cleanedStr[start] !== cleanedStr[end]) {
        return false;
      }
      start++;
      end--;
    }
 
    return true;
  };
 
  const inputString = "radar";
  const palindromeResult = isPalindrome(inputString);
  console.log(palindromeResult); 

//Homework 20//
const studentNotes = [
    { name: "Anna", note: 9 },
    { name: "Denis", note: 7 },
    { name: "Cristian", note: 8 },
    { name: "Daniel", note: 6 },
    { name: "Elena", note: 10 }
  ];
  
  function calculateAverageNote(notes) {
    const total = notes.reduce((accumulator, student) => {
      return accumulator + student.note;
    }, 0);
  
    const average = total / notes.length;
    return average;
  }
  
  const averageNote = calculateAverageNote(studentNotes);
  console.log(averageNote); 

  ///

const products = [
    {name: "Tshirt", price: 50, isAvailable: true },
    {name: "Pants", price: 80, isAvailable: false },
    {name: "Jacket", price: 120, isAvailable: true },
    {name: "Shirt", price: 60, isAvailable: true },
    {name: "Skirt", price: 40, isAvailable: false }
  ];

  const items = products
  .filter(item => item.isAvailable)
  .map(product => product.name)
  console.log(items)

  ///

  const figures = [10,5,8,15,3,20]
  const maxDigit = figures.reduce(function (largest, digit){
    return (largest > digit) ? largest : digit
  })
  console.log(maxDigit);

  ///

  const studentsClassification = [
    {
        John: [8,7,9]
    },
    {
        Mary: [9,9,10]
    },
    {
        Alex: [6,8,7]
    }
  ];
  const averageClassification = studentsClassification.reduce((acc,student) => {
    acc[Object.keys(student)[0]] = student[Object.keys(student)[0]].reduce((acc, score) => acc + score, 0) / student[Object.keys(student)[0]].length;
    return acc;
  });

  console.log(averageClassification);

  //Homework 22//

  let student = {
    name: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
};

const studentInfo = ({ name, lastName, faculty, year }) => {
    return [`${name} ${lastName}`, faculty, year];
};

const resultIs = studentInfo(student);
console.log(resultIs);

///

const severalColors = ['red', 'green', 'blue', 'violet'] 

const [el1, , el3] = severalColors
console.log(el1);
console.log(el3);

//

const extractFirstAndThird = ([first, , third]) => {
    return [first, third];
};

const theColors = ["red", "green", "blue", "violet"];
const [first, third] = extractFirstAndThird(theColors);

console.log(first);
console.log(third);

///

function getArgumentsAsArray() {
    return Array.from(arguments);
  }

  const output = getArgumentsAsArray(1, 2, 3, 4, 5);
  console.log(output);

///

function combineArrays(arrayOne, arrayTwo) {
    return [...arrayOne, ...arrayTwo];
  }

  const arrayOne = [7, 8, 9];
  const arrayTwo = [10, 11, 12];
  
  const combinedArray = combineArrays(arrayOne, arrayTwo);
  console.log(combinedArray);

  ///
  
  let languageObject = { language: 'en' };

  function addLanguageToStudent(student, languageObject) {
    return {
        ...student,
        ...languageObject,
    };
}

let updatedStudent = addLanguageToStudent(student, languageObject);
console.log(updatedStudent);

 ///

 function ConvertString(word) {
   const lowercaseWord = word.toLowerCase();
   const charCounts = {};
   for (const char of lowercaseWord) {
    charCounts[char] = (charCounts[char] || 0) + 1;
   }
   let result = '';
   for (const char of lowercaseWord) {
    if (charCounts[char] > 1) {
    result += ')';
    } else {
    result += '(';
    }
   }
   return result;
}

console.log(ConvertString('din'));
console.log(ConvertString('recede'));
console.log(ConvertString('success'));
console.log(ConvertString('(( @'));

 ///

const evenNum = [2, 4, 0, 100, 4, 11, 2602, 36];
const oddNum = [160, 3, 1719, 19, 11, 13, -21];
function findOutlier(int) {
    let even = int.filter((a) => a % 2 === 0);
    let odd = int.filter((a) => a % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}
console.log(findOutlier(evenNum));
console.log(findOutlier(oddNum));





