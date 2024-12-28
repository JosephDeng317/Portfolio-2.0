"use client";

import React, { useEffect, useRef } from "react";
import { useSlider } from "./context";

function RangeSlider() {
  const { inputValue, setInputValue } = useSlider();
  const sliderRef = useRef<HTMLInputElement | null>(null); // Type the ref for an HTML input element

  function handleSliderInput() {
    if (sliderRef.current) {
      const value = parseInt(sliderRef.current.value, 10); // Ensure the value is a number
      setInputValue(value);
    }
  }

  useEffect(() => {
    handleSliderInput();
  }, [sliderRef]);

  return (
    <div className="flex justify-end pt-2">
      <div>
        {inputValue}
        <input
          id="default-range"
          type="range"
          ref={sliderRef} // Attach the ref to the input element
          onInput={handleSliderInput}
          value={inputValue}
          min={1}
          max={5}
          className="w-80 h-2 cursor-pointer accent-neutral-700 border-none bg-white"
        ></input>
      </div>
    </div>
  );
}

export default RangeSlider;
