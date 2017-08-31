//BASIC CARDS

var BasicCard = function(question,answer){
    this.question = question.toLowerCase();
    this.answer = answer.toLowerCase();
    console.log(this.question);
    console.log(this.answer);
};

var basicOne = new BasicCard(
    "Who was the first president of the United States?", "George Washington"
);

module.exports = BasicCard;