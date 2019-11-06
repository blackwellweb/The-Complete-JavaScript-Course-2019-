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

/* Strings in ES6/ES2015 --------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/