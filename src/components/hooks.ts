import { useState, useEffect } from "react";

import { fakeSearchCity as searchCity } from "../services/cities";

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
