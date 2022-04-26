// Assignment Code
var generateBtn = document.querySelector("#generate");
    var lowercaseArray = ["a","b","c","d","e","f",'g',"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    console.log('abcdefghijklmnopqrstuvwxyz'.split(''))
    var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var specialCharacteArray = ['!','@','#','$','%','^','*']
    var numericArray = ['1','2','3',"4",'5','6','7','8','9']
    var possibleChars = []
    var finalPasswordArray = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 function generatePassword() { 
 var passwordLength = prompt("at least 8 characters and no more than 128 characters")
 if (passwordLength ===""||null){
     alert("Error")
 } else if (passwordLength<8|| passwordLength>128){
     alert("Invalid password lenght please try again")
 } else {
     var lowercase= confirm("Lowercase");
     var uppercase= confirm("uppercase");
     var specialCharacter= confirm("special characters")
     var numeric= confirm("numeric");
     if (!lowercase&&!uppercase&&!specialCharacter&&!numeric){
         alert("Must choose atleast one option")
     }
     if (lowercase){
         possibleChars=possibleChars.concat(lowercaseArray)
     }
     if (uppercase){
        possibleChars=possibleChars.concat(uppercaseArray)
    }
    if (specialCharacter){
        possibleChars=possibleChars.concat(specialCharacteArray)
    }
    if (numeric){
        possibleChars=possibleChars.concat(numericArray)
    }
  return  randomPassword(passwordLength)  
    }
 } 


function randomPassword(usernumber){
    for (let i = 0; i < usernumber; i++) {
        finalPasswordArray.push(possibleChars[Math.floor(Math.random()*possibleChars.length)])
    }console.log(finalPasswordArray);
    return finalPasswordArray.join('')
}

