//USER INTERFACE
var nodeArgs = process.argv;
var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");
var guess = "";

for (var i = 2; i < nodeArgs.length; i++) {
    guess = guess + " " + nodeArgs[i].toLowerCase().trim();  
}

console.log(guess);
console.log("cloze answer " + clozeCard.answer)
console.log("basic answer " + basicCard.answer)

// if(guess === clozeCard.answer || guess === clozeCard.answer){
//     console.log("Correct");
// }
// else{
//     console.log("incorrect");
// }