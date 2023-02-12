import type { TimeSlot } from "../misc/rooms";
import { getAmPmFromHours } from "../misc/utils";

export enum OccupiedSlotColor {
  paleYellow = "bg-pale-yellow",
  paleRed = "bg-pale-red",
  paleGreen = "bg-pale-green",
  paleBlue = "bg-pale-blue",
}

interface Props {
  timeSlots: Array<TimeSlot> | null;
  occupiedSlotColor: OccupiedSlotColor;
  isVisible: boolean;
}

export default function ScheduleDayTimeSlots({
  timeSlots,
  occupiedSlotColor,
  isVisible,
}: Props) {
  return (
    <div
      className={`${
        isVisible ? "visible" : "invisible"
      } ml-20 mr-2 flex flex-col pt-5`}
      style={{ gridArea: "1 / 1 / 2 / 2" }}
    >
      {timeSlots == null
        ? ""
        : timeSlots.map((timeSlot) => {
            const isFreeSlot = timeSlot.courseName == "Free";

            const isFirst = timeSlots.indexOf(timeSlot) == 0;
            const isLast = timeSlots.indexOf(timeSlot) == timeSlots.length - 1;

            const startHour = timeSlot.timeStart.hour;
            const startMinute = timeSlot.timeStart.minute;
            const startTime = `${startHour}:${
              startMinute == 0 ? "00" : startMinute
            } ${getAmPmFromHours(startHour)}`;

            const endHour = timeSlot.timeEnd.hour;
            const endMinute = timeSlot.timeEnd.minute;
            const endTime = `${endHour}:${
              endMinute == 0 ? "00" : endMinute
            } ${getAmPmFromHours(endHour)}`;

            const minutesTotal =
              (endHour - startHour) * 60 + endMinute - startMinute;

            const minutesRemRatio = 4.5 / 60;

            let scheduleOffset = 0;
            if (
              isFirst &&
              (timeSlot.timeStart.hour > 7 || timeSlot.timeStart.minute > 0)
            ) {
              const hoursInMinutes = (timeSlot.timeStart.hour - 7) * 60;
              const offestMinutes = hoursInMinutes + timeSlot.timeStart.minute;
              scheduleOffset = offestMinutes * minutesRemRatio;
            }

            return (
              <div
                key={Math.random() * 51}
                className={`mx-4 flex flex-col justify-center text-center sm:mx-[20%] ${
                  !isFreeSlot ? "bg-light-grey" : occupiedSlotColor
                } ${isFirst ? "rounded-t-[16px]" : ""} ${
                  isLast ? "rounded-b-[16px]" : ""
                }`}
                style={{
                  height: `${
                    isFreeSlot
                      ? Math.max(1.3, minutesTotal * minutesRemRatio)
                      : (minutesTotal * minutesRemRatio) / 1.05
                  }rem`,
                  marginTop: `${scheduleOffset}rem`,
                }}
              >
                <p
                  className="text-cairo text-lg font-bold md:text-xl"
                  aria-label={`${
                    isFreeSlot
                      ? "Free Room"
                      : `Occupied Cause Of Course ${timeSlot.courseName}`
                  } `}
                >
                  {isFreeSlot ? "" : timeSlot.courseName}
                </p>
                <p
                  className={`text-cairo font-bold ${
                    isFreeSlot ? " text-black" : " text-black/50"
                  }`}
                  aria-label={`${
                    isFreeSlot
                      ? `From ${startTime} till ${endTime} time`
                      : `From ${startTime} till ${endTime} time`
                  } `}
                >
                  {isFreeSlot
                    ? `Free! ${startTime} - ${endTime}`
                    : `${startTime} - ${endTime}`}
                </p>
              </div>
            );
          })}
    </div>
  );
}
