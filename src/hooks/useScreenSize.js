import { useEffect, useState } from "react";

export function useScreenSize() {
  // Define breakpoints
  const breakpoints = {
    xxs: 400,
    xs: 767,
    smMin: 768,
    smMax: 991,
    mdMin: 992,
    mdMax: 1199,
  };

  // Function to get screen size label
  const getScreenSize = (width) => {
    if (width <= breakpoints.xxs) return "xxs";
    if (width <= breakpoints.smMax) return "xs";
    // if (width >= breakpoints.smMin && width <= breakpoints.smMax) return "sm";
    if (width >= breakpoints.mdMin && width <= breakpoints.mdMax) return "md";
    return "lg"; // default for anything larger
  };

  const [screenSize, setScreenSize] = useState(() => getScreenSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
