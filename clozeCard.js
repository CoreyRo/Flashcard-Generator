//CLOZE CARDS

var ClozeCard = function(text,cloze){
    this.fulltext = text;
    this.cloze = cloze.toLowerCase();
    this.partial = text.replace(cloze, "...");
    console.log("\n***************CLOZE*CARD***************");
    console.log("Full Text: " + this.fulltext + "\nPartial Text: " + this.partial + "\nCloze: " + this.cloze);
    var fs = require("fs");
    
    fs.appendFile("cloze.txt", "Full Text: " + this.fulltext + " | Partial Text: " + this.partial + " | Cloze: " + this.cloze + " ; ", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("\n\ncloze.txt was updated!");
    });
};
module.exports = ClozeCard;