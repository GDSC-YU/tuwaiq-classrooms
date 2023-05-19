export enum GoogleColor {
  Blue = "bg-pale-blue dark:bg-google-blue",
  Red = "bg-pale-red dark:bg-google-red",
  Yellow = "bg-pale-yellow dark:bg-google-yellow",
  Green = "bg-pale-green dark:bg-google-green",
}

export const roomTypeMap: {
  [key: string]: {
    headerColor: GoogleColor;
    occupiedSlotColor: GoogleColor;
    link: string;
  };
} = {
  E: {
    headerColor: GoogleColor.Blue,
    occupiedSlotColor: GoogleColor.Blue,
    link: "/corner/E",
  },
  F: {
    headerColor: GoogleColor.Red,
    occupiedSlotColor: GoogleColor.Red,
    link: "/corner/F",
  },
  G: {
    headerColor: GoogleColor.Yellow,
    occupiedSlotColor: GoogleColor.Yellow,
    link: "/corner/G",
  },
  H: {
    headerColor: GoogleColor.Green,
    occupiedSlotColor: GoogleColor.Green,
    link: "/corner/H",
  },
};
