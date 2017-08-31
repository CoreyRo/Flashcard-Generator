//BASIC CARDS
var fs = require("fs");
var BasicCard = function(front,back){
    this.front = front;
    this.back = back.toLowerCase();
    console.log("\n***************BASIC*CARD***************");
    console.log("Front: " + this.front + "\nBack: " + this.back);
    var logger = "Front: " + this.front + " | Back: " + this.back + " ; ";
    fs.appendFile("basic.txt", logger);
};
module.exports = BasicCard;