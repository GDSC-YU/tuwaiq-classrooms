<script lang="ts">
  import type { Room } from "../data/rooms";
  import { roomTypeMap } from "../data/data";

  export let room: Room;

  import Header from "../components/ui/Header.svelte";
  import ScheduleLines from "./schedule/ScheduleLines.svelte";

  const { headerColor, link } = roomTypeMap[room.name.charAt(0)];
</script>

<Header backButtonHref={link} title={room.name} color={headerColor} />
<main>
  <div class="flex flex-col space-y-12 p-4">
    <ScheduleLines />
  </div>
</main>
