
/* Variables and Data Types ----------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// Primitive Javascript data Types
// Primitive data type just means that its not for objects

// Number: Floating point Numbers, for decimals and integers
// All numbes are float numbers (Example : 1.0) in js not in integers (Example : 1)

// String: Sequence of characters, used for text

// Boolean: Logical data type that can only be true or false

// Undefined: Data type of a variable that does not have a value yet
// This is auto assigned to a variable that does not yet have a value

// Null: Also means 'non-existen'



// JavaScript has dynamic typing: data types are automatically assigned variables
// This means that we do not have to manually define data type of a variable
// So Js auto Decides for use is a var is a number,string .. etc for us


// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// Rules for variables
// Can't start with numbers or Symbols Except for a $ or a _

// Invalid 
//var 3years = 3;

// Valid 
// var $3years = 3;
// var _3years = 3;


// Can't use reserved JavaScript keywords as variable names

// Invalid 
//var function = 23;



/* Variable Mutation and Type Coercion -----------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


// Type coercion
// Type Coercion means that js with automatically convert one type to another

// For Example
// var firstName = 'John';
// var age = 28;

// This will console.log John 28 as a string even age is a float
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable mutation
// This means when you change the value of a variable 
//age = 'twenty eight';
//job = 'driver';

//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Exploring prompt
//var lastName = prompt('What is his last name?');
//console.log(firstName + ' ' + lastName);


/* Basic Operators -------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// Math operators
// yearJohn = now - 28;
// yearMark = now - 33;

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// Logical operators 
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);


/* Operator Precedence ---------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;

// Operator Precedence which operator is executed first (now - yearJohn)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
// Will give ypu a Table ranking all  the operators for  highest (20) to lowest (1) precedence.
// For Example "-" has a ranking of 16 aand ">=" has a ranking of 11 
// So the "-"" is executed first
//var isFullAge = now - yearJohn >= fullAge; // true
//console.log(isFullAge);



//var ageJohn = now - yearJohn;
//var ageMark = 35;
// This is wrong as "/" has procedence over "-" so "/" will be executed first
//var average = ageJohn + ageMark / 2;

// This will work because grouping "()", thas the highest precedence value
// So will be executed first
//var average = (ageJohn + ageMark) / 2;
//console.log(average);


// Multiple assignments
//var x, y;

// This works because the assignment for "=" is from right-to-left 
// so it starts with result witch is 26
// witch is assigned to  y, so y now has the value of 26
// then y is assigned to x  , so x now also has the value of 26

//x = y = (3 + 5) * 4 - 6; // 8 * 4  - 6 // 32 - 6 // 26 
//console.log(x, y); // 26 26


// More operators

// These are both the same
// x = x * 2;
// x *= 2;

// These increment by one are all the same
// x = x + 1;
// x += 1;
// x++;


/* CODING CHALLENGE 1 ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
  Mark and John are trying to compare their BMI (Body Mass Index),
  which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter).
*/


// 1. Store Mark's and John's mass and height in variables
//var markMass = 80;
//var johnMass = 60;

//var markHeight = 2;
//var johnHeight = 1;


// 2. Calculate both their BMI's
//var markBMI = markMass / (markHeight * markHeight);
//var johnBMI = johnMass / (johnHeight * johnHeight);

// 3. Create a boolean variable contain information about whether
//    Mark has a higher BMI than John
//var higherBMI = markBMI > johnBMI;

// 4. Print a string to the console containing the variable for step 3.
//    (Something like "Is Mark's BMI higher than John's true")      
//console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + higherBMI);


/* If / else Statements --------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = true;

// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }



// var markMass = 78;
// var johnMass = 92;

// var markHeight = 1.69;
// var johnHeight = 1.95;


// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// if(markBMI > johnBMI){
//     console.log('Mark\'s BMI is higher than John\'s.');
// }else{
//     console.log('John\'s BMI is higher than Mark\'s.');
//}

/* Boolean Logic ---------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man.');
// } 

/* The Ternary Operator and Switch Statements ----------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// var firstName = 'John';
// var age = 14;

// Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// The same but not as a ternary operator
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }


//  Switch statement
// var job = 'instructor';

// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// This is a trick To make the switch statement work like an 
// if else statement with ranges

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


/* Truthy and Falsy values and equality operators ------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// In JavaScript a falsy value that is considered false when evaluated in an if else statement condition
// These values are:
// undefined
// null
// 0
// '' (empty strings)
// NaN (not a number)

// Truthy values are all the values that is considered true evaluated in an if else statement condition
// These values are:
// All the values that are not falsy

// var height;

// height = 23;
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has not been defined');
// }

// Equality operators
// Type coerction means The data types both of bothvariables do not have to match
// For example is when you have a number (lets say 23)
// Js converts that to a string and compares it to another string
// 23 == '23' 
// returns true

// if (height == '23') {
//     // Will Print
//     console.log('The == operater does type coerction!')
// }

// Strict equality  operator
// The === operator will not do type coerction
// Therefore is you had 23 === '23' it would return false
// The types not the same, a number is not equal to string
// Try to use this operator as you encounter less and unexpected bugs and errors

// if (height === '23') {
//     console.log('The == operater does type coerction!')
// } // Won't Print


/* CODING CHALLENGE 2 ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
John and Mike both play basketball in different teams.
In the lastest 3 games, John's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.
*/

