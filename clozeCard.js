//CLOZE CARDS

var ClozeCard = function(question,answer){
    this.question = question;
    this.answer = answer;
    this.cloze = question.replace(answer, "...");
    console.log("Cloze: " + this.cloze);
    console.log("Cloze Answer: " + this.answer);
};
var clozeOne = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington"
);

module.exports = ClozeCard;