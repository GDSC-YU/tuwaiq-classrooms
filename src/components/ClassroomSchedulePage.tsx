import { useState } from "react";
import type { Room } from "../misc/rooms";
import Header, { HeaderColor } from "./Header";
import ScheduleDayTimeSlots, {
  OccupiedSlotColor,
} from "./ScheduleDayTimeSlots";
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
  const now = new Date();
  const [selectedDay, setSelectedDay] = useState(now.getDay());

  let headerColor: HeaderColor;
  let occupiedSlotColor: OccupiedSlotColor;
  switch (room.name.charAt(0)) {
    case "E":
      headerColor = HeaderColor.paleBlue;
      occupiedSlotColor = OccupiedSlotColor.paleBlue;
      break;
    case "F":
      headerColor = HeaderColor.paleRed;
      occupiedSlotColor = OccupiedSlotColor.paleRed;
      break;
    case "G":
      headerColor = HeaderColor.paleYellow;
      occupiedSlotColor = OccupiedSlotColor.paleYellow;
      break;
    case "H":
      headerColor = HeaderColor.paleGreen;
      occupiedSlotColor = OccupiedSlotColor.paleGreen;
      break;
  }

  return (
    <div>
      <Header title={room.name} color={headerColor!}>
        <div className="flex flex-row flex-nowrap space-x-4 overflow-x-auto overflow-y-hidden mt-4">
          <TextChip
            text="Sunday"
            isSelected={selectedDay == Day.sunday}
            onClick={() => setSelectedDay(Day.sunday)}
          />
          <TextChip
            text="Monday"
            isSelected={selectedDay == Day.monday}
            onClick={() => setSelectedDay(Day.monday)}
          />
          <TextChip
            text="Tuesday"
            isSelected={selectedDay == Day.tuesday}
            onClick={() => setSelectedDay(Day.tuesday)}
          />
          <TextChip
            text="Wednesday"
            isSelected={selectedDay == Day.wednesday}
            onClick={() => setSelectedDay(Day.wednesday)}
          />
          <TextChip
            text="Thursday"
            isSelected={selectedDay == Day.thursday}
            onClick={() => setSelectedDay(Day.thursday)}
          />
        </div>
      </Header>
      <div className="grid">
        <div
          className="flex flex-col space-y-12 p-4"
          style={{ gridArea: "1 / 1 / 2 / 2" }}
        >
          <ScheduleLine time="07 am" />
          <ScheduleLine time="08 am" />
          <ScheduleLine time="09 am" />
          <ScheduleLine time="10 am" />
          <ScheduleLine time="11 am" />
          <ScheduleLine time="12 am" />
          <ScheduleLine time="01 pm" />
          <ScheduleLine time="02 pm" />
          <ScheduleLine time="03 pm" />
          <ScheduleLine time="04 pm" />
          <ScheduleLine time="05 pm" />
        </div>
        <ScheduleDayTimeSlots
          key={Day.sunday}
          timeSlots={room.sunday}
          occupiedSlotColor={occupiedSlotColor!}
          isVisible={selectedDay == Day.sunday}
        />
        <ScheduleDayTimeSlots
          key={Day.monday}
          timeSlots={room.monday}
          occupiedSlotColor={occupiedSlotColor!}
          isVisible={selectedDay == Day.monday}
        />
        <ScheduleDayTimeSlots
          key={Day.tuesday}
          timeSlots={room.tuesday}
          occupiedSlotColor={occupiedSlotColor!}
          isVisible={selectedDay == Day.tuesday}
        />
        <ScheduleDayTimeSlots
          key={Day.wednesday}
          timeSlots={room.wednesday}
          occupiedSlotColor={occupiedSlotColor!}
          isVisible={selectedDay == Day.wednesday}
        />
        <ScheduleDayTimeSlots
          key={Day.thursday}
          timeSlots={room.thursday}
          occupiedSlotColor={occupiedSlotColor!}
          isVisible={selectedDay == Day.thursday}
        />
      </div>
    </div>
  );
}
