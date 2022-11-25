import { useEffect, useState } from "react";

const useResponsiveChecker = () => {
  const [isResponsive, setResponsive] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1080) {
      setResponsive(true);
    }
  }, []);
  return isResponsive;
};

export default useResponsiveChecker;
