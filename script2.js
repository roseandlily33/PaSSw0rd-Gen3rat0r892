//A lot of practice projects that I did previously had these on the top of the document so I moved them up here for my thinking
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//My variables for numbers, lower and uppcase abc's, and special characters

var characterlength;

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowercase = //'abcdefghijklmnopqrstuvwxyz';
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = //'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialChar = //'/><{}[]~!@#$%^&*()';
  ['!', '@', '{', '}', '[', ']', '/', '?', '#', '$', '%', '^', '&', '*', '(', ')', '-', '~', '<', '>'];

//Holds the pushed array
var passwordArray = [];
//Is the final output array pushed get's randomized into
var password = [];

function startGame() {
  //Little welcome message telling you how to play the game
  confirm('Welcome to password generator, please select ok for yes and cancel for no');

  //prompt gives a textbox underneath, alert makes it pop up right away, confirm just gives ok and cancel options
  //window.prompt returns the number that the user put in
  characterlength = window.prompt('How many characters would you like in your password: Choose a number between 8-128');

  //makes sure the number is in the limit
  if (characterlength < 8 || characterlength > 128) {
    alert('Please select a number between 8 - 128');
    //returns it to the start and makes it go over the number again
    startGame();
  }
  //this checks to see if the character input is a number, without it the generator will give a random input
  else if (isNaN(characterlength)) {
    alert('Please put in a number that is between 8 - 128');
    //returns to beginning of funation if it isnt a number
    startGame();
  }
  //This starts the next function
  else {
    generatePassword();
  }
}



function generatePassword() {
  //These ask if you would like the certain characteristics in your password:
  //Confirm just gives  a yes or cancel answer
  var lowercaseAnswer = window.confirm('Would you like lowercase letters?');
  //Using concact appends the arrays together where as push pushes the arrays as seperate arrays into the one array
  if (lowercaseAnswer == true) {
    passwordArray = passwordArray.concat(lowercase);
  }
  var uppercaseAnswer = window.confirm('Would you like UPPERCASE letters?');
  if (uppercaseAnswer == true) {
    passwordArray = passwordArray.concat(uppercase);
  }

  var specialCharAnswer = window.confirm('Would you like special characters?');
  if (specialCharAnswer == true) {
    passwordArray = passwordArray.concat(specialChar);
  }

  var numberAnswer = window.confirm('Would you like numbers?');
  numberAnswer;
  if (numberAnswer == true) {
    passwordArray = passwordArray.concat(nums);
  }

  //When I looked up clear an array inside a function  password=[]; or this one: This clears the array so that it doesn't stay inside the box and builds on top of the old one
  password.length = 0;
  //Loops over the characterlength chosen, creates a new array total, and loops over the password array created that is holding all of the options that were pushed
  for (var i = 0; i < characterlength; i++) {
    var total = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    //Here it's showing the characters chosen in the console
    console.log(total);
    //total var and push it to the password =[]; array, not passwordArray
    password.push(total);

  }
}

//this function tells it where to write and where to start
function writePassword() {
  //stars the game
  startGame();
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //.join('') = takes away the commas between them
  passwordText.value = password.join('');
}