// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var length = prompt("Choose a password length between 8 and 128 characters.");
  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128.");
  } else {
  var numbers = confirm("Would you like the password to have numbers?");

  var upperCase = confirm("Would you like the password to have UPPER CASE letters?");

  var lowerCase = confirm("Would you like the password to have lower case letters?");

  var special = confirm("Would you like the password to have special characters?");
  }
  if (!numbers && !upperCase && !lowerCase && !special) {
    alert("You must select something!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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