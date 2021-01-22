//user input vartiables

var enter;
var confirmNumber ;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;

// set password variable values:

character = ["!" , "@" , "#", "$", "%" , "^" , "&", "*", "(", ")"]; 

number = [ "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "0"];

alpha = [  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

//convert lowercase to capitol letters
//remember to study syntax as you go along.

var toUpper = function (x) {
    return x.toUpperCase();

};

// turn letter to uppercase - variable

function generatePassword() {
//ask for user input
enter = parseInt(prompt("How many Characters? choose between 8 and 28 "));
}
//if statement
// remember ! means if its set to false
if (!enter) {
    alert("this needs a value");
}else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("Seriously? I said between 8 and 128"));
} else {
// after once inpiut goes through

confirmNumber = confirm ("Want numbers?");
confirmCharacter = confirm ("How about special characters?");
confirmUppercase = confirm ("Aight I see you! how about some uppercase letters?");
confirmLowercase = confirm ("and  what about Lowercase?");

};

// if no is put for all 4 then:

if (!confirmCharacter && !confirmNumber &&!confirmUppercase && !confirmLowercase)
{

    choices =alert("come on man. You gotta give me something.");
}

// apparently I have to set possible outcomes for everything idividually?

// 4 positive responses
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) 
{ choices = character.concat(number, alpha, alpha2);

}

// 3 yes's

else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);

}

else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
}

// note how we had to do ALL possible outcomes. perhaps I can find a way around this in the future?

// 2 yes's

else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(number);
} 

else if(confirmCharacter && confirmLowercase) {
choices = character.concat(alpha)
}

else if ( confirmCharacter && confirmUppercase) 
{
    choices = character.concat(alpha2)

}
else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
}
// Else if for 1 positive option
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}

else if (confirmUppercase) {
    choices = space.concat(alpha2)

};

var password = [];

// how to random select

for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(math.random() * choices.length)];
    password.push(pickChoices);
}

// here you turn password into sentence or a string

var ps = password.join(" ");
UserInput(ps);
return ps;

// so I just said ps is set to password.join- which joins them. then tale userinput with password var
// return password. which is defined above. 

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click" , function (){
    copyPassword();
}); 

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
};


// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
// Originally found and studied from https://github.com/jamierachael/Password-Generator/blob/master/script.js}