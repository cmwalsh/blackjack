<script lang="ts">
  import type { IPlayer } from "@src/types";
  import Player from "@components/Player.svelte";

  export let players: IPlayer[];
</script>

<div class="card-table">
  {#each players as player}
    <Player player={player} />
  {/each}
</div>
