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

const combineDateWithTime = (
  date: Moment | null | undefined,
  time: Moment | null | undefined
): Moment | undefined => {
  return date
    ?.clone()
    .hours(time?.hours() || 0)
    .minutes(time?.minutes() || 0)
    .seconds(time?.second() || 0);
};

export const calculateFlightDuration = (
  departDate: Moment | null | undefined,
  departTime: Moment | null | undefined,
  arriveDate: Moment | null | undefined,
  arriveTime: Moment | null | undefined,
  departOffset: number | undefined,
  arriveOffset: number | undefined
): string => {
  const depart = combineDateWithTime(departDate, departTime);
  const arrive = combineDateWithTime(arriveDate, arriveTime);
  const arriveAdjusted = convertArrivalTime(
    arrive,
    departOffset || 0,
    arriveOffset || 0
  );

  const duration = moment.duration(arriveAdjusted?.diff(depart));
  const hours = duration.hours();
  const minutes = duration.minutes();

  if (hours) {
    return `${hours} hours and ${minutes} minutes`;
  } else {
    return `${minutes} minutes`;
  }
};
