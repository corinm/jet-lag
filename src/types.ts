import { Moment } from "moment";

export interface Place {
  name: string;
  id: string;
}

export interface SetDate {
  (time: Moment | null | undefined): void;
}
export interface SetTime {
  (time: Moment): void;
}

export interface SetPlace {
  (place: Place): void;
}

export interface TimezoneData {
  dstOffset: number;
  rawOffset: number;
  timeZoneId: string; //"Europe/London"
  timeZoneName: string; //"Greenwich Mean Time"
}
