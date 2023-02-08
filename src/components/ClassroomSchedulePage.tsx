import { useState } from "react";
import type { Room } from "../misc/rooms";
import Header from "./Header";
import { roomTypeMap } from "../misc/data";
import ScheduleDayTimeSlots from "./ScheduleDayTimeSlots";
import ScheduleLine from "./ScheduleLine";
import TextChip from "./TextChip";

interface Props {
  room: Room;
}

enum Day {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
}

export default function ClassroomSchedulePage({ room }: Props) {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" })
  );
  const [selectedDay, setSelectedDay] = useState(now.getDay());
  const days = [
    { day: "Sunday", key: Day.sunday, timeSlots: room.sunday },
    { day: "Monday", key: Day.monday, timeSlots: room.monday },
    { day: "Tuesday", key: Day.tuesday, timeSlots: room.tuesday },
    { day: "Wednesday", key: Day.wednesday, timeSlots: room.wednesday },
    { day: "Thursday", key: Day.thursday, timeSlots: room.thursday },
  ];
  const { headerColor, occupiedSlotColor, link } =
    roomTypeMap[room.name.charAt(0)] || {};

  return (
    <div>
      <Header
        title={room.name}
        color={headerColor!}
        backButtonHref={link}
        aria-label={`${room.name} header`}
      >
        <div
          className="mt-4 flex flex-row flex-nowrap gap-x-5 overflow-x-auto overflow-y-hidden md:justify-center md:gap-x-20"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {days.map(({ day, key }) => (
            <TextChip
              key={day}
              text={day}
              isSelected={selectedDay === key}
              onClick={() => setSelectedDay(key)}
              aria-label={`${day} Schedule`}
            />
          ))}
        </div>
      </Header>
      <div className="grid">
        <div
          className="flex flex-col space-y-12 p-4"
          style={{ gridArea: "1 / 1 / 2 / 2" }}
        >
          <ScheduleLine />
        </div>
        {days.map(({ key, timeSlots }) => (
          <ScheduleDayTimeSlots
            key={key}
            timeSlots={timeSlots}
            occupiedSlotColor={occupiedSlotColor!}
            isVisible={selectedDay === key}
          />
        ))}
      </div>
    </div>
  );
}
