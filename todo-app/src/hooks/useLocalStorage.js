import { useEffect, useState } from "react";

const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      alert("Перезагрузите страницу или проверьте интеренет соединение");
      return value;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};

export { useLocalStorage };
