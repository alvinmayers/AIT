/*
 * net id : aed369
 * Alvin Dean Jr
 * Homework 1
 */
var readlineSync = require('readline-sync');

var suit=['♠','♥','♦','♣'],
    face=['J','Q','K','A'];

function Card(suit,face){
    var suit,face;

    this.suit=suit;
    this.face=face;
}
/**
 *@returns {Array}
 */
function generateCards(){

    // deck of generated cards
    var deck=[];

    //add non-royal cards to face array
    for(var i=2; i <=10; ++i)
        face.push(i+'');

    //create the full deck
    for(var s=0; s < suit.length; ++s ){
        for(var f=0; f < face.length; ++f){
            deck.push(new Card(suit[s],face[f]));
        }
    }return deck;
}
/**
 *@param {Array} deck - generated deck of cards
 *@returns shuffledDeck -shuffled deck cards from unshuffled deck
 */
function shuffle(deck){
    var shuffledDeck=[];
    var min=0;

    while(deck.length > min){
        var max=deck.length;
        var index=Math.random()*(max-min)+min;
        shuffledDeck.push(deck.splice(index,1)[0]);
    }
    return  shuffledDeck;
}
/**
 * @param {Array} hand - cards in player's hand
 * @returns {Number} - value of cards in hand
 */
function calculateHand(hand){
    var sum=0,numAces=0;
    var ACE=11,ROYAL=10,WIN=21;
    for(var i=0; i < hand.length; ++i){
        var numFace=Number(hand[i].face);

        if((hand[i].face == 'J') || (hand[i].face == 'Q') || (hand[i].face == 'K')){
            sum+=ROYAL;
        }
        else if(numFace != NaN && numFace <= 10){
            sum+=numFace;
        }
        else if(hand[i].face == 'A'){
            sum+=ACE;
            ++numAces;
        }
        else{
            var tmp=numAces;
            while(sum > 21){
                if(tmp == 0)
                    break;

                sum-=ROYAL;
                tmp--;
            }

        }
    }
    return sum;
}
/**
 * @param {Array} playerHand - cards in player's hand
 * @param {Array} computerHand -cards in computer's hand
 * @returns {String} indicating who won or if the game is a draw
 */
function determineWinner(playerHand,computerHand){
    var cwin="computer",
        pwin="player",
        tie="tie";
    var limit=21;

    var ctotal=calculateHand(computerHand);
    var ptotal=calculateHand(playerHand);

    if((ctotal > limit && ptotal > limit) || (ctotal == ptotal))
        return tie;

    if(ctotal > limit || ptotal > limit){

        if(ctotal > limit)
            return pwin
        else
            return cwin;
    }
    else if((ctotal < limit) && (ptotal < limit)){
        if(ptotal < ctotal)
            return cwin
        else
            return pwin;
    }
}
/**
 * @param {Array} playerHand - card in player's hand
 *@returns {String} card info and total value in player hand.
 */
function outputConsolePlayerHand(playerHand){
    var pCards='Your hand is:';
    for(var i=0; i<playerHand.length; ++i)
        pCards+=' '+playerHand[i].face+playerHand[i].suit;

    pCards+=' for a total of '+calculateHand(playerHand) +'.';
    return pCards;
}
/**
 * @param {Array} computerHand - cards in computer hand
 *@returns {String}  card info and total value in computer hand
 */
function outputConsoleComputerHand(computerHand){
    var cCards='Computer hand:';
    for(var i=0; i < computerHand.length; ++i)
        cCards+=' '+computerHand[i].face+computerHand[i].suit;

    cCards+=' for a total of '+calculateHand(computerHand) +'.';
    return cCards;
}
var shuffledDeck=shuffle(generateCards());
//console.log(shuffledDeck);
var computerHand=[],playerHand=[];
var letter;

//provide two cards initially to each player hand
for(var k=0; k < 2; ++k){
    computerHand.push(shuffledDeck.pop());
    playerHand.push(shuffledDeck.pop());
}

/*
 * game loop
 * after every selection only output player hand to console
 */
 while(shuffledDeck.length >= 26 && computerHand.length <= 17 && calculateHand(playerHand) <= 21){
    console.log(outputConsolePlayerHand(playerHand));
    letter=readlineSync.question('type h to (h)it or s to (s)tay: ');

    if(letter == 'h'){
        playerHand.push(shuffledDeck.pop());
        computerHand.push(shuffledDeck.pop());
    }
    else if (letter == 's')
        break;
}
//end of game results
console.log(outputConsolePlayerHand(playerHand) + ' '+ outputConsoleComputerHand(computerHand));
console.log(determineWinner(playerHand,computerHand));
console.log("There are "+shuffledDeck.length+ " cards left in the deck.");
