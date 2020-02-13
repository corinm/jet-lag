import moment, { Moment } from "moment";

export const convertArrivalTime = (
  arrivalTimeLocal: Moment | null,
  departureOffset: number,
  arrivalOffset: number
): Moment | null => {
  return (
    arrivalTimeLocal
      ?.clone()
      .add(departureOffset / 60, "hours")
      .subtract(arrivalOffset / 60, "hours") || null
  );
};

export const convertDepartureTime = (
  departureTimeLocal: Moment | null,
  departureOffset: number,
  arrivalOffset: number
): Moment | null => {
  return (
    departureTimeLocal
      ?.clone()
      .subtract(departureOffset / 60, "hours")
      .add(arrivalOffset / 60, "hours") || null
  );
};

const combineDateWithTime = (
  date: Moment | null,
  time: Moment | null
): Moment | null => {
  return (
    date
      ?.clone()
      .hours(time?.hours() || 0)
      .minutes(time?.minutes() || 0)
      .seconds(time?.second() || 0) || null
  );
};

export const calculateFlightDuration = (
  departDate: Moment | null,
  departTime: Moment | null,
  arriveDate: Moment | null,
  arriveTime: Moment | null,
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

  if (!depart) {
    return "";
  }

  const duration = moment.duration(arriveAdjusted?.diff(depart));
  const hours = duration.hours();
  const minutes = duration.minutes();

  if (hours) {
    return `${hours} hours and ${minutes} minutes`;
  } else {
    return `${minutes} minutes`;
  }
};
