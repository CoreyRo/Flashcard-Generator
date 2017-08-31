//BASIC CARDS

var BasicCard = function(front,back){
    this.front = front;
    this.back = back.toLowerCase();
    console.log("\n***************BASIC*CARD***************");
    console.log("Front: " + this.front + "\nBack: " + this.back);
};

var basicOne = new BasicCard(
    "Who was the first president of the United States?", "George Washington"
);

module.exports = BasicCard;