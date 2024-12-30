"use client";

import { useEffect, useRef } from "react";
import { useSlider } from "../context";

export default function useScroll() {
  const COOLDOWN = 1000; // timeout in ms
  const timeoutRef = useRef(false);

  const { handleScroll } = useSlider();

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (timeoutRef.current) return;
      handleScroll(event.deltaY);
    };

    // Set the timeout flag to true to prevent multiple triggers
    timeoutRef.current = true;

    // Clear the timeout flag after a delay (e.g., 500ms)
    setTimeout(() => {
      timeoutRef.current = false;
    }, COOLDOWN);

    window.addEventListener("wheel", onWheel);
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [handleScroll]);
}
