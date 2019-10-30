// Creates an array that lists out all of the alphabet.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  // random letter generator.
  var  game = function () { 
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  };

  // Creating variables to hold the number of wins, losses, guesses, and reset function. 
  var wins = 0;
  var losses = 0;
  var guesses = 10;
  var guessArray = [];
  var reset = function () {
    guesses = 10;
    guessArray = [];
    game();
    console.log(computerGuess);
  }
        
  // This is the start of the website/JavaScript/game. Running the random generator when the web site opens. 
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log(computerGuess);

  // This function is run whenever the user presses a key, which is the entire game engine. 
  document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    guessArray.push(userGuess);
            
    // This is the game logic, outputs depending on user keys pressed. 
    if ((userGuess === computerGuess)) { //If user guesses correctly. 
      wins++;
      guesses = 10;
      reset();
    } else if ((guesses === 0)) { //If guesses are all used up. Loss. 
      losses++;
      guesses = 10;
      reset();
    } else if (userGuess !== computerGuess) { //If user guesses wrong. 
      guesses--;
    }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of user/computer guesses, wins/losses/ties.
    var html = 
      '<p>Wins: ' + wins + '</p>' + 
      '<p>Losses: ' + losses + '</p>' +  
      '<p>Guesses Left: ' + guesses + '</p>' + 
      '<p>Your Guesses so far: ' + guessArray + '</p>';
      //'<p>The computer chose: ' + computerGuess + '</p>'; //

      // Set the inner HTML contents of the #game div to our html string
      document.querySelector('#game').innerHTML = html;
    };