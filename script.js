
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var generatedPassword = "";
  var length = prompt("Choose a password length between 8 and 128 characters.");
    
  if (isNaN(length)) {
    alert("Please enter a number between 8 and 128");
    return generatePassword();
  }
  else if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128.");
  } else {
    var numbers = confirm("Would you like the password to have numbers?");

    var upperCase = confirm(
      "Would you like the password to have UPPER CASE letters?"
    );

    var lowerCase = confirm(
      "Would you like the password to have lower case letters?"
    );

    var special = confirm(
      "Would you like the password to have special characters?"
    );
  }
  if (!numbers && !upperCase && !lowerCase && !special) {
    alert("You must select something!");
    return generatePassword();
  } else {
    generatedPassword = createPassword(numbers, upperCase, lowerCase, special, length);
  } 
  return generatedPassword;
}


function createPassword (numbers, upperCase, lowerCase, special, length) {
  var functionArray = [];
  //  Numbers
  var randomNumbers = function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
   // Upper Case
 var randomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
  }
  // Lower Case
  var randomLower = function() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  }
  // Special
  var randomSpecial = function() {
    return String.fromCharCode(Math.floor(Math.random()*4) + 35);
  }

  var functionArray = [];

  var minimumCount = 0;
  var guaranteedNumber = "";
  var guaranteedUpper = "";
  var guaranteedLower = "";
  var guaranteedSpecial = "";

  if (numbers === true) {
    functionArray.push(randomNumbers);
    guaranteedNumber = randomNumbers();
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

  var randomPasswordGenerated = "";
  

  for (var i = 0; i < (parseInt(length) - minimumCount); i++) {
    var choicesPicked = functionArray[Math.floor(Math.random() * functionArray.length)]();
    randomPasswordGenerated += choicesPicked;
  }

  randomPasswordGenerated += guaranteedNumber;
  randomPasswordGenerated += guaranteedSpecial;
  randomPasswordGenerated += guaranteedUpper;
  randomPasswordGenerated += guaranteedLower;

  return randomPasswordGenerated;
}

// Add event listener to generate button


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//  // Upper Case
//  function() {
//   return String.fromCharCode(Math.floor(Math.random()*26) + 65);
// },
// // Lower Case
// function() {
//   return String.fromCharCode(Math.floor(Math.random()*26) + 97);
// },
// // Numbers
// function() {
//   return String.fromCharCode(Math.floor(Math.random()*10) + 48);
// },
// // Special
// function() {
//   return String.fromCharCode(Math.floor(Math.random()*4) + 35);
// }

// Math.floor(Math.random() * 1)