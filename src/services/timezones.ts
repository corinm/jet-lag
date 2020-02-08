import axios from "axios";

import { TimezoneData } from "../types";

export const fakeFetchTimezone = async (
  placeId: string
): Promise<TimezoneData> => {
  return {
    dstOffset: 0,
    rawOffset: 0,
    timeZoneId: "Europe/London",
    timeZoneName: "Greenwich Mean Time"
  };
};

export const fetchTimezone = async (placeId: string): Promise<TimezoneData> => {
  try {
    const { data } = await axios.get(
      `https://us-central1-jetlag-d62bc.cloudfunctions.net/timezone?place=${placeId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
