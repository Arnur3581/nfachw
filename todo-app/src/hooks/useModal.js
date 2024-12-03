import { useState } from "react";

const useModal = (initialMode = false) => {
  const [mode, setMode] = useState(initialMode);
  const toggle = () => setMode((prev) => !prev);

  return [mode, toggle];
};

export { useModal };