// 1. Calculate the average score for each team
// var johnsAverage = (89 + 120 + 103) / 3;
// var mikesAverage = (116 + 94 + 123) / 3;

// 2. Decide which teams wins on average (highest average score),
//    and print the winner to the console.
//    Also include the average score in the output.
// if (johnsAverage > mikesAverage) {
//     console.log('John is the winner! His average score was ' + johnsAverage);

// } else if (johnsAverage < mikesAverage) {
//     console.log('Mike is the winner! His average score was ' + mikesAverage);

// }

// 3. Then change the scores to show different winners. Don't forget
//    to take into account there might be a draw (the same average score)
// if (johnsAverage > mikesAverage) {
//     console.log('John is the winner! His average score was ' + johnsAverage);

// } else if (johnsAverage < mikesAverage) {
//     console.log('Mike is the winner! His average score was ' + mikesAverage);

// } else {
//     console.log('Its was a draw! John\'s average score was ' + johnsAverage + 'Mike\'s average score was ' + mikesAverage);
// }

// 4. EXTRA: Mary also play basketball, and her team scored 97,
//    134 and 105 points. Like before, log the average winner to the
//    console. HINT: you will need the && operator to make the decision.
// var marysAverage = (97 + 134 + 105) / 3;

// if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
//     console.log('John is the winner! His average score was ' + johnsAverage);

// } else if (johnsAverage < mikesAverage && mikesAverage > marysAverage) {
//     console.log('Mike is the winner! His average score was ' + mikesAverage);

// } else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
//     console.log('Mary is the winner! Her average score was ' + marysAverage);
// }

// 5. Like before, change the scores to generate different winners, keeping
//    in mind there might be draws.
// if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
//     console.log('John is the winner! His average score was ' + johnsAverage);

// } else if (johnsAverage < mikesAverage && mikesAverage > marysAverage) {
//     console.log('Mike is the winner! His average score was ' + mikesAverage);

// } else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
//     console.log('Mary\'s is the winner! Her average score was ' + marysAverage);

// } else {
//     console.log('Its was a draw! John\'s average score was ' + johnsAverage + 'Mike\'s average score was ' + marysAverage + 'Marys\'s average score was ' + marysAverage);

// }


/* Functions -------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


// function nameOfFunction(Arguments we want to pass in to the function ){
//    function block
//}

// Declaring a function using function a statement
// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);


// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else {
//         console.log(firstName + ' is already retired.');
//     }


// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');


/* Function Statements and Expressions -----------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// Declaring a function by using  function expressions


// Function declaration
// function whatDoYouDo(job, firstname) {
// }

// Function expression
// var whatDoYouDo = function (job, firstname) {
//     switch (job) {
//         case 'teacher':
//             return firstname + ' teaches kids how to code';
//         case 'driver':
//             return firstname + ' drives a cab in Lisbon';
//         case 'designer':
//             return firstname + ' desings beautiful websites';
//         default:
//             return firstname + ' does something else';

//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));


// Statements and expressions do not just apply to functions
// They are a global concept in JavaScript


// Expressions
// JavaScript expressions are pieces of code
// That always produce value
// It doesn't matter how long they are as long as they produce single
// So whenever JavaScript xxpects a value we always use expressions


// Statements
// Statements just perform actions
// So they do things but do not produce immediate results
// For example if else statements or while loops


/* Arrays ----------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

//  Initialize new array
//  Both the same, the first one is far more common
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// // array[index]
// console.log(names[0]);

// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);


// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

// console.log(isDesigner);

/* CODING CHALLENGE 3 ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


/*
  John and his family went on a holiday and went to 3
  different restaurants. The bill were $124, $48 and $268.

  To tip the waiter a fait amount, John created a simple tip
  calculator (as a function). He likes to tip 20% of the bill
  when the bill is less than $50, 15% when the bill is between
  $50 and $200, and 10% if the bill is more than $200.

  In the end, John would like to have two arrays:
  1) Containing alll three tips (one for each bill)
  2) Containing all three final paid amounts (bill + tip)

  (NOTE: To calculate 20% of a value, divide by a 100 and multiply it by 20)


*/



