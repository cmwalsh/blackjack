import type { IDeck, ICard } from '@src/types';
import { Card } from '@lib/card';

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const suits = ['S', 'H', 'D', 'C'];

export class Deck implements IDeck {
  public cards: ICard[] = [];

  create() {
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(rank, suit, 'facedown'));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numberOfCards: number) {
    for (let dealCount = 0; dealCount < numberOfCards; dealCount++) {
      return this.cards.pop();
    }
  }
}
