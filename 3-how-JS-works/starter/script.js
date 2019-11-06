///////////////////////////////////////
// Lecture: Hoisting


// // Functions

// // Will work 
// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016 - year);
// }


// // Will not work
// //retirement(1965);

// var retirement = function (year) {
//     console.log(65 - (2016 - year));
// }

// // Will work 
// retirement(1965);

// // Variables
// console.log(age); // undefined
// var age = 23;
// console.log(age); // 23


// function foo() {
//     var age = 65;
//     console.log(age); // 65
// }
// foo();
// console.log(age); // 23



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword


//console.log(this); // Will point to the window object


// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this); // Will point to the window object, Because this is a regular function call and not a Method
//     // In a regular function call (this) will always point to the window object
// }


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this); // Will point to the john object
        console.log(2016 - this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this); // Will point to the window object
        // }
        // innerFunction();
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing
// We are going to borrow John's method to use it on mike
// We are saying that we want the Mike calculate age function to be exactly the same as the John calculate age function
mike.calculateAge = john.calculateAge;

mike.calculateAge();
