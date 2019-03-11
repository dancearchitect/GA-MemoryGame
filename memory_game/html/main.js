//all cards
var cards = [
 {
   rank: "queen",
   suit: "hearts",
   cardImage: "images/queen-of-hearts.png"
 },
 {
   rank: "queen",
   suit: "diamonds",
   cardImage: "images/queen-of-diamonds.png"
 },
 {
   rank: "king",
   suit: "hearts",
   cardImage: "images/king-of-hearts.png"
 },
 {
   rank: "king",
   suit: "diamonds",
   cardImage: "images/king-of-diamonds.png"
 }
];

//array with cards in play
var cardsInPlay = [];

//function that checks card matches
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} 
		else {
			alert("Sorry, try again.");
		}
	}
};

//function that executes card flips
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
//push the cards to cardID array
 cardsInPlay.push(cards[cardId].rank)
//test code
 console.log("User flipped " + cards[cardId].rank)
 console.log(cards[cardId].cardImage)
 console.log(cards[cardId].suit)
//call the function to check for a match
 checkForMatch ();
};

//function new game board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function pageReset() {
  document.getElementById('reset-button');
}

//call the function game board
createBoard();
//reset game
pageReset();