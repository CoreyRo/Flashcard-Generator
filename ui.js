//USER INTERFACE
var cardType = process.argv[2];
var nodeArgs = process.argv;
var inquirer = require("inquirer");
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");

switch(cardType){
    case "basic": var myBasic = new BasicCard(process.argv[3], process.argv[4]);
    break;
    case "cloze": var myCloze = new ClozeCard(process.argv[3], process.argv[4]);
    break;
}