//CLOZE CARDS

var ClozeCard = function(text,cloze){
    this.fulltext = text;
    this.cloze = cloze.toLowerCase();
    this.partial = text.replace(cloze, "...");
    console.log("\n***************CLOZE*CARD***************");
    console.log("Full Text: " + this.fulltext + "\nPartial Text: " + this.partial + "\nCloze: " + this.cloze);
};
var clozeOne = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington"
);

module.exports = ClozeCard;