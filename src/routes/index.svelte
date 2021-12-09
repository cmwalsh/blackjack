<script lang="ts">
  import type { IPlayer } from "@src/types";
  import { Player } from "@lib/player";
  import CardTable from "@components/CardTable.svelte";

  let dealer = new Player('Dealer');
  let player = new Player('Player');
  let players: IPlayer[] = [dealer, player];
</script>

<div class="game-container">
  <CardTable players={players} />
</div>
