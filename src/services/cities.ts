import axios from "axios";

import { Place } from "../types";

export const fakeSearchCity = async (input: string): Promise<Place[]> => {
  return [
    { name: "New York, USA", id: "1" },
    { name: "London, UK", id: "2" }
  ];
};

export const searchCity = async (input: string): Promise<Place[]> => {
  try {
    const { data } = await axios.get(
      `https://us-central1-jetlag-d62bc.cloudfunctions.net/cities?search=${input}`
    );
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
