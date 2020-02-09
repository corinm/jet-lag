import axios from "axios";

import { Timezone } from "../types";

export const fakeFetchTimezone = async (
  placeId: string,
  timestamp: number
): Promise<Timezone> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (placeId === "1") {
        resolve({
          dstOffset: 0,
          rawOffset: -5 * 60 * 60,
          utcOffset: -5 * 60,
          timeZoneId: "?/?",
          timeZoneName: "Eastern Standard Time"
        });
      } else if (placeId === "2") {
        resolve({
          dstOffset: 0,
          rawOffset: 0,
          utcOffset: 0,
          timeZoneId: "Europe/London",
          timeZoneName: "Greenwich Mean Time"
        });
      } else {
        resolve({
          dstOffset: 0,
          rawOffset: 0,
          utcOffset: 0,
          timeZoneId: "Test",
          timeZoneName: "Test"
        });
      }
    }, 2000);
  });
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
