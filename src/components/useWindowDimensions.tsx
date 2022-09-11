import { useEffect, useState } from "react";

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowDimensions(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
