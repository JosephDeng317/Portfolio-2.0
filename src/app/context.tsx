"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  useCallback,
} from "react";

type SliderContextType = {
  inputValue: number;
  setInputValue: (value: number) => void;
};

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState(0);

  const COOLDOWN = 1000; // timeout in ms
  const timeoutRef = useRef(false);

  const sliderRef = useRef<HTMLInputElement | null>(null); // Type the ref for an HTML input element

  function decrease() {
    if (sliderRef.current) {
      const value = parseInt(sliderRef.current.value, 10); // Ensure the value is a number
      if (value > 1) {
        setInputValue(value - 1);
      }
    }
  }

  function increase() {
    if (sliderRef.current) {
      const value = parseInt(sliderRef.current.value, 10); // Ensure the value is a number
      if (value < 6) {
        setInputValue(value + 1);
      }
    }
  }

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (timeoutRef.current) return;
      if (event.deltaY < 0) {
        // Scroll up - trigger previous animation
        decrease();
      } else if (event.deltaY > 0) {
        // Scroll down - trigger next animation
        increase();
      }

      // Set the timeout flag to true to prevent multiple triggers
      timeoutRef.current = true;

      // Clear the timeout flag after a delay (e.g., 500ms)
      setTimeout(() => {
        timeoutRef.current = false;
      }, COOLDOWN);
    };

    // Add event listener to the window for the `wheel` event
    window.addEventListener("wheel", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [decrease, increase]);

  return (
    <SliderContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSlider must be used within a SliderProvider");
  }
  return context;
};
