import moment, { Moment } from "moment";

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

export const calculateFlightDuration = (
  departDate: Moment | null | undefined,
  departTime: Moment | null | undefined,
  arriveDate: Moment | null | undefined,
  arriveTime: Moment | null | undefined
): string => {
  const depart = departDate
    ?.clone()
    .hours(departTime?.hours() || 0)
    .minutes(departTime?.minutes() || 0)
    .seconds(departTime?.second() || 0);
  const arrive = arriveDate
    ?.clone()
    .hours(arriveTime?.hours() || 0)
    .minutes(arriveTime?.minutes() || 0)
    .seconds(arriveTime?.second() || 0);

  const duration = moment.duration(arrive?.diff(depart));
  const hours = duration.hours();
  const minutes = duration.minutes();

  if (hours) {
    return `${hours} hours and ${minutes} minutes`;
  } else {
    return `${minutes} minutes`;
  }
};
