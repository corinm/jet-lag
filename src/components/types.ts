import { Moment } from "moment";

export interface SetTime {
  (time: Moment): void;
}

export interface SetPlace {
  (place: string): void;
}
