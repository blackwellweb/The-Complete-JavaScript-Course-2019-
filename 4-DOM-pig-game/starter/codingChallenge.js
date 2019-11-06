/* CODING CHALLENGE 6 ----------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


// var scores, roundScore, activePlayer, gamePlaying, previousDiceRoll;

// gamePlaying = true;
// init();


// document.querySelector('.btn-roll').addEventListener('click', function () {
//     if (gamePlaying) {
//         // 1. Random number
//         var dice = Math.floor(Math.random() * 6) + 1;
//         var diceTwo = Math.floor(Math.random() * 6) + 1;

//         // 2. Display the result
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png';

//         var diceDOM2 = document.querySelector('.diceTwo');
//         diceDOM2.style.display = 'block';
//         diceDOM2.src = 'dice-' + diceTwo + '.png';


//         // 3. Update the round score IF the rolled number was NOT a 1
//         if (dice !== 1 || diceTwo !== 1) {
//             // Add score
//             roundScore += dice;
//             roundScore += diceTwo;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;
//             previousDiceRoll = dice;
//         } else if (dice === 6 && previousDiceRoll === 6) {
//             // If the player rolls two sixes in a row the player losses their ENTIRE score
//             // and it's the next players turn
//             previousDiceRoll = 0;
//             scores[activePlayer] = 0;
//             document.getElementById('score-' + activePlayer).textContent = '0';

//             // Next player
//             nextPlayer();
//         } else {
//             // Next player
//             nextPlayer();
//         }
//     }
// });



// document.querySelector('.btn-hold').addEventListener('click', function () {
//     if (gamePlaying) {
//         // Add CURRENT score to the GLOBAL score
//         scores[activePlayer] += roundScore;

//         // Update the UI
//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//         // Check if the player won the game
//         if (scores[activePlayer] >= document.querySelector('.winningScore').value) {
//             document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
//         } else {
//             // Next player
//             nextPlayer();
//         }
//     }
// });




// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';


//     // (.toggle) Add the class if its not there remove the class is its there
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';
// }

// // The init function is init not init(), as we don't want to fire our function
// // in the eventListener but we want to pass i through
// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
//     scores = [0, 0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;

//     document.querySelector('.dice').style.display = 'none';
//     document.querySelector('.diceTwo').style.display = 'none';

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');


// }


/* CODING CHALLENGE Solution ---------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


var scores, roundScore, activePlayer, gamePlaying;

gamePlaying = true;
init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        // if (dice === 6 && lastDice === 6) {
        //     // Player lose score 
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();


        // } else if (dice !== 1) { // 3. Update the round score IF the rolled number was NOT a 1
        //     // Add score
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //     previousDiceRoll = dice;
        // } else {
        //     // Next player
        //     nextPlayer();
        // }

        // lastDice = dice;


        if (dice1 !== 1 && dice2 !== 1) { // 3. Update the round score IF the rolled number was NOT a 1
            // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }


    }
});



document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to the GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Check input
        // Undefined, 0 , null or "" are COERCED to false
        // Anything else is COERCED to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});




function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    // (.toggle) Add the class if its not there remove the class is its there
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

// The init function is init not init(), as we don't want to fire our function
// in the eventListener but we want to pass i through 
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}