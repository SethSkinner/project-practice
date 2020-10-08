class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
      this.deal();
    }
  
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      const images = ['AH.png', '2H.png', '3H.png', '4H.png', '5H.png', '6H.png', '7H.png', '8H.png', '9H.png', '10H.png', 'JH.png', 'QH.png', 'KH.png', 'AS.png', '2S.png', '3S.png', '4S.png', '5S.png', '6S.png', '7S.png', '8S.png', '9S.png', '10S.png', 'JS.png', 'QS.png', 'KS.png', 'AC.png', '2C.png', '3C.png', '4C.png', '5C.png', '6C.png', '7C.png', '8C.png', '9C.png', '10C.png', 'JC.png', 'QC.png', 'KC.png', 'AD.png', '2D.png', '3D.png', '4D.png', '5D.png', '6D.png', '7D.png', '8D.png', '9D.png', '10D.png', 'JD.png', 'QD.png', 'KD.png']
      
      for (let suit in suits) {
        for (let value in values) {
            for(let image in images) {
               this.deck.push(`${values[value]} of ${suits[suit]} of${images[image]}`);
          }  
        }
      }
    }
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]], = [deck[i], deck[m]];
      }
  
      return this;
    }
  
    deal(){
      return this.deck.pop();
    }
  }
  
  
  const deck1 = new Deck();
  console.log(deck1.deck);