// My Answer
// var bills = [124, 48, 268];

// var tips = [];
// var finalAmount = [];

// var tipCalculator = function (value, arrayOne, arrayTwo) {

//   if (value < 50) {
//     arrayOne.push((value / 100) * 20);
//     arrayTwo.push(value + ((value / 100) * 20));

//   } else if (value >= 50 && value <= 200) {
//     arrayOne.push((value / 100) * 15);
//     arrayTwo.push(value + ((value / 100) * 15));

//   } else {
//     arrayOne.push((value / 100) * 10);
//     arrayTwo.push(value + ((value / 100) * 10));
//   }
// }


// bills.forEach((e) => {
//   tipCalculator(e, tips, finalAmount);
// });

// console.log(tips); // [18.6, 9.6, 26.8]
// console.log(finalAmount); //  [142.6, 57.6, 294.8]


/* CODING CHALLENGE 3: Solution ------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// function tipCalculator(bill) {
//   var percentage;

//   if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//   return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips, finalValues); //[18.599999999999998, 9.600000000000001, 26.8] , [142.6, 57.6, 294.8]


/* Objects and Properties ------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

//  In objects we define keyvalue pairs, this means each value has a name
//  Which is called the key
//  We can use objects to group together different variables,
//  that belong together and that have no particular order
//  A fundamental concept with arrays is that the order matters 
//  however in objects it does not


// Object literal
// This {} is the Object literal, 
// Which is a container that we can fill with properties/ keyvalue pairs,
// We can also put arrays inside the object and even other objects
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };

// // All do the same thing
// console.log(john.firstName);
// console.log(john['firstName']);
// var x = 'firstName';
// console.log(john[x]);


// // Mutate the data
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1996;
// jane['lastName'] = 'Smith';
// console.log(jane);

/* Objects and Methods ---------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// Methods are functions attached to objects

// Passing the birthyear in as an argument
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function (birthYear) {
//     return 2018 - this.birthYear;
//   }
// };

// console.log(john.calcAge(1990));



// Read the birthyear Directly from the John object using (this)
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function () {
//     return 2018 - this.birthYear;
//   }
// };

//console.log(john.calcAge()); // 26

// Instead returning the age result we can store directly the object
// This is the best way to do it and how its supposed to be working
// it in the object
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2018 - this.birthYear;
//   }
// };

// john.calcAge();
// console.log(john);


/* CODING CHALLENGE 4 ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


/*
Let's remember the first coding challenge where Mark and John
compared thier BMIs. Let's now implement the same functionality
with odjects and methods.

1. For each of them, create an object with properties for their
   full name, mass and height;

2. Then, add a method to each object to calculate the BMI,
   Save the BMI to the object and also return it from the
   method.

3. In the end, log it to the console who has the highest BMI,
   toghether with the full name and the respective BMI. Don't
   forget they might have the same BMI

*/


// var john = {
//   fullName: 'John Smith',
//   mass: 75,
//   height: 1.9,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };


// var mark = {
//   firstName: 'Mark Miller',
//   lastName: 'Smith',
//   mass: 80,
//   height: 2,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };


// // return the BMI from the method
// console.log(john.calcBMI());
// console.log(mark.calcBMI());


// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + ' has the hightest BMI ' + john.calcBMI());

// } else if (mark.calcBMI() > john.calcBMI()) {
//   console.log(mark.fullName + ' has the hightest BMI ' + mark.calcBMI());
// } else {
//   console.log('They both have the same BMI of' + john.calcBMI());
// }




