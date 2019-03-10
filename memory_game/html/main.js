
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	}
	else {
		alert("Sorry, try again!")
	}
}
var flipCard = function(cardsID) {
	console.log("User flipped" + " " + cardsID)
cardsInPlay.push(cards[cardsID]);
checkForMatch()
}
flipCard();
flipCard(2);