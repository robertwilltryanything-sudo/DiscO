import { useState, useEffect } from 'react';

/**
 * A custom hook that debounces a value.
 * @param value The value to debounce.
 * @param delay The delay in milliseconds.
 * @returns The debounced value.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes (e.g., user is still typing)
    // or if the component unmounts.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}
