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
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "169 MIS 328",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "25 ACC 415",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "26 ACC 426",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "266 NES 485",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "27 ACC 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "134 MKT 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "33 ACC 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "56 STT 102",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "135 MKT 311",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "25 ACC 415",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "26 ACC 426",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "266 NES 485",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "27 ACC 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "134 MKT 414",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "33 ACC 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "56 STT 102",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "135 MKT 311",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "25 ACC 415",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "26 ACC 426",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "27 ACC 202",
      },
    ],
  },
  E104: {
    name: "E104",
    sunday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "149 MIS 327",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "351 LAW 123 | 533 LAW 230",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "151 MIS 428",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "163 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "372 LAW 226 | 536 LAW 314",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "575 LAW 231",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "165 MIS 326",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "168 MIS 430",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "174 MIS 431",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "285 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "175 MIS 423",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "351 LAW 123 | 533 LAW 230",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "151 MIS 428",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "163 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "372 LAW 226 | 536 LAW 314",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "575 LAW 231",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "168 MIS 430",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "174 MIS 431",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "285 ENG 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "351 LAW 123 | 533 LAW 230",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "151 MIS 428",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "163 MIS 329",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "372 LAW 226 | 536 LAW 314",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "575 LAW 231",
      },
    ],
  },
  E106: {
    name: "E106",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "128 MGT 409",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "81 MGT 441",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "82 MGT 416",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "129 MGT 312",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "143 MKT 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "144 MKT 312",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "85 BUS 404",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "128 MGT 409",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "81 MGT 441",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "82 MGT 416",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "129 MGT 312",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "143 MKT 312",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "144 MKT 312",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "85 BUS 404",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "128 MGT 409",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "81 MGT 441",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "82 MGT 416",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "129 MGT 312",
      },
    ],
  },
  E108: {
    name: "E108",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "141 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "142 MKT 411",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "69 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "72 MTH 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "283 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "148 MKT 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "80 MTH 106",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "83 MTH 301",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "141 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "142 MKT 411",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "69 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "72 MTH 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "283 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "148 MKT 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "80 MTH 106",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "83 MTH 301",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "141 MKT 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "142 MKT 411",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "69 MTH 301",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "72 MTH 101",
      },
    ],
  },
  E110: {
    name: "E110",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "158 CIS 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "52 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "54 MTH 304",
      },
    ],
    monday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "125 MGT 305",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "55 MTH 304",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "152 CIS 321",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "158 CIS 103",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "52 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "54 MTH 304",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "188 CIS 104",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "125 MGT 305",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "55 MTH 304",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "152 CIS 321",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "52 STT 102",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "54 MTH 304",
      },
    ],
  },
  E202: {
    name: "E202",
    sunday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "447 IEG 411",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "119 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "579 LAW 235",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "122 MGT 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "339 LAW 341",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "130 MGT 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "131 MGT 202",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "119 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "579 LAW 235",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "122 MGT 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "339 LAW 341",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "130 MGT 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "131 MGT 202",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "447 IEG 411",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "448 IEG 411",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "119 MGT 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "579 LAW 235",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "122 MGT 202",
      },
    ],
  },
  E204: {
    name: "E204",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "294 ENG 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "296 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "133 MKT 102",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "305 PHL 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "59 BUS 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "63 BUS 304",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "64 MGT 305",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "294 ENG 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "296 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "133 MKT 102",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "305 PHL 101",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "59 BUS 304",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "63 BUS 304",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "64 MGT 305",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "294 ENG 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "296 ENG 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "436 IEG 345",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "133 MKT 102",
      },
    ],
  },
  E206: {
    name: "E206",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "43 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "114 MGT 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "582 LAW 327",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "187 SWE 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "629 NES 212",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "190 CIS 221",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "185 CIS 221",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "43 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "114 MGT 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "582 LAW 327",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "187 SWE 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "629 NES 212",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "185 CIS 221",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "43 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "114 MGT 102",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "582 LAW 327",
      },
    ],
  },
  E208: {
    name: "E208",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "416 IEG 301",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "439 IEG 322",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "633 ENG 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "360 LAW 331 | 540 LAW 429",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "361 LAW 224",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "170 CIS 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "365 LAW 213",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "366 LAW 223",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "417 IEG 301",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "416 IEG 301",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "440 IEG 322",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "164 CIS 104",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "360 LAW 331 | 540 LAW 429",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "361 LAW 224",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "170 CIS 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "365 LAW 213",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "366 LAW 223",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "439 IEG 322",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "164 CIS 104",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "360 LAW 331 | 540 LAW 429",
      },
    ],
  },
  E210: {
    name: "E210",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "643 LAW 235",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "346 LAW 225",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "628 LAW 113 | 571 LAW 203",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "180 CIS 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "581 LAW 218",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "343 LAW 312",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "464 IEG 430",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "344 LAW 335 | 542 LAW 424",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "299 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "376 LAW 404",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "643 LAW 235",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "346 LAW 225",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "628 LAW 113 | 571 LAW 203",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "633 ENG 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "581 LAW 218",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "343 LAW 312",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 50 },
        courseName: "464 IEG 430",
      },
      {
        timeStart: { hour: 8, minute: 50 },
        timeEnd: { hour: 9, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "465 IEG 430",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "344 LAW 335 | 542 LAW 424",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "299 ENG 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "376 LAW 404",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "643 LAW 235",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "346 LAW 225",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "628 LAW 113 | 571 LAW 203",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "180 CIS 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "633 ENG 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "581 LAW 218",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "343 LAW 312",
      },
    ],
  },
  E301: {
    name: "E301",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "301 ARC 413",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "245 ARC 215",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "240 ARCH 111 | 241 ARCH 111",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "301 ARC 413",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "245 ARC 215",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "240 ARCH 111 | 241 ARCH 111",
      },
    ],
    thursday: null,
  },
  E302: {
    name: "E302",
    sunday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "249 ARCH 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "318 IAR 413",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "253 ARCH 102",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "615 CIS 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "249 ARCH 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "318 IAR 413",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "253 ARCH 102",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "615 CIS 201",
      },
    ],
  },
  E303: {
    name: "E303",
    sunday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "269 IAR 411",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "319 ARC A 423",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "261 ARC 215",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "263 ARC 211",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "269 IAR 411",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "319 ARC A 423",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "261 ARC 215",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "263 ARC 211",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "642 ARC 314",
      },
    ],
  },
  E304: {
    name: "E304",
    sunday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "312 IAR 414",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "315 ARC A 426",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "242 ARCH 112 | 243 ARCH 112",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "248 ARC 511",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "312 IAR 414",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "315 ARC A 426",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "242 ARCH 112 | 243 ARCH 112",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "248 ARC 511",
      },
    ],
    thursday: null,
  },
  E305: {
    name: "E305",
    sunday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "244 ARC 211",
      },
    ],
    monday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "246 ARC 311",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "608 CIS 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "244 ARC 211",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "246 ARC 311",
      },
    ],
    thursday: null,
  },
  E306: {
    name: "E306",
    sunday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "268 ARC 412",
      },
    ],
    monday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "247 ARC 411",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "268 ARC 412",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "247 ARC 411",
      },
    ],
    thursday: null,
  },
  F003: {
    name: "F003",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "61 BUS 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "62 MGT 305",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "132 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "336 LAW 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "77 BUS 401",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "41 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "42 ECO 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "95 STT 102",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "61 BUS 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "62 MGT 305",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "132 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "336 LAW 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "77 BUS 401",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "41 ECO 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "42 ECO 202",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "95 STT 102",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "61 BUS 304",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "62 MGT 305",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "132 MKT 311",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "336 LAW 101",
      },
    ],
  },
  F007: {
    name: "F007",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "118 MGT 305",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "21 ACC 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "22 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "430 IEG 400",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "23 ACC 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "298 PHL 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "24 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "46 FIN 414",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "47 FIN 411",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "369 LAW 122",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "118 MGT 305",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "21 ACC 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "22 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "23 ACC 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "298 PHL 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "24 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "46 FIN 414",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "47 FIN 411",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "369 LAW 122",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "118 MGT 305",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "21 ACC 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "22 ACC 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "430 IEG 400",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "431 IEG 400",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "23 ACC 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "298 PHL 101",
      },
    ],
  },
  F103: {
    name: "F103",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "35 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "153 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "36 FIN 418",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "377 FIN 202",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "37 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "38 FIN 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "78 MGT 300",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "373 LAW 115",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "35 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "153 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "36 FIN 418",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "377 FIN 202",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "37 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "38 FIN 418",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "78 MGT 300",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "373 LAW 115",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "35 ECO 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "153 MIS 201",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "36 FIN 418",
      },
    ],
  },
  F105: {
    name: "F105",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "573 LAW 326",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "145 MKT 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "146 MKT 415",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "424 PHY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "147 MKT 314",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "209 SWE 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "590 LAW 422",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "300 BUS 302",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "53 BUS 302",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "573 LAW 326",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "145 MKT 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "146 MKT 415",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "424 PHY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "147 MKT 314",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "209 SWE 202",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "590 LAW 422",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "300 BUS 302",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "53 BUS 302",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "573 LAW 326",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "145 MKT 418",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "146 MKT 415",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "424 PHY 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "147 MKT 314",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "209 SWE 202",
      },
    ],
  },
  F107: {
    name: "F107",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "287 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "29 ACC 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "30 ACC 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "288 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "86 STT 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "87 MTH 204",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "88 MTH 106",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "28 ACC 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "32 ACC 428",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "89 STT 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "90 MTH 204",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "287 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "29 ACC 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "30 ACC 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "288 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "86 STT 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "87 MTH 204",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "88 MTH 106",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "28 ACC 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "32 ACC 428",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "89 STT 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "90 MTH 204",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "287 ENG 202",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "29 ACC 202",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "30 ACC 411",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "288 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "86 STT 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "87 MTH 204",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "88 MTH 106",
      },
    ],
  },
  F109: {
    name: "F109",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "307 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "308 PHL 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "79 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "309 SOS 102",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "65 MTH 104",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "66 MTH 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "67 MTH 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "214 SWE 401",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "57 MTH 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "68 MTH 104",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "532 LAW 229",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "307 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "308 PHL 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "79 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "309 SOS 102",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "65 MTH 104",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "66 MTH 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "67 MTH 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "214 SWE 401",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "57 MTH 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "68 MTH 104",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "532 LAW 229",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "307 PSY 101",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "308 PHL 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "79 MTH 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "309 SOS 102",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "65 MTH 104",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "66 MTH 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "67 MTH 101",
      },
    ],
  },
  F203: {
    name: "F203",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "75 MGT 300",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "99 MGT 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "76 BUS 401",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "100 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "620 MGT 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "73 MGT 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "115 MGT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "102 MGT 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "109 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "580 LAW 118",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "75 MGT 300",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "99 MGT 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "76 BUS 401",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "100 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "620 MGT 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "73 MGT 301",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "115 MGT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "102 MGT 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "109 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "580 LAW 118",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "75 MGT 300",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "99 MGT 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "76 BUS 401",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "100 MGT 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "620 MGT 101",
      },
    ],
  },
  F205: {
    name: "F205",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "362 LAW 324 | 539 LAW 444",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "577 LAW 301",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "592 LAW 308",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "364 LAW 334",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "71 MGT 301",
      },
    ],
    monday: [
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "74 BUS 385",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "567 LAW 304 | 568 LAW 216",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "362 LAW 324 | 539 LAW 444",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "577 LAW 301",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "592 LAW 308",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "364 LAW 334",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "71 MGT 301",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "436 IEG 345",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "437 IEG 345",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "74 BUS 385",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "567 LAW 304 | 568 LAW 216",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "362 LAW 324 | 539 LAW 444",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "577 LAW 301",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "592 LAW 308",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "364 LAW 334",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "71 MGT 301",
      },
    ],
  },
  F207: {
    name: "F207",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "608 CIS 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
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
        timeEnd: { hour: 14, minute: 20 },
        courseName: "58 BUS 304",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "425 IEG 312",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "618 BUS 401",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "289 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "290 ENG 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "291 ENG 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "411 ENR 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "412 ENR 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "415 IEG 321",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "58 BUS 304",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 50 },
        courseName: "425 IEG 312",
      },
      {
        timeStart: { hour: 8, minute: 50 },
        timeEnd: { hour: 9, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 0 },
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
        courseName: "618 BUS 401",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "289 ENG 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "290 ENG 201",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "291 ENG 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "608 CIS 202",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "414 IEG 321",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "58 BUS 304",
      },
    ],
  },
  F209: {
    name: "F209",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "370 LAW 313",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "574 LAW 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "333 LAW 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "302 PSY 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "172 CIS 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "358 LAW 332",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "570 LAW 117",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "462 IEG 311",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "177 CIS 103",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "563 SOS 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "370 LAW 313",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "574 LAW 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "333 LAW 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "302 PSY 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "172 CIS 103",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "358 LAW 332",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "570 LAW 117",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 8, minute: 50 },
        courseName: "462 IEG 311",
      },
      {
        timeStart: { hour: 8, minute: 50 },
        timeEnd: { hour: 9, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "463 IEG 311",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "563 SOS 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "370 LAW 313",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "574 LAW 201",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "333 LAW 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "302 PSY 101",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "358 LAW 332",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "570 LAW 117",
      },
    ],
  },
  G018: {
    name: "G018",
    sunday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "562 ECL 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "562 ECL 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "562 ECL 101",
      },
    ],
    wednesday: null,
    thursday: null,
  },
  G116: {
    name: "G116",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "279 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "281 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "123 PHY 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "110 ECL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "97 PHY 203 | 126 PHY 203",
      },
    ],
    monday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "117 ECL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "96 ENR 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "101 PHY 203",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "210 SWE 312",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "203 CIS 443",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "279 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "281 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "123 PHY 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "110 ECL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "97 PHY 203 | 126 PHY 203",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "112 CHM 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "117 ECL 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "96 ENR 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "101 PHY 203",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "607 SWE 312",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "279 ENG 101",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "281 ENG 101",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "123 PHY 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "110 ECL 101",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "97 PHY 203 | 126 PHY 203",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "112 CHM 101",
      },
    ],
  },
  G118: {
    name: "G118",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "104 PHY 102",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 8, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "203 CIS 443",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "92 STT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "211 NES 424",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "91 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "504 CIS 316",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "192 CIS 381",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "204 CIS 304",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "208 CIS 351",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "105 PHY 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "93 STT 203",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "205 NES 443",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "212 NES 483",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "206 NES 342",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "94 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "591 LAW 328",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "107 PHY 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "184 SWE 300",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "213 CIS 383",
      },
      {
        timeStart: { hour: 15, minute: 50 },
        timeEnd: { hour: 16, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 0 },
        timeEnd: { hour: 17, minute: 50 },
        courseName: "636 IEG 322",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "449 IEG 303",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 8, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "104 PHY 102",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "92 STT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "211 NES 424",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "91 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "504 CIS 316",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "192 CIS 381",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "204 CIS 304",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "208 CIS 351",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "105 PHY 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "93 STT 203",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "205 NES 443",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "624 IEG 302",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "212 NES 483",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "206 NES 342",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "94 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "591 LAW 328",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "107 PHY 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "184 SWE 300",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "213 CIS 383",
      },
      {
        timeStart: { hour: 15, minute: 50 },
        timeEnd: { hour: 16, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 0 },
        timeEnd: { hour: 17, minute: 50 },
        courseName: "637 IEG 322",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "104 PHY 102",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "92 STT 102",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "211 NES 424",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "91 STT 203",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "504 CIS 316",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "624 IEG 302",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "204 CIS 304",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "208 CIS 351",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "105 PHY 103",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "93 STT 203",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "205 NES 443",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 17, minute: 20 },
        courseName: "636 IEG 322",
      },
    ],
  },
  G122: {
    name: "G122",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "199 NES 341",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "193 NES 221",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "217 SWE 322",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "195 CIS 386",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "518 CIS 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "201 NES 212",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "179 SWE 321",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "196 NES 482",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "195 CIS 386",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "201 NES 212",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "179 SWE 321",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "199 NES 341",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "193 NES 221",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "217 SWE 322",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "195 CIS 386",
      },
    ],
  },
  G216: {
    name: "G216",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "292 IAR 412",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "313 ARC 314",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "282 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "610 SWE 202",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "215 SWE 411",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "310 PHL 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "311 PSY 101",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "292 IAR 412",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "313 ARC 314",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "282 ENG 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "215 SWE 411",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "310 PHL 101",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "311 PSY 101",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "293 ARC 312",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "282 ENG 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "610 SWE 202",
      },
    ],
  },
  G218: {
    name: "G218",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "441 IEG 323",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "284 ARC 214",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "303 PHL 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "304 PSY 101",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "286 ARC 214",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "295 IAR A 423",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "340 LAW 343",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "442 IEG 323",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "284 ARC 214",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "303 PHL 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "304 PSY 101",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "286 ARC 214",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "295 IAR A 423",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "340 LAW 343",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "441 IEG 323",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "303 PHL 101",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "304 PSY 101",
      },
    ],
  },
  G220: {
    name: "G220",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "198 NES 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "278 ARC 213",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "297 ARC 313",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "280 ARC 213",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "455 IEG 351",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "622 IEG 201",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "422 IEG 302",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "198 NES 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "278 ARC 213",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "297 ARC 313",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "280 ARC 213",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "423 IEG 302",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "198 NES 322",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "625 IEG 302",
      },
    ],
  },
  G222: {
    name: "G222",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "274 ARC 216",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "275 MEC 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "420 IEG 431",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "276 ARC 315",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "621 IEG 201",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 12, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "454 IEG 351",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "277 ARC 216",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 10, minute: 50 },
        courseName: "274 ARC 216",
      },
      {
        timeStart: { hour: 10, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "275 MEC 103",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "419 IEG 431",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "276 ARC 315",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 11, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "454 IEG 351",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "277 ARC 216",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "456 MEG 211",
      },
      {
        timeStart: { hour: 16, minute: 20 },
        timeEnd: { hour: 16, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 16, minute: 30 },
        timeEnd: { hour: 17, minute: 20 },
        courseName: "457 MEG 211",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "646 ARC 216",
      },
    ],
  },
  H117: {
    name: "H117",
    sunday: [
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "617 CIS 201",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "98 PHY 203",
      },
    ],
    monday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "108 PHY 103",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "106 PHY 103",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 11, minute: 0 },
        timeEnd: { hour: 12, minute: 50 },
        courseName: "623 IEG 201",
      },
      {
        timeStart: { hour: 12, minute: 50 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "103 PHY 203",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "124 PHY 103",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "127 PHY 203",
      },
    ],
  },
  H119: {
    name: "H119",
    sunday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 9, minute: 20 },
        courseName: "450 IEG 303",
      },
      {
        timeStart: { hour: 9, minute: 20 },
        timeEnd: { hour: 9, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "449 IEG 303",
      },
    ],
    monday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "427 IEG 342",
      },
      {
        timeStart: { hour: 13, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "429 IEG 342",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "443 IEG 323",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 10, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 30 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "200 NES 341",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 12, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 12, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "194 NES 221",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "197 NES 482",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 10, minute: 20 },
        courseName: "451 IEG 303",
      },
      {
        timeStart: { hour: 10, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "267 NES 485",
      },
    ],
  },
  H217: {
    name: "H217",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "272 ARC 212",
      },
    ],
    monday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "438 IEG 345",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "273 ARC 212",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "433 IEG 341",
      },
      {
        timeStart: { hour: 14, minute: 50 },
        timeEnd: { hour: 15, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "434 IEG 341",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 50 },
        courseName: "272 ARC 212",
      },
      {
        timeStart: { hour: 11, minute: 50 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 17, minute: 20 },
        courseName: "466 IEG 450",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 8, minute: 0 },
        timeEnd: { hour: 9, minute: 50 },
        courseName: "521 CIS 201",
      },
      {
        timeStart: { hour: 9, minute: 50 },
        timeEnd: { hour: 10, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 10, minute: 0 },
        timeEnd: { hour: 12, minute: 20 },
        courseName: "273 ARC 212",
      },
      {
        timeStart: { hour: 12, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "433 IEG 341",
      },
      {
        timeStart: { hour: 13, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "435 IEG 341",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "418 IEG 301",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 14, minute: 20 },
        courseName: "467 IEG 450",
      },
      {
        timeStart: { hour: 14, minute: 20 },
        timeEnd: { hour: 14, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "468 IEG 450",
      },
    ],
  },
  H219: {
    name: "H219",
    sunday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "270 ARCH 113",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "421 IEG 431",
      },
    ],
    monday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "271 ARCH 113",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 14, minute: 50 },
        courseName: "444 IEG 201",
      },
    ],
    tuesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "270 ARCH 113",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 11, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 11, minute: 30 },
        timeEnd: { hour: 13, minute: 20 },
        courseName: "432 IEG 400",
      },
      {
        timeStart: { hour: 13, minute: 20 },
        timeEnd: { hour: 13, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 30 },
        timeEnd: { hour: 15, minute: 20 },
        courseName: "461 IEG 332",
      },
      {
        timeStart: { hour: 15, minute: 20 },
        timeEnd: { hour: 15, minute: 30 },
        courseName: "",
      },
      {
        timeStart: { hour: 15, minute: 30 },
        timeEnd: { hour: 16, minute: 20 },
        courseName: "459 IEG 332",
      },
    ],
    wednesday: [
      {
        timeStart: { hour: 9, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "271 ARCH 113",
      },
      {
        timeStart: { hour: 11, minute: 20 },
        timeEnd: { hour: 13, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 13, minute: 0 },
        timeEnd: { hour: 13, minute: 50 },
        courseName: "445 IEG 201",
      },
      {
        timeStart: { hour: 13, minute: 50 },
        timeEnd: { hour: 14, minute: 0 },
        courseName: "",
      },
      {
        timeStart: { hour: 14, minute: 0 },
        timeEnd: { hour: 15, minute: 50 },
        courseName: "446 IEG 201",
      },
    ],
    thursday: [
      {
        timeStart: { hour: 8, minute: 30 },
        timeEnd: { hour: 11, minute: 20 },
        courseName: "413 ENR 201",
      },
      {
        timeStart: { hour: 11, minute: 20 },
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
        courseName: "460 IEG 332",
      },
    ],
  },
};
