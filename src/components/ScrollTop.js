import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTop = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
