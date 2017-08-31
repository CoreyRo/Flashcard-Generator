//CLOZE CARDS

var ClozeCard = function(text,cloze){
    this.fulltext = text;
    this.cloze = cloze.toLowerCase();
    this.partial = text.replace(cloze, "...");
    console.log("\n***************CLOZE*CARD***************");
    console.log("Full Text: " + this.fulltext + "\nPartial Text: " + this.partial + "\nCloze: " + this.cloze);
};
module.exports = ClozeCard;