<script lang="ts">
  import { onMount } from "svelte";

  import type { Room } from "../data/rooms";
  import { roomTypeMap, Day } from "../data/data";

  export let room: Room;

  import Header from "../components/ui/Header.svelte";
  import TextChip from "./schedule/TextChip.svelte";
  import ScheduleLines from "./schedule/ScheduleLines.svelte";
  import TheSchedule from "./schedule/TheSchedule.svelte";

  const { headerColor, freeColor, link } = roomTypeMap[room.name.charAt(0)];

  const days = [
    { day: "Sunday", key: Day.Sunday, timeSlots: room.sunday },
    { day: "Monday", key: Day.Monday, timeSlots: room.monday },
    { day: "Tuesday", key: Day.Tuesday, timeSlots: room.tuesday },
    { day: "Wednesday", key: Day.Wednesday, timeSlots: room.wednesday },
    { day: "Thursday", key: Day.Thursday, timeSlots: room.thursday },
  ];

  let selectedDay: Day | null;

  function setSelectedDay(day: Day) {
    selectedDay = day;
  }

  // pre selecting the current day

  onMount(() => {
    const today = new Date();
    const todayIndex = today.getDay();

    /* Check if today is a weekend (Friday or Saturday). 
       Can also preselect 5 or 6 by default, but why ;-; */
    if (todayIndex === 5 || todayIndex === 6) {
      selectedDay = null; // Don't preselect any day
    } else {
      selectedDay = todayIndex as Day;
    }
  });
</script>

<Header backButtonHref={link} title={room.name} color={headerColor}>
  <div
    class="mt-3 flex flex-nowrap justify-center gap-x-20 overflow-x-auto overflow-y-hidden"
  >
    {#each days as { day, key }}
      <TextChip
        text={day}
        isSelected={selectedDay === key}
        onClick={() => setSelectedDay(key)}
      />
    {/each}
  </div>
</Header>

<main class="grid">
  <div class="flex flex-col space-y-12 p-4" style="grid-area: 1 / 1 / 2 /2;">
    <ScheduleLines />
  </div>
  {#each days as { key, timeSlots }}
    {#if selectedDay === key}
      <TheSchedule {timeSlots} {freeColor} />
    {/if}
  {/each}
</main>
