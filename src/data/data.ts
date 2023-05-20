export enum GoogleColor {
  Blue = "bg-pale-blue dark:bg-google-blue",
  Red = "bg-pale-red dark:bg-google-red",
  Yellow = "bg-pale-yellow dark:bg-google-yellow",
  Green = "bg-pale-green dark:bg-google-green",
}

export enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
}

export const roomTypeMap: {
  [key: string]: {
    headerColor: GoogleColor;
    freeColor: GoogleColor;
    link: string;
  };
} = {
  E: {
    headerColor: GoogleColor.Blue,
    freeColor: GoogleColor.Blue,
    link: "/corner/E",
  },
  F: {
    headerColor: GoogleColor.Red,
    freeColor: GoogleColor.Red,
    link: "/corner/F",
  },
  G: {
    headerColor: GoogleColor.Yellow,
    freeColor: GoogleColor.Yellow,
    link: "/corner/G",
  },
  H: {
    headerColor: GoogleColor.Green,
    freeColor: GoogleColor.Green,
    link: "/corner/H",
  },
};
