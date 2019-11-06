/* Everything Is an Object: Inheritance and the PrototypeChain -----*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// Constructors and/or  Prototypes in JavaScript are the same as classes in other Programming Languages

// Inheritance is when one object is based on another object

// JavaScript is prototype-based this means inheritance uses something called prototypes
// This is every JavaScript object has a prototype property That makes inheritance possible

// SUMMARY

// Every JavaScript object has a prototype property, 
// wich makes inheritance possible in JavaScript;

// The prototype of an oject is where we put methods and properties
// that we want other objects to inherit;

// The Constructor's prototype property is NOT the prototype of the Constructor
// itself , it's the prototype of ALL instances that are created throught it;

// When a certain method (or property) is called, the search starts in the object
// itself, and if it cannot be found, the search moves on to the object's prototype.
// This continues until the method is found: prototype chain.



/* Creating Objects: Functions Constructors ------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function constructor
// A Function constructor  is like a a Pattern for writing a blueprint
// Convention in JavaScript is that we always write function constructors starting a capital letter
// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function () {
//         console.log(2016 - this.yearOfBirth);
//     }
// }

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}

// Can add Properties to prototype however this is not very common
// but this example shows can do it
// However john, jane and mark will Inherit the same last name
// Because it is in the prototype property function constructor
Person.prototype.lastName = 'Smith';

// When we use the new Operator a brand new empty object is made
// This case the constructor function in this case Person
// is called with the arguments we specified
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'teacher');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

*/
/* The Prototype Chain in the Console ------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


/*
// Useful console Commands
console.log(john.hasOwnProperty('job'));

var x = [2,4,6];

console.log(x); // (3) [2, 4, 6]
console.info(x);
// (3) [2, 4, 6]
// 0: 2
// 1: 4
// 2: 6
// length: 3
//__proto__:Array(0)
*/

/* Creating Objects: Object.create ---------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


/*
// First we define an object that will act the prototype
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

// Then we will Then we will create an object based on that prototype
// Not a very good way because we to in the data after
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// This is A better way of doing it .create can take in  a second argument
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});


// The difference between object.create and the function constructor pattern is
// that the object.create builds an object that inherits directly
// from the one that we passed into the first argument in this case personProto.

// While, on the other hand, the function constructor
// the newly created object inherits from the constructor's prototype property

// One of the biggest benefits of object.create is that it allows us to implement
// a really complex inheritants structures in an easier way than function constructors
// because it allows us to directly specify which object should be a prototype

// But the most popular, though is still the function constructor

*/



/* Primitives vs. Objects ------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// A big difference between primitives and objects is that variables 
// containing primitives actually hold that data inside of the variable itself.
// On object this is very different, Variables associated with objects
// do not actually contain the object but instead contain a reference to the
// place in memory where the bject sits, so where the object is stored.

// So again a variable declared as an object does not have a real
// copy of the object it just point to that object.

/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23


// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); // 27
console.log(obj.city); // San Francisco
*/


/* First Class Functions: Passing in Functions as Arguments --------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAge);
console.log(rates);

*/

/* First Class Functions: Functions Returning Functions ------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + 'What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

// Same as the Above
interviewQuestion('teacher')('Mark');
*/

/* Immediately Invoked Function Expressions (IIFE) -----------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score); // This will not work as we can't Access it outside of the function scope


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

/* Closures --------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
// Closures Summary
// An inner function has always access to the variables and parameters
// of its out function,  even after the outer function has returned.

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUs = retirement(66);
var retirementGermany = retirement(67);
var retirementIceland = retirement(65);

retirementUs(1990);
retirementGermany(1990);
retirementIceland(1990);

// Same as the above
retirement(66)(1990);


// InterviewQuestion function from the last lesson but using Closures
// How i did it 
// function interviewQuestion(name) {
//     var a = name;
//     return function (job) {
//         if (job === 'designer') {
//                 console.log(a + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//                 console.log('What subject do you teach, ' + a + '?');
//         } else {
//                 console.log('Hello ' + a + 'What do you do?');
//         }
//     }
// }


// var johnsQuestion = interviewQuestion('John');
// johnsQuestion('designer');


// How the Lecturer did it
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + 'What do you do?');
        }
    }
}

interviewQuestion ('teacher')('John');
*/


