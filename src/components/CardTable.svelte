<script lang="ts">
  import type { IPlayer } from "@src/types";
  import Player from "@components/Player.svelte";

  export let player: IPlayer;
</script>

<div class="card-table">
  <div class="dealer">
    <Player player={player} />
  </div>
  <div class="player">
    <Player player={player} />
  </div>
</div>
