import axios from "axios";

export const fakeSearchCity = async (input: string): Promise<string[]> => {
  return ["London", "Los Angeles"];
};

export const searchCity = async (input: string): Promise<string[]> => {
  try {
    const res = await axios.get(
      `https://us-central1-jetlag-d62bc.cloudfunctions.net/cities?search=${input}`
    );

    if (!Array.isArray(res.data)) {
      throw new Error("res.data not an array");
    }

    const places = res.data;
    return places;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
