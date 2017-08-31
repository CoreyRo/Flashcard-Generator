//USER INTERFACE
var inquirer = require("inquirer");
inquirer
	.prompt([
		{
			type: "list",
			message: "What type of flashcard?",
			name: "card",
			choices: ["basic", "cloze"]
		},
		{
			type: "confirm",
			message: "Are you sure:",
			name: "confirm",
			default: true
		},
		{
			type: "input",
			message: "Enter the front of the flashcard. (The Question)",
			name: "question"
		},
		{
			type: "confirm",
			message: "Are you sure:",
			name: "confirm",
			default: true
		},
		{
			type: "input",
			message: "Enter the back of the flashcard. (The Answer)",
			name: "answer"
		},
		{
			type: "confirm",
			message: "Are you sure:",
			name: "confirm",
			default: true
		}
	])
	.then(function(inquirerResponse) {
		// If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
		if (inquirerResponse.confirm) {
			var cardType = inquirerResponse.card;
			var q = inquirerResponse.question;
			var a = inquirerResponse.answer;
			var BasicCard = require("./basicCard.js");
			var ClozeCard = require("./clozeCard.js");
			switch (cardType) {
				case "basic":
					var myBasic = new BasicCard(q, a);
					break;
				case "cloze":
					var myCloze = new ClozeCard(q, a);
					break;
			}
		}
		else {
			console.log("Card was not saved!");
		}
	});