import { useState, useEffect } from "react";
import { useDebugValue } from "react";

function useScreenSize(minWidth, maxWidth) {
  const [screenSize, setScreenSize] = useState("medium");

  const updateScreenSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < minWidth) {
      setScreenSize("small");
    } else if (windowWidth > maxWidth) {
      setScreenSize("big");
    } else {
      setScreenSize("medium");
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [minWidth, maxWidth]);

  useDebugValue(`Screen Size: ${screenSize}`);

  return screenSize;
}

export default useScreenSize;
