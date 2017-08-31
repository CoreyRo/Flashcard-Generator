//CLOZE CARDS
var fs = require("fs");
var ClozeCard = function(text,cloze){
    this.fulltext = text;
    this.cloze = cloze.toLowerCase();
    this.partial = text.replace(cloze, "...");
    console.log("\n***************CLOZE*CARD***************");
    console.log("Full Text: " + this.fulltext + "\nPartial Text: " + this.partial + "\nCloze: " + this.cloze);
    var logger = "Full Text: " + this.fulltext + " | Partial Text: " + this.partial + " | Cloze: " + this.cloze + " ; ";
    fs.appendFile("cloze.txt", logger);
};
module.exports = ClozeCard;