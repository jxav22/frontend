import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import MobileConnectionPage from "./MobileConnectionPage/MobileConnectionPage";
import ConnectionPage from "./ConnectionPage/ConnectionPage";
import { socket } from "@/util/socket";

function ResponsiveConnectionPage({stats} : {stats: {queueVenter: number, queueListener: number}}) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentState, setCurrentState] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectVenter = () => {
    setCurrentState("venter");
    socket.emit("queue", "VENTER");
  };

  const handleSelectListener = () => {
    setCurrentState("listener");
    socket.emit("queue", "LISTENER");
  };

  return isMobile ? (
    <MobileConnectionPage
      onSelectVenter={handleSelectVenter}
      onSelectListener={handleSelectListener}
      currentState={currentState}
      stats={stats}
    />
  ) : (
    <ConnectionPage
      onSelectVenter={handleSelectVenter}
      onSelectListener={handleSelectListener}
      currentState={currentState}
      stats={stats}
    />
  );
}

export default ResponsiveConnectionPage;
