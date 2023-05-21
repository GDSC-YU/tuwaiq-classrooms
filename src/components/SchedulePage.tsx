import { useState } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Data & Data Types & Stores
import type { Room } from "../data/rooms";
import { roomTypeMap, getDays } from "../data/data";
import { globalDarkMode } from "./ui/DarkMode";

// Components
import Header from "./ui/Header";
import TextChip from "./schedule/TexChip";
import ScheduleLines from "./schedule/ScheduleLines";
import TheSchedule from "./schedule/TheSchedule";

interface Props {
  room: Room;
}

export default function SchedulePage({ room }: Props) {
  const days = getDays(room);

  const isMobile = window.innerWidth < 905;

  const dark = globalDarkMode().get();

  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const { headerColor, freeColor, link } = roomTypeMap[room.name.charAt(0)];

  return (
    <>
      <Header backButtonHref={link} title={room.name} color={headerColor!}>
        {isMobile ? (
          <Swiper
            className="mt-3 pb-5"
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            loop={true}
            initialSlide={selectedDay}
            onSlideChange={(swiper) =>
              setSelectedDay(days[swiper.activeIndex].key)
            }
            style={
              {
                "--swiper-pagination-bottom": "auto",
                "--swiper-pagination-color": dark ? "white" : "black",
              } as React.CSSProperties
            }
          >
            {days.map(({ day }) => (
              <SwiperSlide key={day}>
                <p className="text-center text-2xl font-black">{day}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="mt-5 flex flex-row flex-nowrap justify-center gap-x-20 overflow-x-auto overflow-y-hidden">
            {days.map(({ day, key }) => (
              <TextChip
                key={day}
                text={day}
                isSelected={selectedDay === key}
                onClick={() => setSelectedDay(key)}
              />
            ))}
          </div>
        )}
      </Header>
      <main className="grid">
        <div
          className="flex flex-col space-y-12 p-4"
          style={{ gridArea: "1 / 1 / 2 / 2" }}
        >
          <ScheduleLines />
        </div>
        {days.map(({ key, timeSlots }) => (
          <TheSchedule
            key={key}
            timeSlots={timeSlots}
            freeColor={freeColor!}
            isVisible={selectedDay === key}
          />
        ))}
      </main>
    </>
  );
}
