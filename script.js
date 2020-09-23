
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = promptUser();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// When the Generate Password button is clicked the writePassword function will run
generateBtn.addEventListener("click", writePassword);

// Function that runs the user through the possible options for their password.
function promptUser() {
  var generatedPassword = "";
  // Sets length of password
  var length = prompt("Choose a password length between 8 and 128 characters.");
    // If anything but a number is given the function will start over after alerting the user
  if (isNaN(length)) {
    alert("Please enter a number between 8 and 128");
    return promptUser();
    // if cancel is clicked the prompt box will close
  } else if (!length) {
    return generatedPassword;
    // if number is not within 8-128 alert the user
  } else if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128.");
  } else {
    // Asks the suer if they want numbers
    var numbers = confirm("Would you like the password to have numbers?");
    // asks the user if they would like upper case letters 
    var upperCase = confirm(
      "Would you like the password to have UPPER CASE letters?"
    );
      // asks the user if they would like lower case letters
    var lowerCase = confirm(
      "Would you like the password to have lower case letters?"
    );
      // asks the user if they would like special characters
    var special = confirm(
      "Would you like the password to have special characters?"
    );
  }
  // if length was chosen but all other items were turned down alert user and start over
  if (!numbers && !upperCase && !lowerCase && !special) {
    alert("You must select something!");
    return promptUser();
  } else {
    // sets the generated password equal to the following functions and passes through the following variables to access
    generatedPassword = createPassword(numbers, upperCase, lowerCase, special, length);
  } 
  return generatedPassword;
}

// This function will generate our random password based off of the users input from promptUser function
function createPassword (numbers, upperCase, lowerCase, special, length) {
  var functionArray = [];
  //  Generates a random number from 0-9
  var randomNumbers = function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
   // Generates a random upper case letter from A-Z
 var randomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
  }
  // Generates a random lower case letter from a-z
  var randomLower = function() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  }
  // Generates 1 of 4 different special characters
  var randomSpecial = function() {
    return String.fromCharCode(Math.floor(Math.random()*15) + 32);
  }
  // creates an array of functions to be accessed later on
  var functionArray = [];
  // Set variable to log numbers to ensure we don't later generate more characters then requested from the password
  var minimumCount = 0;
  // each variable creates a blank string that can have characters applied to them as needed
  var guaranteedNumber = "";
  var guaranteedUpper = "";
  var guaranteedLower = "";
  var guaranteedSpecial = "";

  // if the user chooses to have numbers
  if (numbers === true) {
    // adds the randomNumbers function to our array of functions
    functionArray.push(randomNumbers);
    // gives the guaranteedNumber variable one random number
    guaranteedNumber = randomNumbers();
    // adds 1 to minimumCount
    minimumCount++;
  }
  if (upperCase === true) {
    functionArray.push(randomUpper);
    guaranteedUpper = randomUpper();
    minimumCount++;
  }
  if (lowerCase === true) {
    functionArray.push(randomLower);
    guaranteedLower = randomLower();
    minimumCount++;
  }
  if (special === true) {
    functionArray.push(randomSpecial);
    guaranteedSpecial = randomSpecial();
    minimumCount++;
  }
  // creates a variable as an empty string that can later be returned with the users finished password
  var randomPasswordGenerated = "";
  
  // for loop that runs as many times as the length of the password that was selected minus the minimumCount. The minimum count is subtracted because each time a number,upper case, lower case, special character was selected a random character from the selected option was added to the final password as a guarantee that the password would always have the options requested. Each pass of the loop generates a random character from the selected options and adds it to the randomPasswordGenerated variable.
  for (var i = 0; i < (parseInt(length) - minimumCount); i++) {
    var choicesPicked = functionArray[Math.floor(Math.random() * functionArray.length)](); 
    randomPasswordGenerated += choicesPicked;
  }
  // whatever characters are inside each variable will be added to the users password. There will only be characters in them if they had been chosen by the user.
  randomPasswordGenerated += guaranteedNumber;
  randomPasswordGenerated += guaranteedSpecial;
  randomPasswordGenerated += guaranteedUpper;
  randomPasswordGenerated += guaranteedLower;

  // returns the users randomly generated password
  return randomPasswordGenerated;
  
}



