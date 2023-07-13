import type { Room } from "./rooms";

export enum GoogleColor {
  Blue = "bg-google-blue",
  Red = "bg-google-red",
  Yellow = "bg-google-yellow",
  Green = "bg-google-green",
}

export enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
}

export const corners = [
  {
    name: "E Corner",
    href: "/corners/E",
    color: GoogleColor.Blue,
  },
  {
    name: "F Corner",
    href: "/corners/F",
    color: GoogleColor.Red,
  },
  {
    name: "G Corner",
    href: "/corners/G",
    color: GoogleColor.Yellow,
  },
  {
    name: "H Corner",
    href: "/corners/H",
    color: GoogleColor.Green,
  },
];

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
    link: "/corners/E",
  },
  F: {
    headerColor: GoogleColor.Red,
    freeColor: GoogleColor.Red,
    link: "/corners/F",
  },
  G: {
    headerColor: GoogleColor.Yellow,
    freeColor: GoogleColor.Yellow,
    link: "/corners/G",
  },
  H: {
    headerColor: GoogleColor.Green,
    freeColor: GoogleColor.Green,
    link: "/corners/H",
  },
};

export const getDays = (room: Room) => {
  return [
    { day: "Sunday", key: Day.Sunday, timeSlots: room.sunday },
    { day: "Monday", key: Day.Monday, timeSlots: room.monday },
    { day: "Tuesday", key: Day.Tuesday, timeSlots: room.tuesday },
    { day: "Wednesday", key: Day.Wednesday, timeSlots: room.wednesday },
    { day: "Thursday", key: Day.Thursday, timeSlots: room.thursday },
  ];
};
