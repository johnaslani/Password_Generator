// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passlength = prompt(
    "Select your lenght of your password between 8 to 128 alphanumeric characters. Please select at least one type of Character in the following"
  );
  // passlength = parseInt(passlength);
  if (Number.isNaN(passlength)) {
    alert("Password length must be provided as a number");
    return null;
  }
  // console.log(passlength);
  if (passlength <8 || passlength >128) {
    alert("Password length must be a number between 8 and 128");
    return null;
  }

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
  if (!special && !uppercase && !lowercase && !number) { 
      alert("Password needs to select at least one type of character");
      return null;
  };
  // console.log(allChars.length);
  // console.log("allChars", allChars);
 var PW = Array(passlength);
//  console.log("PW ====", PW)
 for (let i=0; i<passlength; i++){
  const randomindex = Math.floor(Math.random() * allChars.length);
  // console.log("randomindex====", randomindex)
  PW[i]= allChars[randomindex];
  // console.log(PW[i]);
 }

//  console.log(PW[i]);
  return PW.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // console.log("password===", password);
  // console.log("passwordText====", passwordText);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
