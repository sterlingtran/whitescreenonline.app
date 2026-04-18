import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item) as T;
      }
    } catch (error) {
      console.error(`Failed to read from localStorage [${key}]:`, error);
    }
    return initialValue;
  });

  // Re-read from localStorage when the key changes (e.g., navigating to a different tool)
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item) as T);
      } else {
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.error(`Failed to read from localStorage [${key}]:`, error);
    }
  }, [key, initialValue]);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to write to localStorage [${key}]:`, error);
    }
  };

  return [storedValue, setValue];
}
