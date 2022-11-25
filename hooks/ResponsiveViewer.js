import { useEffect, useState } from "react";

const useResponsiveViewer = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  return isMobile;
};

export default useResponsiveViewer;
