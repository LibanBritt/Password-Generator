// Assignment Code
var generateBtn = document.querySelector("#generate");
    var lowercaseArray = ["a","b","c","d","e","f",'g',"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var specialCharacteArray = ['!','@','#','$','%','^','*']
    var numericArray = ['1','2','3',"4",'5','6','7','8','9']
    var holdingArray = []
    var math = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 function generatePassword() { 
 var Liban = prompt("at least 8 characters and no more than 128 characters")
 if (Liban ===""||null){
     alert("Error")
 } else if (Liban<8|| Liban>128){
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
         holdingArray=holdingArray.concat(lowercaseArray)
     }
     if (uppercase){
        holdingArray=holdingArray.concat(uppercaseArray)
    }
    if (specialCharacter){
        holdingArray=holdingArray.concat(specialCharacteArray)
    }
    if (numeric){
        holdingArray=holdingArray.concat(numericArray)
    }
  return  randomPassword(Liban)    
    }
 } 

function randomPassword(usernumber){
    for (let i = 0; i < usernumber; i++) {
       math.push (holdingArray[Math.floor(Math.random()*holdingArray.length)])
    }console.log(math);
    return math.join('')
}