import { Moment } from "moment";

export const applyOffset = (
  time: Moment | null | undefined,
  utcOffset: number
): string | undefined =>
  time
    ?.clone()
    ?.utcOffset(utcOffset)
    .format("HH:mm");

export const convertArrivalTime = (
  arrivalTimeLocal: Moment | null | undefined,
  departureOffset: number,
  arrivalOffset: number
): Moment | null | undefined => {
  return arrivalTimeLocal
    ?.clone()
    .add(departureOffset / 60, "hours")
    .subtract(arrivalOffset / 60, "hours");
};
