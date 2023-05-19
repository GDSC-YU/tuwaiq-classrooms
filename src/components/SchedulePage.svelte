<script lang="ts">
  import type { Room } from "../data/rooms";
  import { roomTypeMap } from "../data/data";
  export let room: Room;

  import Header from "../components/ui/Header.svelte";

  const { headerColor, link } = roomTypeMap[room.name.charAt(0)] || {};
</script>

<Header backButtonHref={link} title={room.name} color={headerColor} />
<div class="flex h-screen items-center justify-center">
  <h1 class="text-7xl">{room.name} Coming Soon!</h1>
</div>
