import moment from "moment";

import { applyOffset } from "./helpers";

describe("helpers", () => {
  it("should return 01:00 when given 00:00 and an offset of 60", () => {
    const time = moment("00:00", "HH:mm");
    const utcOffsetInMinutes = 60;
    const newTime = applyOffset(time, utcOffsetInMinutes);
    expect(newTime).toEqual("01:00");
  });
});
