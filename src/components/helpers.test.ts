import moment from "moment";

import {
  convertArrivalTime,
  convertDepartureTime,
  calculateFlightDuration
} from "./helpers";

describe("convertArrivalTime", () => {
  it("should return 06:00 for NY 23:00 -> Lon 11:00 ", () => {
    const arrivalTimeLocal = moment("11:00", "HH:mm");
    const departureOffset = -5 * 60;
    const arrivalOffset = 0 * 60;
    const converted = convertArrivalTime(
      arrivalTimeLocal,
      departureOffset,
      arrivalOffset
    );

    expect(converted?.format("HH:mm")).toEqual("06:00");
  });

  it("should return 23:00 for Lon 11:00 -> LV 15:00", () => {
    const arrivalTimeLocal = moment("15:00", "HH:mm");
    const departureOffset = 0 * 60;
    const arrivalOffset = -8 * 60;
    const converted = convertArrivalTime(
      arrivalTimeLocal,
      departureOffset,
      arrivalOffset
    );

    expect(converted?.format("HH:mm")).toEqual("23:00");
  });

  it("should return 00:30 for Lon 09:10 -> KL 08:30", () => {
    const arrivalTimeLocal = moment("08:30", "HH:mm");
    const departureOffset = 0 * 60;
    const arrivalOffset = 8 * 60;
    const converted = convertArrivalTime(
      arrivalTimeLocal,
      departureOffset,
      arrivalOffset
    );

    expect(converted?.format("HH:mm")).toEqual("00:30");
  });
});

describe("convertDepartureTime", () => {
  it("should return 04:00 for NY 23:00 -> Lon 11:00 ", () => {
    const departureTimeLocal = moment("23:00", "HH:mm");
    const departureOffset = -5 * 60;
    const arrivalOffset = 0 * 60;
    const converted = convertDepartureTime(
      departureTimeLocal,
      departureOffset,
      arrivalOffset
    );

    expect(converted?.format("HH:mm")).toEqual("04:00");
  });

  it("should return 03:00 for Lon 11:00 -> LV 15:00", () => {
    const departureTimeLocal = moment("11:00", "HH:mm");
    const departureOffset = 0 * 60;
    const arrivalOffset = -8 * 60;
    const converted = convertDepartureTime(
      departureTimeLocal,
      departureOffset,
      arrivalOffset
    );

    expect(converted?.format("HH:mm")).toEqual("03:00");
  });

  it("should return 17:10 for Lon 09:10 -> KL 08:30", () => {
    const departureTimeLocal = moment("09:10", "HH:mm");
    const departureOffset = 0 * 60;
    const arrivalOffset = 8 * 60;
    const converted = convertDepartureTime(
      departureTimeLocal,
      departureOffset,
      arrivalOffset
    );

    expect(converted?.format("HH:mm")).toEqual("17:10");
  });
});

describe("calculateFlightDuration", () => {
  it("should return 10 hours and 30 minutes for a 10.5 hour flight", () => {
    const departDate = moment("1970/01/01", "YYYY/MM/dd");
    const departTime = moment("00:00", "HH:mm");
    const arriveDate = moment("1970/01/01", "YYYY/MM/dd");
    const arriveTime = moment("10:30", "HH:mm");
    const duration = calculateFlightDuration(
      departDate,
      departTime,
      arriveDate,
      arriveTime
    );
    expect(duration).toEqual("10 hours and 30 minutes");
  });

  it("should return 45 minutes for a 0.75 hour flight", () => {
    const departDate = moment("1970/01/01", "YYYY/MM/dd");
    const departTime = moment("00:00", "HH:mm");
    const arriveDate = moment("1970/01/01", "YYYY/MM/dd");
    const arriveTime = moment("00:45", "HH:mm");
    const duration = calculateFlightDuration(
      departDate,
      departTime,
      arriveDate,
      arriveTime
    );
    expect(duration).toEqual("45 minutes");
  });
});
