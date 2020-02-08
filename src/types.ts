import { Moment } from "moment";

export interface Place {
  name: string;
  id: string;
}

export interface SetTime {
  (time: Moment): void;
}

export interface SetPlace {
  (place: string): void;
}
