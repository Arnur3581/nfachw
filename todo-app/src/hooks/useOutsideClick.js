import { useEffect } from "react";

const useOutsideClick = (ref, handler, attached = true) => {
  useEffect(() => {
    if (!attached) return;

    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
      console.log("outside");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, handler, attached]);
};

export { useOutsideClick };
