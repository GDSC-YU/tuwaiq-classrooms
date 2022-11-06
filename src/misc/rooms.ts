export interface Room {
  name: string;
  sunday: Array<TimeSlot> | null;
  monday: Array<TimeSlot> | null;
  tuesday: Array<TimeSlot> | null;
  wednesday: Array<TimeSlot> | null;
  thursday: Array<TimeSlot> | null;
}

export interface TimeSlot {
  timeStart: TimeOfDay;
  timeEnd: TimeOfDay;
  courseName: string;
}

export interface TimeOfDay {
  hour: number;
  minute: number;
}

export const rooms: Record<string, Room> = {
  E102: {
    name: "E102",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "327 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "131 MGT 409",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "132 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "255 CIS 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "133 MGT 312",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "322 ENG 101",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "369 LAW 331",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "134 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "135 ECO 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "136 ECO 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "382 LAW 216",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "327 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "131 MGT 409",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "132 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "255 CIS 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "133 MGT 312",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "322 ENG 101",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "369 LAW 331",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "134 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "135 ECO 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "136 ECO 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "382 LAW 216",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "327 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "131 MGT 409",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "132 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "133 MGT 312",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "322 ENG 101",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "369 LAW 331",
      },
    ],
  },
  E104: {
    name: "E104",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "145 ACC 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "146 ACC 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "273 CIS 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "147 ACC 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "366 LAW 342",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "477 SWE 322",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "148 ACC 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "149 ACC 311",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "267 CIS 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "145 ACC 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "146 ACC 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "147 ACC 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "366 LAW 342",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "148 ACC 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "149 ACC 311",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "145 ACC 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "146 ACC 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "273 CIS 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "147 ACC 202",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "366 LAW 342",
      },
    ],
  },
  E106: {
    name: "E106",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "318 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "23 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "21 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "22 STT 203",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "270 CIS 381",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "24 STT 203",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "573 STT 103",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "377 LAW 334",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "272 SWE 412",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "318 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "23 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "21 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "22 STT 203",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "270 CIS 381",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "24 STT 203",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "573 STT 103",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "377 LAW 334",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "272 SWE 412",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "318 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "23 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "21 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "22 STT 203",
      },
    ],
  },
  E108: {
    name: "E108",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "13 MTH 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "12 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "14 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "371 LAW 323",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "11 MTH 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "10 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "338 PSY 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "367 LAW 312",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "373 LAW 341",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "13 MTH 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "12 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "14 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "371 LAW 323",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "11 MTH 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "10 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "338 PSY 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "367 LAW 312",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "373 LAW 341",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "13 MTH 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "12 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "14 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "371 LAW 323",
      },
    ],
  },
  E110: {
    name: "E110",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "254 CIS 321",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "4 MTH 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "3 MTH 204",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "2 MTH 204",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "227 CIS 304",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "241 NES 481",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "228 NES 443229 CIS 442",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "1 MTH 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "271 CIS 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "242 NES 485",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "243 CIS 383",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "254 CIS 321",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "4 MTH 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "3 MTH 204",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "2 MTH 204",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "227 CIS 304",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "241 NES 481",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "228 NES 443229 CIS 442",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "1 MTH 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "271 CIS 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "242 NES 485",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "243 CIS 383",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "254 CIS 321",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "4 MTH 301",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "3 MTH 204",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "2 MTH 204",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "227 CIS 304",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "241 NES 481",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "228 NES 443229 CIS 442",
      },
    ],
  },
  E202: {
    name: "E202",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "151 ACC 415",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "152 FIN 324",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "263 CIS 104",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "153 ACC 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "154 ACC 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "278 BUS 304",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "155 ACC 426",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "151 ACC 415",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "152 FIN 324",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "153 ACC 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "154 ACC 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "278 BUS 304",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "155 ACC 426",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "151 ACC 415",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "152 FIN 324",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "263 CIS 104",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "153 ACC 202",
      },
    ],
  },
  E204: {
    name: "E204",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "164 MGT 102",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "165 MGT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "332 PHL 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "337 PSY 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "166 MGT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "324 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "167 MGT 102",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "164 MGT 102",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "165 MGT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "332 PHL 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "337 PSY 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "166 MGT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "324 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "167 MGT 102",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "164 MGT 102",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "165 MGT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "332 PHL 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "337 PSY 101",
      },
    ],
  },
  E206: {
    name: "E206",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "364 LAW 113",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "365 LAW 410",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "172 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "173 MGT 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "174 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "175 MGT 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "176 MGT 300",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "364 LAW 113",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "365 LAW 410",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "172 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "173 MGT 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "174 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "175 MGT 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "176 MGT 300",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "364 LAW 113",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "365 LAW 410",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "172 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "173 MGT 202",
      },
    ],
  },
  E208: {
    name: "E208",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "182 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "183 MGT 416",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "184 MKT 102",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "186 MKT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "352 LAW 344",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "188 MKT 311",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "416 IEG 301",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "182 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "183 MGT 416",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "184 MKT 102",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "186 MKT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "352 LAW 344",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "188 MKT 311",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "213 MIS 423",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "182 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "183 MGT 416",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "184 MKT 102",
      },
    ],
  },
  E210: {
    name: "E210",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "415 IEG 301",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "442 IEG 323",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "457 IEG 332",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "458 IEG 332",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "202 MIS 427",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "204 MIS 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "210 MIS 431",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "428 IEG 342",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "198 MIS 327",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "415 IEG 301",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "204 MIS 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "210 MIS 431",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "428 IEG 342",
      },
      {
        timeStart: { hour: 14, minute: 50 },
        timeEnd: { hour: 15, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "429 IEG 342",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "198 MIS 327",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "466 IEG 302",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "442 IEG 323",
      },
    ],
  },
  E301: {
    name: "E301",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "63 IAR A 422",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "64 ARCH 102",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "65 ARCH 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "66 ARC 403",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "63 IAR A 422",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "64 ARCH 102",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "65 ARCH 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "66 ARC 403",
      },
    ],
    thursday: null,
  },
  E302: {
    name: "E302",
    sunday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "245 SWE 401",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "60 IAR 402",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "412 ENR 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "245 SWE 401",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "60 IAR 402",
      },
    ],
    wednesday: null,
    thursday: null,
  },
  E303: {
    name: "E303",
    sunday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "472 ARC 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "461 IEG 351",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "460 IEG 351",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "472 ARC 201",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "460 IEG 351",
      },
    ],
    thursday: null,
  },
  E304: {
    name: "E304",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "37 PHY 102",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "73 ARC 501",
      },
    ],
    monday: null,
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "37 PHY 102",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "73 ARC 501",
      },
    ],
    wednesday: null,
    thursday: null,
  },
  E305: {
    name: "E305",
    sunday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "49 ARC 203",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "68 ARC 301",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "69 ARC 402",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "72 ARC 302",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "49 ARC 203",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "68 ARC 301",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "69 ARC 402",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "72 ARC 302",
      },
    ],
    thursday: null,
  },
  E306: {
    name: "E306",
    sunday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "71 ARC 401",
      },
    ],
    monday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "70 ARC 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "71 ARC 401",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "70 ARC 201",
      },
    ],
    thursday: null,
  },
  F003: {
    name: "F003",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "116 ECO 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "117 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "368 LAW 121",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "118 ECO 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "119 FIN 418",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "120 FIN 411",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "387 LAW 227",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "121 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "122 FIN 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "123 FIN 411",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "116 ECO 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "117 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "368 LAW 121",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "118 ECO 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "119 FIN 418",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "120 FIN 411",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "387 LAW 227",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "121 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "122 FIN 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "123 FIN 411",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 17, minute: 20 },
        courseName: "216 MIS 316",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "116 ECO 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "117 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "368 LAW 121",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "118 ECO 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "119 FIN 418",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "120 FIN 411",
      },
    ],
  },
  F007: {
    name: "F007",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "124 ACC 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "125 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "316 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "126 ACC 201",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "546 ARB 110.",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "127 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "128 MGT 305",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "129 MGT 305",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "380 LAW 112",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "124 ACC 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "125 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "316 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "126 ACC 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "257 CIS 104",
      },
      {
        timeStart: { hour: 16, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 17, minute: 20 },
        courseName: "465 IEG 302",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "546 ARB 110.",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "127 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "128 MGT 305",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "129 MGT 305",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "380 LAW 112",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "465 IEG 302",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "124 ACC 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "125 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "316 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "126 ACC 201",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "257 CIS 104",
      },
    ],
  },
  F103: {
    name: "F103",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "137 MGT 300",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "138 MGT 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "570 BUS 401",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "139 BUS 401",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "140 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "558 ORN 05-R",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "141 BUS 401",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "142 ACC 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "143 MGT 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "144 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "558 ORN 05-R",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "137 MGT 300",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "138 MGT 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "570 BUS 401",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "139 BUS 401",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "140 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "38 PHY 203",
      },
      {
        timeStart: { hour: 15, minute: 50 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "558 ORN 05-R",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "141 BUS 401",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "142 ACC 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "143 MGT 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "144 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "558 ORN 05-R",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "137 MGT 300",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "138 MGT 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "570 BUS 401",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "139 BUS 401",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "140 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "38 PHY 203",
      },
      {
        timeStart: { hour: 15, minute: 50 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "558 ORN 05-R",
      },
    ],
  },
  F105: {
    name: "F105",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "391 ENG 201",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "313 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "25 STT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "28 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "26 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "275 CIS 386",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "276 SWE 411",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "29 STT 203",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "27 STT 102",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "315 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "317 ENG 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "391 ENG 201",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "313 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "25 STT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "28 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "26 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "275 CIS 386",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "276 SWE 411",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "29 STT 203",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "27 STT 102",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "315 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "317 ENG 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "391 ENG 201",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "313 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "25 STT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "28 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "26 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "275 CIS 386",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "276 SWE 411",
      },
    ],
  },
  F107: {
    name: "F107",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "585 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "19 STT 103",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "15 MTH 106",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "328 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "16 MTH 106",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "17 MTH 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "18 MTH 304",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "374 LAW 213",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "361 LAW 124",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "585 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "19 STT 103",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "15 MTH 106",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "328 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "16 MTH 106",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "17 MTH 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "18 MTH 304",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "374 LAW 213",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "361 LAW 124",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "585 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "19 STT 103",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "15 MTH 106",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "328 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "16 MTH 106",
      },
    ],
  },
  F109: {
    name: "F109",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "239 CIS 443",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "9 MTH 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "5 MTH 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "6 MTH 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "246 SWE 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "8 MTH 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "7 MTH 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "247 SWE 300",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "375 LAW 223",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "370 LAW 224",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "239 CIS 443",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "9 MTH 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "5 MTH 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "6 MTH 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "246 SWE 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "8 MTH 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "7 MTH 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "247 SWE 300",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "375 LAW 223",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "370 LAW 224",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "239 CIS 443",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "9 MTH 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "5 MTH 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "6 MTH 101",
      },
    ],
  },
  F203: {
    name: "F203",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "156 BUS 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "279 MGT 305",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "157 MKT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "158 MKT 102",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "562 MGT 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "159 BUS 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "383 LAW 214",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "569 ORN 05-C",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "160 MKT 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "161 BUS 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "280 MKT 415",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "163 MGT 425",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "569 ORN 05-C",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "156 BUS 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "279 MGT 305",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "157 MKT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "158 MKT 102",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "562 MGT 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "159 BUS 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "383 LAW 214",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "569 ORN 05-C",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "160 MKT 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "161 BUS 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "280 MKT 415",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "163 MGT 425",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "569 ORN 05-C",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "156 BUS 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "279 MGT 305",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "157 MKT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "158 MKT 102",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "562 MGT 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "159 BUS 304",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "383 LAW 214",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 18, minute: 20 },
        courseName: "569 ORN 05-C",
      },
    ],
  },
  F205: {
    name: "F205",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "130 MGT 305",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "168 MKT 314",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "169 MKT 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "376 LAW 324",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "448 IEG 311",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "329 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "170 MKT 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "171 MKT 411",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "130 MGT 305",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "168 MKT 314",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "169 MKT 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "376 LAW 324",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 50 },
        courseName: "448 IEG 311",
      },
      {
        timeStart: { hour: 8, minute: 50 },
        timeEnd: { hour: 9, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "449 IEG 311",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "329 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "170 MKT 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "171 MKT 411",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "130 MGT 305",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "168 MKT 314",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "169 MKT 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "376 LAW 324",
      },
    ],
  },
  F207: {
    name: "F207",
    sunday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "52 ARC A 422",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "177 MGT 408",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "431 IEG 400",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "426 IEG 312",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "180 FIN 415",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "378 LAW 114",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "446 IEG 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "52 ARC A 422",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "177 MGT 408",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 50 },
        courseName: "426 IEG 312",
      },
      {
        timeStart: { hour: 8, minute: 50 },
        timeEnd: { hour: 9, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "427 IEG 312",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "180 FIN 415",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "378 LAW 114",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "445 IEG 201",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "177 MGT 408",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "431 IEG 400",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "432 IEG 400",
      },
    ],
  },
  F209: {
    name: "F209",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "261 CIS 221",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "189 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "190 BUS 385",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "191 MGT 301",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "192 MGT 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "193 MKT 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "194 MKT 312",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "434 IEG 341",
      },
      {
        timeStart: { hour: 14, minute: 50 },
        timeEnd: { hour: 15, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "435 IEG 341",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "261 CIS 221",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "189 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "190 BUS 385",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "191 MGT 301",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "192 MGT 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "193 MKT 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "194 MKT 312",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "434 IEG 341",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "189 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "190 BUS 385",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "191 MGT 301",
      },
    ],
  },
  G018: {
    name: "G018",
    sunday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "586 PHL 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "586 PHL 101",
      },
    ],
    tuesday: null,
    wednesday: null,
    thursday: null,
  },
  G116: {
    name: "G116",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "30 PHY 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "195 BUS 302",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "196 BUS 302",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "319 ENG 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "320 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "34 PHY 103",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "231 NES 342",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "31 ENR 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "32 PHY 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "197 BUS 302",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "30 PHY 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "195 BUS 302",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "196 BUS 302",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "319 ENG 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "320 ENG 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "231 NES 342",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "31 ENR 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "32 PHY 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "197 BUS 302",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "30 PHY 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "195 BUS 302",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "196 BUS 302",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "319 ENG 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "320 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "34 PHY 103",
      },
    ],
  },
  G118: {
    name: "G118",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "331 PHL 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "336 PSY 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "395 ENG 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "321 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "36 PHY 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "40 PHY 203",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "331 PHL 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "336 PSY 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "248 CIS 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "395 ENG 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "321 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "36 PHY 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "40 PHY 203",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "331 PHL 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "336 PSY 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "248 CIS 103",
      },
    ],
  },
  G120: {
    name: "G120",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "232 NES 322",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "250 CIS 351",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "222 NES 483",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "236 CIS 212237 NES 212",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "44 CHM 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "252 SWE 312",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "232 NES 322",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "250 CIS 351",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "222 NES 483",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "236 CIS 212237 NES 212",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "44 CHM 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "232 NES 322",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "250 CIS 351",
      },
    ],
  },
  G122: {
    name: "G122",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "244 SWE 302",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "330 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "42 ECL 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "43 ECL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "251 SWE 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "462 MEG 211",
      },
      {
        timeStart: { hour: 14, minute: 50 },
        timeEnd: { hour: 15, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "463 MEG 211",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "244 SWE 302",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "330 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "42 ECL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "46 CHM 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "43 ECL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "251 SWE 202",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "244 SWE 302",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "330 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "42 ECL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "46 CHM 101",
      },
    ],
  },
  G216: {
    name: "G216",
    sunday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "211 MIS 328",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "333 PHL 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "334 PHL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "205 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "219 NES 221",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "206 MIS 326",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "418 IEG 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "208 MIS 430",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "209 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "455 IEG 304",
      },
      {
        timeStart: { hour: 14, minute: 50 },
        timeEnd: { hour: 15, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 0 },
        timeEnd: { hour: 16, minute: 50 },
        courseName: "467 IEG 450",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "333 PHL 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "334 PHL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "205 MIS 329",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 50 },
        courseName: "418 IEG 414",
      },
      {
        timeStart: { hour: 8, minute: 50 },
        timeEnd: { hour: 9, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "419 IEG 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "208 MIS 430",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "209 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "455 IEG 304",
      },
      {
        timeStart: { hour: 13, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "456 IEG 304",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "211 MIS 328",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "333 PHL 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "334 PHL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "205 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "219 NES 221",
      },
    ],
  },
  G218: {
    name: "G218",
    sunday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "57 ARC 502",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "58 ARC A 421",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "413 IEG 321",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "421 IEG 431",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "587 LAW 115",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "470 IEG 322",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "57 ARC 502",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "58 ARC A 421",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "414 IEG 321",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "420 IEG 431",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "587 LAW 115",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "471 IEG 322",
      },
      {
        timeStart: { hour: 14, minute: 50 },
        timeEnd: { hour: 15, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "470 IEG 322",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "413 IEG 321",
      },
    ],
  },
  G220: {
    name: "G220",
    sunday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "450 IEG 411",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "53 ARC 205",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "349 LAW 332",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "350 LAW 125",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "351 LAW 211",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "578 ARC 204",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "55 ARC 305",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "56 MEC 103",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "53 ARC 205",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "349 LAW 332",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "350 LAW 125",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "351 LAW 211",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "578 ARC 204",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "55 ARC 305",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "56 MEC 103",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "450 IEG 411",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "451 IEG 411",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "349 LAW 332",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "350 LAW 125",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "351 LAW 211",
      },
    ],
  },
  G222: {
    name: "G222",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "452 IEG 303",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "48 ARC 303",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "67 IAR 404",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "50 IAR 403",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "440 IEG 430",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "51 ARC 304",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "54 ARC 204",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "379 LAW 226",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "453 IEG 303",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "48 ARC 303",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "67 IAR 404",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "50 IAR 403",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "440 IEG 430",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "441 IEG 430",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "51 ARC 304",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "54 ARC 204",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "379 LAW 226",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "567 ARC 205",
      },
    ],
  },
  H117: {
    name: "H117",
    sunday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "39 PHY 203",
      },
    ],
    monday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "41 PHY 203",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "35 PHY 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "33 PHY 103",
      },
    ],
    thursday: null,
  },
  H119: {
    name: "H119",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "234 NES 341",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "224 NES 482",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "579 NES 212",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "235 NES 341",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "220 NES 221",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "224 NES 482",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "225 NES 482",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "579 NES 212",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "234 NES 341",
      },
    ],
  },
  H217: {
    name: "H217",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "417 IEG 301",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "61 ARC 202",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "577 ARC 202",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "447 IEG 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "452 IEG 303",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "61 ARC 202",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "577 ARC 202",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "436 IEG 341",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "262 CIS 221",
      },
    ],
  },
  H219: {
    name: "H219",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "454 IEG 303",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "422 IEG 431",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "439 IEG 345",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "437 IEG 345",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "430 IEG 342",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "443 IEG 323",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "444 IEG 323",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "433 IEG 400",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "459 IEG 332",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "457 IEG 332",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "438 IEG 345",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "437 IEG 345",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "464 MEG 211",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "469 IEG 450",
      },
    ],
  },
};
