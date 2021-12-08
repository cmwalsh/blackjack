<script lang="ts">
  import type { ICard, Orientation } from '@src/types';

  export let card: ICard;
  export let orientation: Orientation;
</script>

<div class="card-container">
  {#if orientation === 'facedown'}
    <img src={`images/cards/B1.svg`} alt="Face down playing card" />
  {:else}
    <img src={`images/cards/${card.suit}${card.rank}.svg`} alt="Face up playing card" />
  {/if}
</div>
