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
  place: Place,
  date: Moment | null | undefined,
  time: Moment | null | undefined,
  setTimezone: Function
) => {
  useEffect(() => {
    async function fetch() {
      try {
        if (date && time) {
          const clonedDate = date.clone();
          const timestamp = clonedDate
            .hours(time.hours())
            .minutes(time.minutes())
            .seconds(time.second())
            .unix();
          const timezone = await fetchTimezone(place.id, timestamp);
          setTimezone(timezone);
        }
      } catch (e) {
        console.error(e);
      }
    }

    if (place && date && time) {
      fetch();
    }
  }, [place, time, setTimezone, date]);
};
