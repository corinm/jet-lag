import axios from "axios";

import { TimezoneData } from "../types";

export const fakeFetchTimezone = async (
  placeId: string,
  timestamp: number
): Promise<TimezoneData> => {
  return {
    dstOffset: 0,
    rawOffset: 0,
    timeZoneId: "Europe/London",
    timeZoneName: "Greenwich Mean Time"
  };
};

export const fetchTimezone = async (
  placeId: string,
  timestamp: number
): Promise<TimezoneData> => {
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
