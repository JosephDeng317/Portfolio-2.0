"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type SliderContextType = {
  inputValue: number;
  setInputValue: (value: number) => void;
};

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState(0);

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
