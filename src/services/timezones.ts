import axios from "axios";

import { Timezone } from "../types";

export const fakeFetchTimezone = async (
  placeId: string,
  timestamp: number
): Promise<Timezone> => {
  if (placeId === "1") {
    return {
      dstOffset: 0,
      rawOffset: -5 * 60 * 60,
      utcOffset: -5 * 60,
      timeZoneId: "?/?",
      timeZoneName: "Eastern Standard Time"
    };
  } else if (placeId === "2") {
    return {
      dstOffset: 0,
      rawOffset: 0,
      utcOffset: 0,
      timeZoneId: "Europe/London",
      timeZoneName: "Greenwich Mean Time"
    };
  } else {
    return {
      dstOffset: 0,
      rawOffset: 0,
      utcOffset: 0,
      timeZoneId: "Test",
      timeZoneName: "Test"
    };
  }
};

export const fetchTimezone = async (
  placeId: string,
  timestamp: number
): Promise<Timezone> => {
  try {
    const { data } = await axios.get(
      `https://us-central1-jetlag-d62bc.cloudfunctions.net/timezone?place=${placeId}&timestamp=${timestamp}`
    );
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
