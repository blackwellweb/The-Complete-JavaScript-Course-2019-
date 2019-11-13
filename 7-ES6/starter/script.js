/* Variables Declarations with let and const -----------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


/*

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5
// Variables declared with var are function-scoped
function driversLicence5(passedTest) {

    if (passedTest) {
        console.log(firstName); // returns undefined
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + 'born in ' + yearOfBirth + ' ,is now officially allowed to drive a car.');
}

driversLicence5(true);




// ES6
// Variables declared with let and const are bock-scoped
// We can only use a variable asfter we declare it and define it
function driversLicence6(passedTest) {

    //console.log(firstName); // returns Cannot access 'firstName' before initialization (Chrome) or can't access lexical declaration `firstName' before initialization(Firefox)
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + 'born in ' + yearOfBirth + ' ,is now officially allowed to drive a car.');
}

driversLicence6(true);



let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/

/* Blocks and IIFEs ------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
// ES6
{
    const a = 1;
    let b = 2;
}

//console.log(a + b);


// ES5
(function () {
    var c = 3;
})();

console.log(c);
*/

/* Strings in ES6/ES2015 -------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' year old.');

// ES6 Template literals
console.log(`This is ${firstName} ${lastName}. He was borrn in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // true
console.log(n.endsWith('th')); // true
console.log(n.includes('oh')); // true
console.log(firstName.repeat(5)); //JohnJohnJohnJohnJohn
console.log(`${firstName} `.repeat(5)); //John John John John John
*/

/* Arrow Fuctions:Basics -------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

/* Arrow Fuctions:Lexical 'this' Keyword ---------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            // We made the self variable beacuse This function call does not have access to the "this" keyword
            // beacuse we can only have access to it in the method not a function within a method
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {

            // We now have a function that shares the this keyword with its surrounding
            // so we can use the this keyword from the clickme method
            const str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();


// ES6
// This will not work because the this keyword now points to the gobal object
// not box66 as the click me is an arrow function, so function that shares the
// "this" keyword with its surrounding but in this case its surrounding is the gobal object.
// BE CEARFUL WITH ARROW FUNCTIONS!
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {

//             // We now have a function that shares the this keyword with its surrounding
//             // so we can use the this keyword from the clickme method
//             const str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }

// box66.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {

    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);




// ES6
Person.prototype.myFriends6 = function (friends) {

    var arr = friends.map(el => `${this.name}  is friends with  ${el}`);
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Mike').myFriends6(friends);

*/

/* Destructuring ---------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
};

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/* Arrays in ES6 / ES2015 ------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
const boxes = document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// Can also do it like this
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         // continue will skip this iteration of the loop and go right to the next one
//         // If it was the break keyword it would break the loop and the loop would not continue
//         continue;
//         //break;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }


// ES6
// for (const cur of boxesArr6) {
//     if (cur.className === 'box blue') {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }

// Can also do it like this
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full); // Array(6) [ false, false, false, true, false, false ]
console.log(full.indexOf(true)); // 3
console.log(ages[full.indexOf(true)]); // 21

// ES6
console.log(ages.findIndex(cur => cur >= 18)); // 3

// if we didn't want to find the index and all we interested
// in was finding the value that was greater than 18.
console.log(ages.find(cur => cur >= 18)); // 21
*/


/* The Spread Operator ---------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1); // 81

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2); // 81

// ES6
// What this operator here does is to expand this array
// into its components, so in this case 18, 30, 12 and 21
const sum3 = addFourAges(...ages);
console.log(sum3); // 81


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

//const bigFamily = [...familySmith, ...familyMiller];
//console.log(bigFamily); // [ "John", "Jane", "Mark", "Mary", "Bob", "Ann" ]

// We can also add new elements
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily); // [ "John", "Jane", "Mark", "Lily", "Mary", "Bob", "Ann" ]

// We can also use the spread operator on node lists
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
// h is just a node not a node list so we don't put the spread operator before it
const all = [h, ...boxes];

// Convet the node list to an array and change the colour
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

/* Rest Parameters -------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
// Rest parameters allow use to pass an arbitrary number of arguments,
// into a function and use these arguments in that function

// NOTE rest parameters use the same notation as the spread operator "..."
// but they are NOT THE SAME, they are the exact opposite of the spread operator.
// The spread operator take an array and transforms it into single values
// while the rest parameters receive a couple of single values and transforms
// them into an array when we call a function with multiple parameters 

/*
// ES5
function isFullage5() {
    //console.log(arguments);

    // Convet the node list to an array
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    });
}

//isFullage5(1990, 1999, 1965);
//isFullage5(1990, 1999, 1965, 2019, 1987);



// ES6
function isFullage6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullage6(1990, 1999, 1965);
isFullage6(1990, 1999, 1965, 2019, 1987);
*/


/*
// ES5
function isFullage5(limit) {
    console.log(arguments);

    // Convet the node list to an array
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    });
}

//isFullage5(21, 1990, 1999, 1965);




// ES6
function isFullage6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullage6(21,1990, 1999, 1965);
*/


/* Default Parameters ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};


var john = new SmithPerson('John', 1990); //  { firstName: "John", lastName: "Smith", yearOfBirth: 1990, nationality: "american" }
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); //{ firstName: "Emily", lastName: "Diaz", yearOfBirth: 1983, nationality: "spanish" }
*/




// ES6
// If we do not specifically say what the lastName and nationality it will set them them Smith and  american
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};


var john = new SmithPerson('John', 1990); //  { firstName: "John", lastName: "Smith", yearOfBirth: 1990, nationality: "american" }
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); //{ firstName: "Emily", lastName: "Diaz", yearOfBirth: 1983, nationality: "spanish" }