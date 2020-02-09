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
  setPlaces: Function,
  setSearching: Function
) => {
  const debouncedSearchString = useDebounce(searchString, 500);

  useEffect(() => {
    async function search() {
      try {
        const places = await searchCity(debouncedSearchString);
        setSearching(false);
        setPlaces(places);
      } catch (e) {
        setSearching(false);
        setPlaces([]);
      }
    }

    if (debouncedSearchString === "") {
      setSearching(false);
      setPlaces([]);
    } else {
      setSearching(true);
      search();
    }
  }, [debouncedSearchString, setPlaces, setSearching]);
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
