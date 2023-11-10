import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./ScrollRouter.module.css";
import LandingPage from "../LandingPage/LandingPage";
import DevMessagePage from "../DevMessagePage/DevMessagePage";
import LegalPage from "../LegalPage/LegalPage";
import ConnectionPage from "../ResponsiveConnectionPage/ConnectionPage/ConnectionPage";
import ResponsiveConnectionPage from "../ResponsiveConnectionPage/ResponsiveConnectionPage";
import ChatPage from "../ChatPage/ChatPage";
import ChatRouter from "../ChatRouter/ChatRouter";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function ScrollRouter() {
  const [height, width] = useWindowSize();
  const [activePage, setActivePage] = useState<number>(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleNextPage = () => {
    setActivePage(activePage + 1);
  };

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      containerRef.current.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  }, [activePage]);

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      containerRef.current.scrollTo({
        top: scrollHeight,
        behavior: "auto",
      });
    }
  }, [height, width]);

  const pages = [
    <LandingPage key={0} onNextPage={handleNextPage} />,
    <DevMessagePage key={1} onNextPage={handleNextPage} />,
    <LegalPage key={2} onNextPage={handleNextPage} />,
    <ChatRouter key={3} />,
  ];

  return (
    <div className={styles.container} ref={containerRef}>
      {pages.map((page, index) =>
        index === activePage - 1 || index === activePage ? (
          <div key={index}>{page}</div>
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
}

export default ScrollRouter;
