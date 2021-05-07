//user input vartiables

var passNum;
var lowerCase ;
var upperCase;
var numbers;
var confirmUppercase;



//generate button, then query selector call by ID
var generateBtn = document.querySelector("#generate");


//generate password function - 
function generatePassword (){
  var password =  ""; 
  var possibleChars = [];

  //prompt variable questions
  var length =prompt("Choose a length between 8-128 characters(Yes=OK) (No=Cancel) ")


  var passNum = parseInt(length); 
  console.log(passNum)
  

  var lowerCase = confirm("LowerCase Letters? (Yes=OK) (No=Cancel)")
  console.log(lowerCase)


  var upperCase = confirm("Capital letters? (Yes=OK) (No=Cancel)")
  console.log(upperCase)


  var numbers = confirm("any Numbers?(Yes=OK) (No=Cancel) ")
  console.log(numbers)


  var symbols = confirm("any characters? (Yes=OK) (No=Cancel) ")
  console.log(symbols)
// now connect them


//push poosible characters & define them 
  if(lowerCase)
  {possibleChars.push("a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")}

  if(upperCase)
  {possibleChars.push("A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")}

  if(numbers) 
  {possibleChars.push("0" ,"1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" ,  "9" , "10")}

  if(symbols) 
  {possibleChars.push(".", "/", "^", "*", "(", ")")}
    for (var  i=0 ;i< length; i++) {
      var randomNum = Math.floor(Math.random() * possibleChars.length);
      var randomChar = possibleChars[randomNum]
        password = password.concat(randomChar);
        console.log(password)
    }
    
    //////////////////////////
      return password
}
//write password function 
function writePassword() 
{var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;}

//event listener
generateBtn.addEventListener("click", writePassword);