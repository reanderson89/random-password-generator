// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Please enter your preferred length from 8-128.")
  if (passLength >=8 && passLength <=128) {
    console.log("yes");
  } else {
    console.log("no");
  }
  var passUpper = confirm("Would you like 'UPPER CASE' letters?")
  if (passUpper === true) {
    console.log("yes Uppers");
  } else {
    console.log("no Uppers");
  }
  var passLower = confirm("Would you like 'lower case' letters?")
  if (passLower === true) {
    console.log(String.fromCharCode(Math.floor(Math.random()*26) + 97));
    console.log("yes Lowers");
  } else {
    console.log("no Lowers");
  }
  var passSpecial = confirm("Would you like 'Special Characters'?")
  if (passSpecial === true) {
    console.log("yes Special");
  } else {
    console.log("no Special");
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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