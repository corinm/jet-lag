import { Moment } from "moment";

export const applyOffset = (
  time: Moment | null | undefined,
  utcOffset: number
): string | undefined =>
  time
    ?.clone()
    ?.utcOffset(utcOffset)
    .format("HH:mm");
