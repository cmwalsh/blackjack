export type Orientation = 'faceup' | 'facedown';

export interface ICard {
  rank: string;
  suit: string;
  orientation: Orientation;
}

export interface IDeck {
  cards: ICard[];
  create(): void;
  shuffle(): void;
  deal(numberOfCards: number): ICard;
}

export interface IPlayer {
  name: string;
  cards: ICard[];
  cardValues: number[];
  balance: number;
  bet: number;
}
