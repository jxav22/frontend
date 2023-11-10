import { useState, useEffect } from "react";

function useLocalStorage(key: any, initialValue: any) {
  // Get initial value from localStorage, if available
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value of the sessionStorage key
  const [value, setValue] = useState(initial);

  // Update sessionStorage whenever the state changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;