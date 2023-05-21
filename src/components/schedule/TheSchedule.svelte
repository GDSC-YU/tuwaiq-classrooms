<script lang="ts">
  import type { GoogleColor } from "../../data/data";
  import type { TimeSlot } from "../../data/rooms";
  import { calculateSlotData } from "../utils/timeSlotHelper";

  export let timeSlots: TimeSlot[] | null;
  export let freeColor: GoogleColor;

  let calculatedSlots: { [key: string]: any }[];

  $: {
    if (timeSlots) {
      calculatedSlots = timeSlots.map((timeSlot) => {
        const {
          isFreeSlot,
          startTime,
          endTime,
          minutesTotal,
          scheduleOffset,
          minutesRemRatio,
        } = calculateSlotData(timeSlot);

        return {
          timeSlot,
          isFreeSlot,
          startTime,
          endTime,
          minutesTotal,
          scheduleOffset,
          minutesRemRatio,
        };
      });
    }
  }
</script>

<div class="ml-20 mr-2 flex flex-col pt-5" style="grid-area: 1 / 1 / 2 / 2;">
  {#each calculatedSlots as { timeSlot, isFreeSlot, startTime, endTime, minutesTotal, scheduleOffset, minutesRemRatio }, index}
    <div
      class={`mx-4 flex flex-col justify-center ${
        isFreeSlot ? freeColor : "bg-slate-600 dark:bg-stone-200"
      } text-center sm:mx-[20%]`}
      class:rounded-t-2xl={index === 0}
      class:rounded-b-2xl={index === calculatedSlots.length - 1}
      style="height: {isFreeSlot
        ? Math.max(1.5, minutesTotal * minutesRemRatio)
        : minutesTotal * minutesRemRatio}rem;
        margin-top: {index === 0 ? scheduleOffset : ''}rem;"
    >
      <p
        class="text-lg font-bold text-stone-200 dark:text-slate-900 md:text-xl"
      >
        {isFreeSlot ? "" : timeSlot.courseName}
      </p>
      <p
        class={`font-bold  ${
          isFreeSlot ? "" : "text-white/60 dark:text-slate-900"
        }`}
      >
        {`${startTime} - ${endTime}`}
      </p>
    </div>
  {/each}
</div>
