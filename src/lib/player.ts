import type { IPlayer, ICard } from '@src/types';

export class Player implements IPlayer {
  public name: string;
  public cards: ICard[];
  public cardValues: number[];
  public balance: number;
  public bet: number;

  constructor(name: string) {
    this.name = name;
    this.cards = [];
    this.cardValues = [];
    this.balance = 1000;
    this.bet = 0;
  }
}
