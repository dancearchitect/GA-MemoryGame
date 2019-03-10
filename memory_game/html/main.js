
var card = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = card[0];
cardsInPlay.push('cardOne');
console.log("User flipped Queen");
var carTwo = card[4];
cardsInPlay.push('cardTwo');
console.log("User flipped King");

if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	}
	else {
		alert("Sorry, try again!")
	}