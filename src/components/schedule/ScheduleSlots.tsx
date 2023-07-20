import type { TimeSlot } from "../../assets/data/rooms";
import type { GoogleColor } from "../../assets/data/data";

interface Props {
  timeSlots: Array<TimeSlot> | null;
  freeColor: GoogleColor;
  isVisible: boolean;
}

const TheSchedule = ({ timeSlots, freeColor, isVisible }: Props) => {
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
            const isFreeSlot = timeSlot.courseName === "Free";

            const isFirst = timeSlots.indexOf(timeSlot) === 0;
            const isLast = timeSlots.indexOf(timeSlot) === timeSlots.length - 1;

            const startHour = timeSlot.timeStart.hour % 12 || 12;
            const startMinute = timeSlot.timeStart.minute
              .toString()
              .padStart(2, "0");
            const startTime = `${startHour}:${startMinute} ${
              timeSlot.timeStart.hour >= 12 ? "PM" : "AM"
            }`;

            const endHour = timeSlot.timeEnd.hour % 12 || 12;
            const endMinute = timeSlot.timeEnd.minute
              .toString()
              .padStart(2, "0");
            const endTime = `${endHour}:${endMinute} ${
              timeSlot.timeEnd.hour >= 12 ? "PM" : "AM"
            }`;

            const minutesTotal =
              (timeSlot.timeEnd.hour - timeSlot.timeStart.hour) * 60 +
              timeSlot.timeEnd.minute -
              timeSlot.timeStart.minute;

            const minutesRemRatio = isFreeSlot ? 4.5 / 60 : 4.5 / (60 * 1.05);

            let scheduleOffset = 0;
            if (
              isFirst &&
              (timeSlot.timeStart.hour > 7 || timeSlot.timeStart.minute > 0)
            ) {
              const hoursInMinutes = (timeSlot.timeStart.hour - 7) * 60;
              const offsetMinutes = hoursInMinutes + timeSlot.timeStart.minute;
              scheduleOffset = offsetMinutes * (4.5 / 60);
            }

            return (
              <div
                key={Math.random() * 51}
                className={`mx-4 flex flex-col justify-center text-center sm:mx-[20%] lg:mx-[30%] ${
                  isFreeSlot ? freeColor : "bg-stone-100"
                } ${isFirst ? "rounded-t-2xl" : ""} ${
                  isLast ? "rounded-b-2xl" : ""
                }`}
                style={{
                  height: `${
                    isFreeSlot
                      ? Math.max(1.5, minutesTotal * minutesRemRatio)
                      : minutesTotal * minutesRemRatio
                  }rem`,
                  marginTop: `${scheduleOffset}rem`,
                }}
              >
                <p className="text-lg font-bold text-slate-900 md:text-xl">
                  <span
                    role="text"
                    aria-label={`${
                      isFreeSlot
                        ? "The Room Is Free!"
                        : "Occupied Cause Of Course:"
                    }`}
                  />
                  {isFreeSlot ? "" : timeSlot.courseName}
                </p>
                <p
                  className={`font-bold ${isFreeSlot ? "" : "text-slate-900"}`}
                >
                  <span role="text" aria-label="From" />
                  {startTime} <span role="text" aria-label="Til" /> - {endTime}
                </p>
              </div>
            );
          })}
    </div>
  );
};

export default TheSchedule;