/* Bind, Call and Apply --------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


/*
// Call, apply and bind methods in a nutshell these methods allow us
// to call a function and set the this variable manually. 

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' + this.name + ',  I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ',  I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


john.presentation('formal', 'morning'); // Good morning, Ladies and gentlement! I'm John,  I'm a teacher and I'm 26 years old.

// We want to use the presentation method for emily however her object doesn't have it
// We can use the call method to do this 
// How does this work?
// The first argument for the call method is always to set the this variable
// So if we set the this variable to emily, then the this variable is now emily not john (not this.name = john.name but this.name = emily.name)
// This is called method borrowing because we actually borrowed the method from john
// to use it on the emily object
john.presentation.call(emily, 'friendly', 'afternoon'); // Hey! What's up? I'm Emily,  I'm a designer and I'm 35 years old. Have a nice afternoon.

// The apply method is very similar to the call method,
// but the only difference is that this accepts the arguments as an array
//john.presentation.apply(emily, ['friendly', 'afternoon']); // won't work because our method is not Expecting an array, this is just to show the apply method



// Bind similar to the call method, however it doesn't immediately call the function
// but instead it generates a copy of the function
// so we can make a function with a preset argument
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning'); // Hey! What's up? I'm John,  I'm a teacher and I'm 26 years old. Have a nice morning.
johnFriendly('night'); // Hey! What's up? I'm John,  I'm a teacher and I'm 26 years old. Have a nice night.


var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon'); // Good afternoon, Ladies and gentlement! I'm Emily,  I'm a designer and I'm 35 years old.




var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}


function isFullAge(limit,el) {
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages); // [26, 51, 79, 11, 18]
console.log(fullJapan); // [true, true, true, false, false]

*/


/* CODING CHALLENGE 7 ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
// We use an Immediately Invoked Function Expression (IIFE)
// So the rest of our code can't access anything in this function
(function () {

    // Build a function contructor called question
    var Question = function (questionItself, answers, correctAnswer) {
        this.questionItself = questionItself;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.getAnswer = function (e) {
        // Have to use == not ===  because when we use prompt() function it will return a number as a string 
        if (e == this.correctAnswer) {
            console.log('Correct Awswer!');
            return true;
        } else {
            console.log('Incorrect Awswer');
            return false;
        }
    }

    Question.prototype.outputQuestion = function () {
        console.log(this.questionItself);
        this.answers.forEach(e => {
            console.log(e);
        });
    }



    // Create a couple of questions using constructor
    var questionOne = new Question('Is JavaScript the coolest programing language in the world?', ['0: Yes', '1: No'], 0);
    var questionTwo = new Question('What is the name of this courses\'s teacher', ['0: John', '1: Michael', '2: Jonas'], 2);
    var questionThree = new Question('What does best describe coding?', ['0: Boring', '1: Hard', '2: Fun', '3: Tedious'], 2);



    // Store all questions in an array
    var questions = [questionOne, questionTwo, questionThree];


    // Make a function that selects one Random question and returns it 
    function getRandomQuestion(arr) {
        var randomQuestion = arr[Math.floor(Math.random() * arr.length)];
        return randomQuestion;
    }





    // Make a users score variable
    var score = 0;

    // Make the ouput variable
    var output = getRandomQuestion(questions);

    // Output the question to the console
    console.log(output.outputQuestion());

    // Prompt the user to enter an answer and then output if its correct or incorrect
    var user = prompt("Please select the correct answer(just type an number)");

    // Can't Get the game to never end will have to have a look at the solution


    // Exit the Game if the user enters in the word exit
    if(user === 'exit'){
         console.log('Exit Game');
    }else{
        // Outup answer and if the answer is correct add to and output score
        var didUserScore = output.getAnswer(user);
        if(didUserScore === true){
            score++; console.log('Score = ' + score);
        }
    }

})();

*/




/* CODING CHALLENGE 7, Part 1 --------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/*
(function () {

    // Function Constructor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer!')
        } else {
            console.log('Wrong answer. Try agian :)')
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);


    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);

})();
*/



/* CODING CHALLENGE 7, Part 2 --------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


(function () {

    // Function Constructor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try agian :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }


    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------');
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');


        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        } else {

        }


    }

    nextQuestion();



})();