<script lang="ts">
  import type { GoogleColor } from "../../data/data";
  import type { TimeSlot } from "../../data/rooms";
  import { getAmPmFromHours } from "../utils";

  export let timeSlots: TimeSlot[] | null;
  export let freeColor: GoogleColor;

  let calculatedSlots: { [key: string]: any }[] = [];

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

  function calculateSlotData(timeSlot: TimeSlot) {
    const isFreeSlot = timeSlot.courseName === "Free";
    const startTime = `${timeSlot.timeStart.hour}:${
      timeSlot.timeStart.minute === 0 ? "00" : timeSlot.timeStart.minute
    } ${getAmPmFromHours(timeSlot.timeStart.hour)}`;
    const endTime = `${timeSlot.timeEnd.hour}:${
      timeSlot.timeEnd.minute === 0 ? "00" : timeSlot.timeEnd.minute
    } ${getAmPmFromHours(timeSlot.timeEnd.hour)}`;
    const minutesTotal =
      (timeSlot.timeEnd.hour - timeSlot.timeStart.hour) * 60 +
      timeSlot.timeEnd.minute -
      timeSlot.timeStart.minute;

    let scheduleOffset = 0;
    if (timeSlot.timeStart.hour > 7 || timeSlot.timeStart.minute > 0) {
      const hoursInMinutes = (timeSlot.timeStart.hour - 7) * 60;
      const offsetMinutes = hoursInMinutes + timeSlot.timeStart.minute;
      scheduleOffset = offsetMinutes * (4.5 / 60);
    }

    const minutesRemRatio = isFreeSlot ? 4.5 / 60 : 4.5 / (60 * 1.05);

    return {
      isFreeSlot,
      startTime,
      endTime,
      minutesTotal,
      scheduleOffset,
      minutesRemRatio,
    };
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