/* CODING CHALLENGE 4: Solution ------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


// var john = {
//   fullName: 'John Smith',
//   mass: 75,
//   height: 1.9,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };


// var mark = {
//   firstName: 'Mark Miller',
//   lastName: 'Smith',
//   mass: 80,
//   height: 2,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };


// // return the BMI from the method
// console.log(john.calcBMI());
// console.log(mark.calcBMI());




// What the correct Answer was
// We can use john.bmi Instead of john.calcBMI() as we have saved
// it to the object of we don't need to keep calling the method

// Save the BMI to the object
// john.calcBMI();
// mark.calcBMI();

// if (john.bmi > mark.bmi) {
//   console.log(john.fullName + ' has the higher BMI of ' + john.bmi);

// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + ' has the higher BMI of ' + mark.bmi);
// } else {
//   console.log('They have the same BMI');
// }


// However the way i did it was better as you can call the method
// in the if Statement
// So the Lecturer's answer the same as myn just with  different 
// console.logs 

// if (john.bmi > mark.bmi) {
//   console.log(john.fullName + ' has the higher BMI of ' + john.bmi);

// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + ' has the higher BMI of ' + mark.bmi);
// } else {
//   console.log('They have the same BMI');
// }

/* Loops and iteration ---------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// A for loop has three parts
// An initial value of the counter
// A condition is evaluated before each loop iteration
// A Counter update After each iteration
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// i = 0, 0 < 10 true, log i to console, i ++
// i = 1, 1 < 10  true, log i to console, i ++
// ......
// i = 9, 9 < 10  true, log i to console, i ++
// i = 10, 10 < 10  FALSE, exit the loop


// for (var i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

//var john = ['John', 'Smith', 1990, 'teacher', false];

// for loop
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// while loop
// With a while we only have the condition
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// continue and break statements
// We use a break statement in order to break out of a loop
// And we use continue to the current iteration of the loop and continue 
// with the next one

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var i = 0; i < john.length; i++) {
//   // !== This is the strict different operator
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// } // will log: John , Smith , teacher


// for (var i = 0; i < john.length; i++) {
//   // !== This is the strict different operator
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// } // will  log: John , Smith 


// // Mini task
// // Looping backwards
// for (i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }


/* CODING CHALLENGE 5 ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// var johnsBills = {
//   bill: [124, 48, 268, 180],
//   tipCalculator: function () {

//     // Make empty arrays and percentage variable
//     var allTips = [];
//     var finalPaidAmounts = [];
//     var percentage;

//     // Loop over the bill array
//     for (var i = 0; i < this.bill.length; i++) {

//       // Find out what percentage you need
//       if (this.bill < 50) {
//         percentage = .2;
//       } else if (this.bill >= 50 && this.bill < 200) {
//         percentage = .15;
//       } else {
//         percentage = .1;
//       }

//       // Calculate the tip
//       var tip = percentage * this.bill[i];

//       // Push it into the allTips array
//       allTips.push(tip);
//       // Calculate the final paid amout and push it to the finalPaidAmounts array
//       finalPaidAmounts.push(this.bill[i] + tip);
//     }

//     // add both arrays to the object
//     this.allTips = allTips;
//     this.finalPaidAmounts = finalPaidAmounts;


//     //return [allTips, finalPaidAmounts];

//   }
// }

// // Fire method as this will add  allTips and finalPaidAmounts
// // to the johnsBills object as you will need this later
// johnsBills.tipCalculator();



// var marksBills = [77, 375, 110, 45];
// var marksTips = [];

// var percentage;

// // Loop over marksBills array
// for (var i = 0; i < marksBills.length; i++) {

//   // Find out what percentage you need
//   if (marksBills[i] > 100) {
//     percentage = .2;
//   } else if (marksBills[i] >= 100 && marksBills[i] < 300) {
//     percentage = .1;
//   } else {
//     percentage = .25;
//   }

//   // Calculate the tip and push it to the marksTips array
//   marksTips.push(percentage * marksBills[i]);
// }


// // Get average tip using a function
// var averageTip = function (array) {
//   var currentsum = 0;
//   for (var i = 0; i < array.length; i++) {
//     currentsum += array[i];
//   }
//   return currentsum / array.length;
// }


// var johnsAverageTip = averageTip(johnsBills.allTips);
// var marksAverageTip = averageTip(marksTips);


// if (johnsAverageTip > marksAverageTip) {
//   console.log('John\'s average Tip (' + johnsAverageTip + ') was the highest');
// } else {
//   console.log('Mark\'s average Tip (' + marksAverageTip + ') was the highest');
// }



/* CODING CHALLENGE 5: Solution ------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {

      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      // Add reults to the corresponing array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }


  }
}




var mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {

      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // Add reults to the corresponing array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }


  }
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}


var test = [123, 234, 245, 23, 1]

// Do all calculations
john.calTips();
mark.calTips();


// This will Calculate the average and add new average to both objects
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else {
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
