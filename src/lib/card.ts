import type { Orientation, ICard } from '@src/types';

export class Card implements ICard {
  constructor(
    public rank: string,
    public suit: string,
    public orientation: Orientation = 'faceup'
  ) {}
}
