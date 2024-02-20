import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>
};

export default ScrollToTop;