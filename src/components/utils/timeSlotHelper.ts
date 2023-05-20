import type { TimeSlot } from "../../data/rooms";

export function calculateSlotData(timeSlot: TimeSlot) {
  const isFreeSlot = timeSlot.courseName === "Free";
  const startHour = timeSlot.timeStart.hour % 12 || 12;
  const endHour = timeSlot.timeEnd.hour % 12 || 12;
  const startTime = `${startHour.toString().padStart(2, "0")}:${
    timeSlot.timeStart.minute === 0
      ? "00"
      : timeSlot.timeStart.minute.toString().padStart(2, "0")
  } ${timeSlot.timeStart.hour >= 12 ? "PM" : "AM"}`;
  const endTime = `${endHour.toString().padStart(2, "0")}:${
    timeSlot.timeEnd.minute === 0
      ? "00"
      : timeSlot.timeEnd.minute.toString().padStart(2, "0")
  } ${timeSlot.timeEnd.hour >= 12 ? "PM" : "AM"}`;
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
