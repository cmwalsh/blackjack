<script lang="ts">
  import type { IPlayer } from "@src/types";
  import Card from "@components/Card.svelte";

  export let player: IPlayer;
</script>

<div class="player">
  <div class="cards">
    {#each player.cards as card}
      <Card card={card} orientation={card.orientation} />
    {/each}
  </div>
</div>
