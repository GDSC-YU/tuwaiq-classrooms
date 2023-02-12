import { useState } from "react";
//swiper stuff
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
//to specify when to show the mobile view
import { useMediaQuery } from "react-responsive";
//data
import type { Room } from "../misc/rooms";
import { roomTypeMap } from "../misc/data";
//components
import Header from "./Header";
import TextChip from "./TextChip";
import ScheduleDayTimeSlots from "./ScheduleDayTimeSlots";
import ScheduleLine from "./ScheduleLine";

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
  const days = [
    { day: "Sunday", key: Day.sunday, timeSlots: room.sunday },
    { day: "Monday", key: Day.monday, timeSlots: room.monday },
    { day: "Tuesday", key: Day.tuesday, timeSlots: room.tuesday },
    { day: "Wednesday", key: Day.wednesday, timeSlots: room.wednesday },
    { day: "Thursday", key: Day.thursday, timeSlots: room.thursday },
  ];

  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" })
  );

  const isMobile = useMediaQuery({ maxWidth: 905 });

  const [selectedDay, setSelectedDay] = useState(now.getDay());

  const { headerColor, occupiedSlotColor, link } =
    roomTypeMap[room.name.charAt(0)] || {};

  return (
    <>
      <Header
        title={room.name}
        color={headerColor!}
        backButtonHref={link}
        aria={"Classroom"}
      >
        {isMobile ? (
          <Swiper
            className="mt-4"
            speed={250}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}
            initialSlide={selectedDay}
            onSlideChange={(swiper) =>
              setSelectedDay(days[swiper.activeIndex].key)
            }
          >
            {days.map(({ day }) => (
              <SwiperSlide key={day}>
                <p className="text-cairo text-center text-2xl font-black">
                  {day}
                </p>
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
      </main>
    </>
  );
}
