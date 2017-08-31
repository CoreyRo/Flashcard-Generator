//USER INTERFACE
var nodeArgs = process.argv;
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");
var guess = "";

for (var i = 2; i < nodeArgs.length; i++) {
    guess = guess + " " + nodeArgs[i].toLowerCase().trim();  
}

console.log(guess);
console.log("cloze answer " + ClozeCard.cloze);
console.log("basic answer " + BasicCard.back);

// if(guess === clozeCard.answer || guess === clozeCard.answer){
//     console.log("Correct");
// }
// else{
//     console.log("incorrect");
// }