//Draft Script Do Not Use
//From here I decided to make new functions and wanted to have my reference copy on hand.


//A lot of practice projects that I did previously had these on the top of the document so I moved them up here for my thinking
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
//My variables for numbers, lower and uppcase abc's, and special characters

var characterlength; 

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowercase = //'abcdefghijklmnopqrstuvwxyz';
['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = //'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialChar = //'/><{}[]~!@#$%^&*()';
['!', '@', '{', '}', '[', ']', '/', '?', '#', '$', '%', '^', '&', '*', '(', ')', '-', '~', '<', '>'];

//Holds the pushed array
var passwordArray = [];

//Is the final output array pushed get's randomized into
var password = [];

//prompt gives a textbox underneath, alert makes it pop up right away, confirm just gives ok and cancel options
function generatePassword (){
   //Little welcome message telling you how to play the game
  confirm('Welcome to password generator, select ok for yes and cancel for no');
  
  //window.promt returns the number that the user put in
  var characterlength = window.prompt('How many characters would you like in your password: Choose a number between 8-128'); 

  //makes sure the number is in the limit
  if(characterlength < 8 || characterlength > 128){
    alert('Please select a number between 8 - 128');
    generatePassword();
  }
  if(isNaN(characterlength)){
    alert('Please put in a number that is between 8 - 128');
    generatePassword();
  }
    
    //returns it to the start and makes it go over the number again: generatePassword();
  
  //These ask if you would like the certain characteristics in your password:
  //Using concact appends the arrays together where as push pushes the arrays as seperate arrays into the one array
  var lowercaseAnswer = confirm('Would you like lowercase letters in your password?');
  if(lowercaseAnswer == true){
     passwordArray = passwordArray.concat(lowercase);
  }

  var uppercaseAnswer = confirm('Would you like uppercase letters in your password?');
  if(uppercaseAnswer == true){
    passwordArray = passwordArray.concat(uppercase);
  }

  var specialCharAnswer = confirm('Would you like special characters in your password?');
  if(specialCharAnswer == true){
    passwordArray = passwordArray.concat(specialChar);
  }
  var numberAnswer = confirm('Would you like numbers in your password?');
  if(numberAnswer == true){
    passwordArray = passwordArray.concat(nums);
  }

   //Loops over the characterlength chosen, creates a new array total, and loops over the password array created that is holding all of the options that were pushed
  for(var i = 0; i < characterlength; i++){
    var total = passwordArray[Math.floor(Math.random () * passwordArray.length)];
    console.log(total);
    //total var and push it to the password =[]; array, not passwordArray
    password.push(total);
  }
  
}
//console.log's I used for checking
//console.log(characterlength);
//console.log(generatePassword());
//console.log(passwordArray);
//console.log(password);
//console.log(newArray);



// Write password to the #password input
//this is taking in a function I wrote generatePassword(), and then selecting the password selector on the main page, then its assigning the new var holding that selector.value and giving it the password that was generated.
function writePassword() {
  generatePassword();
 //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //.join('') = takes away the commas between them
  passwordText.value = password.join('');
}



