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

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

