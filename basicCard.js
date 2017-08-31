//BASIC CARDS

var BasicCard = function(question,answer){
    this.front = question.toLowerCase();
    this.back = answer.toLowerCase();
    console.log("\n***************BASIC*CARD***************");
    console.log("Front: " + this.front + "\nBack: " + this.back);
};

var basicOne = new BasicCard(
    "Who was the first president of the United States?", "George Washington"
);

module.exports = BasicCard;