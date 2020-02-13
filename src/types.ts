import { Moment } from "moment";

export interface Place {
  name: string;
  id: string;
}

export interface SetDate {
  (time: Moment | null): void;
}
export interface SetTime {
  (time: Moment): void;
}

export interface SetPlace {
  (place: Place): void;
}

export interface Timezone {
  dstOffset: number;
  rawOffset: number; // From UTC, in seconds
  utcOffset: number; // From UTC, in minutes
  timeZoneId: string; //"Europe/London"
  timeZoneName: string; //"Greenwich Mean Time"
}
