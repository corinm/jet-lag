import { useState, useEffect } from "react";
import { Moment } from "moment";

import { searchCity } from "../services/cities";
import { fetchTimezone } from "../services/timezones";
import { Place } from "../types";

// Source: https://usehooks.com/useDebounce/
export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useSearchLocation = (
  searchString: string,
  setPlaces: Function
) => {
  const debouncedSearchString = useDebounce(searchString, 500);

  useEffect(() => {
    async function search() {
      console.log(`Searching for ${debouncedSearchString}`);
      try {
        const places = await searchCity(debouncedSearchString);
        setPlaces(places);
      } catch (e) {
        setPlaces([]);
      }
    }

    if (debouncedSearchString === "") {
      setPlaces([]);
    } else {
      search();
    }
  }, [debouncedSearchString, setPlaces]);
};

export const useFetchTimezone = (
  departPlace: Place,
  departDate: Moment | null | undefined,
  departTime: Moment | null | undefined,
  setTimezone: Function
) => {
  useEffect(() => {
    async function fetch() {
      try {
        if (departDate && departTime) {
          const timestamp = departDate
            .hours(departTime.hours())
            .minutes(departTime.minutes())
            .seconds(departTime.second())
            .unix();

          const timezone = await fetchTimezone(departPlace.id, timestamp);
          setTimezone(timezone);
        }
      } catch (e) {
        console.error(e);
      }
    }

    if (departPlace && departDate && departTime) {
      fetch();
    }
  }, [departDate, departPlace, departTime, setTimezone]);
};
