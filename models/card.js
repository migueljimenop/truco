/*
* Matrix used to calculate the card weight in the Truco game
*   weigth - card
*      13  -  1 espada
*      12  -  1 basto
*      11  -  7 espada
*      10  -  7 oro
*       9  -  3
*       8  -  2
*       7  -  1 copa
*       7  -  1 oro
*       6  -  12
*       5  -  11
*       4  -  7 copa
*       4  -  7 basto
*       3  -  6
*       2  -  5
*       1  -  4
*/
var weight = {
  'oro':    [ 7, 8, 9, 1, 2, 3, 10, 0, 0, 0, 5, 6],
  'copa':   [ 7, 8, 9, 1, 2, 3,  4, 0, 0, 0, 5, 6],
  'espada': [13, 8, 9, 1, 2, 3, 11, 0, 0, 0, 5, 6],
  'basto':  [12, 8, 9, 1, 2, 3,  4, 0, 0, 0, 5, 6]
};

/*
 * This is the Card Object
 *   @number: the number representing the card number
 *   @suit: this is the card suit
 */
function Card(number, suit){
  this.number = number;
  this.suit = suit;
  this.weight = weight[suit][number];
};

/*
 *  Print a card
 */
Card.prototype.show = function(){
  return this.number + ": " + this.suit;
};

/*
 * Compares two cards
 *   @card: the card to compare this
 *
 * Returns:
 *   1 if this card is better than 'card',
 *   0 if are equal and
 *   -1 if it's worst
 */
Card.prototype.confront = function(card){
  if(this.weight > card.weight)
    return 1;
  else if(this.weight == card.weight)
    return 0;
  else if(this.weight < card.weight)
    return -1;
};

module.exports.card = Card;

