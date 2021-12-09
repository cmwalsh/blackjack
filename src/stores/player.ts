import { writable } from "svelte/store";

import type { Writable } from "svelte/store";
import type { IPlayer } from '@src/types';

export const playerStore: Writable<IPlayer> = writable({
  name: '',
  cards: [],
  cardValues: [],
  balance: 1000,
  bet: 0
});
