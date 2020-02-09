import moment from "moment";

import { convertArrivalTime, convertDepartureTime } from "./helpers";

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
});
