import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import MobileConnectionPage from "../MobileConnectionPage/MobileConnectionPage";
import ConnectionPage from "../ConnectionPage/ConnectionPage";

function ResponsiveConnectionPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentState, setCurrentState] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectVenter = () => {
    setCurrentState("venter");
  };

  const handleSelectListener = () => {
    setCurrentState("listener");
  };

  return isMobile ? (
    <MobileConnectionPage
      onSelectVenter={handleSelectVenter}
      onSelectListener={handleSelectListener}
      currentState={currentState}
    />
  ) : (
    <ConnectionPage
      onSelectVenter={handleSelectVenter}
      onSelectListener={handleSelectListener}
      currentState={currentState}
    />
  );
}

export default ResponsiveConnectionPage;
