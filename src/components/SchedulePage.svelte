<script lang="ts">
  // data, data types, and stores
  import type { Room } from "../data/rooms";
  import { Day, roomTypeMap, getDays } from "../data/data";
  import { isDark } from "../stores/darkMode";

  // Swiper imports
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Pagination } from "swiper";
  import "swiper/swiper-bundle.min.css";

  // props
  export let room: Room;

  // components
  import Header from "../components/ui/Header.svelte";
  import TextChip from "./schedule/TextChip.svelte";
  import ScheduleLines from "./schedule/ScheduleLines.svelte";
  import TheSchedule from "./schedule/TheSchedule.svelte";

  const { headerColor, freeColor, link } = roomTypeMap[room.name.charAt(0)];

  const isDesktop = window.innerWidth > 912;

  const days = getDays(room);

  let selectedDay: Day | null;

  $: {
    if (selectedDay == null) {
      const day = new Date().getDay();

      if (day !== 5 && day !== 6) {
        selectedDay = day as Day;
      }
    }
  }

  function setSelectedDay(day: Day) {
    selectedDay = day;
  }
</script>

<Header backButtonHref={link} title={room.name} color={headerColor}>
  {#if isDesktop}
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
  {:else}
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      loop={true}
      on:slideChange={({ detail }) => setSelectedDay(detail[0].activeIndex)}
      initialSlide={selectedDay !== null
        ? days.findIndex(({ key }) => key === selectedDay)
        : 0}
      style={`margin-top: 0.75rem; padding-bottom: 2rem; text-align: center; ${
        $isDark
          ? "--swiper-pagination-color: white"
          : "--swiper-pagination-color: black"
      }`}
    >
      {#each days as { day, key }}
        <SwiperSlide>
          <TextChip
            text={day}
            isSelected={selectedDay}
            onClick={() => setSelectedDay(key)}
          />
        </SwiperSlide>
      {/each}
    </Swiper>
  {/if}
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
