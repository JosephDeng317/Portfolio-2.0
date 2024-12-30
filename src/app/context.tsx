"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

type SliderContextType = {
  inputValue: number;
  setInputValue: (value: number) => void;
  handleScroll: (deltaY: number) => void;
};

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleScroll = useCallback((deltaY: number) => {
    if (deltaY < 0) {
      setInputValue((prev) => Math.max(prev - 1, 1)); // Scroll up
    } else if (deltaY > 0) {
      setInputValue((prev) => Math.min(prev + 1, 5)); // Scroll down
    }
  }, []);

  return (
    <SliderContext.Provider value={{ inputValue, setInputValue, handleScroll }}>
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
