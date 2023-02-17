import type { Room, TimeSlot, TimeOfDay } from "../misc/rooms";
import { getAmPmFromHours } from "../misc/utils";
import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { AiOutlineArrowUp } from "react-icons/ai/index.js";

interface Props {
  rooms: Record<string, Room>;
  corner: string;
}

const cornerColor: Record<string, string> = {
  E: "bg-pale-blue",
  F: "bg-pale-red",
  G: "bg-pale-yellow",
  H: "bg-pale-green",
};

export default function FreeRooms({ rooms, corner }: Props) {
  const groupedRooms = groupRoomsByCategory(rooms);
  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1355px)" });

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setShowScrollButton(window.pageYOffset > 100 ? true : false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility, {
      passive: true,
    } as EventListenerOptions);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility, {
        passive: true,
      } as EventListenerOptions);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredRooms = Object.entries(groupedRooms[corner] ?? {}).filter(
    ([name, _]) => name.startsWith(searchTerm.toUpperCase())
  );

  return (
    <>
      <main
        className="flex flex-col gap-y-10 p-10 text-center font-cairo font-semibold"
        key={corner}
      >
        {isMobile ? (
          <>
            <input
              type="text"
              className="mx-auto w-full rounded-lg border px-4 py-2 text-center md:w-2/3"
              placeholder={`Search for a Specific ${corner} room`}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            {filteredRooms.map(([name, room]) => (
              <div
                key={name}
                className="grid rounded-lg bg-gray-200 text-gray-800 shadow"
              >
                <div
                  className={`${cornerColor[corner]} rounded-t-lg p-4 shadow`}
                >
                  <a
                    className="text-2xl font-black text-black hover:underline"
                    href={`/classrooms/${name}`}
                  >
                    Room {name}
                  </a>
                </div>
                <div className="p-4">
                  <div className="p-3 text-2xl text-black">Sunday</div>
                  <div>{renderTimeSlots(room.sunday)}</div>
                </div>
                <div className="p-4">
                  <div className="p-3 text-2xl text-black">Monday</div>
                  <div>{renderTimeSlots(room.monday)}</div>
                </div>
                <div className="p-4">
                  <div className="p-3 text-2xl text-black">Tuesday</div>
                  <div>{renderTimeSlots(room.tuesday)}</div>
                </div>
                <div className="p-4">
                  <div className="p-3 text-2xl text-black">Wednesday</div>
                  <div>{renderTimeSlots(room.wednesday)}</div>
                </div>
                <div className="p-4">
                  <div className="p-3 text-2xl text-black">Thursday</div>
                  <div>{renderTimeSlots(room.thursday)}</div>
                </div>
              </div>
            ))}
            {showScrollButton && (
              <button
                className={`fixed ${cornerColor[corner]} bottom-8 right-8 rounded-full p-2 text-black shadow`}
                onClick={scrollToTop}
                aria-label="Scroll To Top Button"
              >
                <AiOutlineArrowUp className="h-7 w-7" />
              </button>
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              className="mx-auto w-full rounded-lg border px-4 py-2 text-center"
              placeholder={`Search for a Specific ${corner} room`}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <table className="w-full table-fixed overflow-hidden rounded-lg shadow">
              <thead className={`${cornerColor[corner]} text-2xl`}>
                <th className="p-3 font-extrabold">Room</th>
                <th className="p-3 font-extrabold">Sunday</th>
                <th className="p-3 font-extrabold">Monday</th>
                <th className="p-3 font-extrabold">Tuesday</th>
                <th className="p-3 font-extrabold">Wednesday</th>
                <th className="p-3 font-extrabold">Thursday</th>
              </thead>
              <tbody>
                {filteredRooms.map(([name, room]) => (
                  <tr key={name} className="bg-gray-200 text-gray-800">
                    <td className="p-4">
                      <a
                        className="hover:underline"
                        href={`/classrooms/${name}`}
                      >
                        {name}
                      </a>
                    </td>
                    <td className="p-4">{renderTimeSlots(room.sunday)}</td>
                    <td className="p-4">{renderTimeSlots(room.monday)}</td>
                    <td className="p-4">{renderTimeSlots(room.tuesday)}</td>
                    <td className="p-4">{renderTimeSlots(room.wednesday)}</td>
                    <td className="p-4">{renderTimeSlots(room.thursday)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </>
  );
}

const groupRoomsByCategory = (rooms: Record<string, Room>) => {
  const groupedRooms: Record<string, Record<string, Room>> = {};
  Object.entries(rooms).forEach(([name, room]) => {
    const category = name.charAt(0);
    if (!groupedRooms[category]) {
      groupedRooms[category] = {};
    }
    groupedRooms[category][name] = room;
  });
  return groupedRooms;
};

const renderTimeSlots = (timeSlots: Array<TimeSlot> | null) => {
  if (timeSlots === null || timeSlots.length === 0) {
    return <p>Free All Day Long</p>;
  }

  const freeTimeSlots = timeSlots.filter(
    (timeSlot) =>
      timeSlot.courseName === "Free" && getTimeSlotDuration(timeSlot) > 10
  );

  if (freeTimeSlots.length > 0) {
    if (true) {
      const nonFreeTimeSlots = timeSlots.filter(
        (timeSlot) => timeSlot.courseName !== "Free"
      );

      let start = "Free all day long";
      let end;

      if (nonFreeTimeSlots.length > 0) {
        const firstNonFree = nonFreeTimeSlots[0];
        const lastNonFree = nonFreeTimeSlots[nonFreeTimeSlots.length - 1];
        start = `Free All Day Before ${formatTimeOfDay(
          firstNonFree.timeStart
        )}`;
        end = `Free All Day After ${formatTimeOfDay(lastNonFree.timeEnd)}`;
      }
      return (
        <>
          <ul>
            <li>{start}</li>
            {freeTimeSlots.map((timeSlot, index) => (
              <li key={index}>
                {`${formatTimeOfDay(timeSlot.timeStart)} - ${formatTimeOfDay(
                  timeSlot.timeEnd
                )}`}
              </li>
            ))}
            <li>{end}</li>
          </ul>
        </>
      );
    }
  }

  const { timeStart, timeEnd } = timeSlots[0];
  const courseTime = `${formatTimeOfDay(timeStart)} - ${formatTimeOfDay(
    timeEnd
  )}`;
  return (
    <p>
      Free All Day Before <br /> {courseTime} <br /> And After It
    </p>
  );
};

const getTimeSlotDuration = (timeSlot: TimeSlot) => {
  const durationInMinutes =
    (timeSlot.timeEnd.hour - timeSlot.timeStart.hour) * 60 +
    (timeSlot.timeEnd.minute - timeSlot.timeStart.minute);
  return durationInMinutes;
};

const formatTimeOfDay = (time: TimeOfDay) => {
  const { hour, minute } = time;
  const amPm = getAmPmFromHours(hour);
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute.toString().padStart(2, "0")} ${amPm}`;
};
