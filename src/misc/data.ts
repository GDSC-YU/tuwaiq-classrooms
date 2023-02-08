import { OccupiedSlotColor } from "../components/ScheduleDayTimeSlots";
import { HeaderColor } from "../components/Header";

export const roomTypeMap: {
  [key: string]: {
    headerColor: HeaderColor;
    occupiedSlotColor: OccupiedSlotColor;
    link: string;
  };
} = {
  E: {
    headerColor: HeaderColor.paleBlue,
    occupiedSlotColor: OccupiedSlotColor.paleBlue,
    link: "/corners/E",
  },
  F: {
    headerColor: HeaderColor.paleRed,
    occupiedSlotColor: OccupiedSlotColor.paleRed,
    link: "/corners/F",
  },
  G: {
    headerColor: HeaderColor.paleYellow,
    occupiedSlotColor: OccupiedSlotColor.paleYellow,
    link: "/corners/G",
  },
  H: {
    headerColor: HeaderColor.paleGreen,
    occupiedSlotColor: OccupiedSlotColor.paleGreen,
    link: "/corners/H",
  },
};
