import { useEffect, useState } from "react";

export const useDebounce = (value, timer = 500) => {
  const [debounceValue, setDebounceValue] = useState();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounceValue(value);
    }, timer);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, timer]);

  return debounceValue;
};
