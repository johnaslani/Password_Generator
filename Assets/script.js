// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passlength = prompt(
    "Select your lenght of your password between 8 to 128 alphanumeric characters. Please select at least one type of Character in the following"
  );
  passlength = parseInt(passlength);
  // console.log(typeof passlength)
  // console.log(passlength === NaN)
  if (passlength === NaN) generatePassword();

  // var passtype = prompt ("Select L, U, N, S for each of the following elements: lowercase, uppercase, numeric, and/or special characters" (L, U, N, S))

  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var uppercase = confirm("Do you want upper case letters?");
  var lowercase = confirm("Do you want lower case letters?");
  var number = confirm("Do you want numbers?");
  var special = confirm("Do you want special characters?");
  var allChars = ""
  if (special) allChars += specialChars;
  if (uppercase) allChars += upperChars;
  if (lowercase) allChars += lowerChars;
  if (number) allChars += numberChars;
  if (!special && !uppercase && !lowercase && !number) generatePassword();

 PW = Array(passlength);
 for (let i=0; i<passlength; i++){
  const randomindex = Math.floor(Math.random * (allChars.length + 1));
  PW[i]= allChars[randomindex];
 }
 console.log(PW[i]);
  return PW.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











//Below are some comments for myself for keeping records

// alert(passwordText.value);
// alert(generatePassword(password.lenght));

// var allChars = numberChars + upperChars + lowerChars + specialChars;

// var random = fucntion () {

// }

// for (let i = 0; i < password.type.length; i++) {
//   if (password.type[i]===
// }
// var allChars

// if (typeof passlength !== Number) {
// // // //   passlength = prompt ("Please enter a number")
// // // // }
