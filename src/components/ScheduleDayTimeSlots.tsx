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
      } flex flex-col ml-[5rem] mr-2 spacing-y-0 pt-5`}
      style={{ gridArea: "1 / 1 / 2 / 2" }}
    >
      {timeSlots == null
        ? ""
        : timeSlots.map((timeSlot) => {
            const isFreeSlot = timeSlot.courseName == "";

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

            const minutesRemRatio = 4.66 / 60;

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
                className={`flex flex-col text-center justify-center mx-4 ${
                  !isFreeSlot ? "bg-light-grey" : occupiedSlotColor
                } ${isFirst ? "rounded-t-[16px]" : ""} ${
                  isLast ? "rounded-b-[16px]" : ""
                }`}
                style={{
                  height: `${minutesTotal * minutesRemRatio}rem`,
                  marginTop: `${scheduleOffset}rem`,
                }}
              >
                <p className="text-cairo text-xl font-bold">
                  {isFreeSlot ? "" : timeSlot.courseName}
                </p>
                <p className="text-cairo text-sm font-bold text-black/50">
                  {startTime} - {endTime}
                </p>
              </div>
            );
          })}
    </div>
  );
}
