import styles from "./styles/Home.module.scss";
import PageWrapper from "../utilities/PageWrapper";
import Chat from "./herocards/Chat";
import Dash from "./herocards/Dash";
import Shop from "./herocards/Shop";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const Home = () => {
  const [heroCardNo, setHeroCardNo] = useState(0);

  useInterval(() => {
    if (heroCardNo !== 2) {
      setHeroCardNo(heroCardNo + 1);
    } else {
      setHeroCardNo(0);
    }
  }, 5000);

  return (
    <PageWrapper>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h3>Hello, I'm Hasala</h3>
          {/* <h1><div><div>U</div><div>I</div>&nbsp;&&nbsp;<div>U</div><div>X</div>&nbsp;</div>Designer,</h1> */}
          <h1>Full Stack Developer, </h1>
          <h4>
            <span>
              <span>U</span>
              <span>I</span>&nbsp;&&nbsp;<span>U</span>
              <span>X</span>&nbsp;
            </span>
            Designer, & in general, a nerd.
          </h4>
        </div>
        <div className={styles.heroAnim}>
          <div className={styles.heroCard}>
            <AnimatePresence mode="wait">
              {heroCardNo === 0 && <Chat />}
              {heroCardNo === 1 && <Dash />}
              {heroCardNo === 2 && <Shop />}
              {/* {heroCard[heroCardNo]} */}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
