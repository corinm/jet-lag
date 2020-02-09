import moment from "moment";

import { applyOffset, convertArrivalTime } from "./helpers";

describe("helpers", () => {
  describe("applyOffset", () => {
    it("should return 01:00 when given 00:00 and an offset of 60", () => {
      const time = moment("00:00", "HH:mm");
      const utcOffsetInMinutes = 60;
      const newTime = applyOffset(time, utcOffsetInMinutes);
      expect(newTime).toEqual("01:00");
    });
  });

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
});
