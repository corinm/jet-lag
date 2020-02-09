import { Moment } from "moment";

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

export const convertDepartureTime = (
  departureTimeLocal: Moment | null | undefined,
  departureOffset: number,
  arrivalOffset: number
): Moment | null | undefined => {
  return departureTimeLocal
    ?.clone()
    .subtract(departureOffset / 60, "hours")
    .add(arrivalOffset / 60, "hours");
};
