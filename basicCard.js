//BASIC CARDS

var BasicCard = function(front,back){
    this.front = front;
    this.back = back.toLowerCase();
    console.log("\n***************BASIC*CARD***************");
    console.log("Front: " + this.front + "\nBack: " + this.back);
};
module.exports = BasicCard;