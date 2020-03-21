// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = finalResult.join("");
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var passwordLength = prompt("What would you like the length of your password to be?");

var passwordLengthInt = parseInt(passwordLength);

if (passwordLengthInt < 8 || passwordLengthInt > 128) {
    alert("Your password needs to be beween 8 and 128 charcters. Please refresh and try again");
};

var lowerConfirm = confirm("Would you like lower case letters in your password? Ok for yes, Cancel for no.");

var upperConfirm = confirm("Would you like upper case letters in your password? Ok for yes, Cancel for no.");

var numberConfirm = confirm("Would you like numbers in your password? Ok for yes, Cancel for no.");

var symbolConfirm = confirm("Would you like symbols in your password? Ok for yes, Cancel for no.");

var lower = "abcdefghijklmnopqr";
var upper = "ABCDEFGHIJKLMNOPQR";
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = "!@#$%^&*()_+";

var selectedChar = [];
var finalResult = [];



if (lowerConfirm) {
    for (var i = 0; i < lower.length; i++) {
        selectedChar.push(lower[i]);
    }
};
if (upperConfirm) {
    for (var j = 0; j < upper.length; j++) {
        selectedChar.push(upper[j]);
    }
};
if (numberConfirm) {
    for (var d = 0; d < number.length; d++) {
        selectedChar.push(number[d]);
    }
};
if (symbolConfirm) {
    for (var k = 0; k < symbol.length; k++) {
        selectedChar.push(symbol[k]);
    }
};

for (var p = 0; p < passwordLengthInt; p++) {
    finalResult.push(selectedChar[Math.floor(Math.random() * passwordLengthInt)])
}
console.log(finalResult.join(""));












// function getLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// };
// console.log(lower);

// var upperCase = function getUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// };

// function getNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// };

// function getSpecial() {
//     return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
// };









