//CLOZE CARDS

var ClozeCard = function(question,answer){
    this.fulltext = question;
    this.cloze = answer;
    this.partial = question.replace(answer, "...");
    console.log("\n***************CLOZE*CARD***************");
    console.log("Full Text: " + this.fulltext + "\nPartial Text: " + this.partial + "\nCloze: " + this.cloze);
};
var clozeOne = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington"
);

module.exports = ClozeCard;