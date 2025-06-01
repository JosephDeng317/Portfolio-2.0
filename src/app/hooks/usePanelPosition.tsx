"use client";

import { useEffect, useState } from 'react';
import { useSlider } from '../context';

export const usePanelPosition = () => {
  const { inputValue, setInputValue } = useSlider();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      setScrolling(true);
      const delta = e.deltaY * 0.01;
      setInputValue((prev: number) => {
        const newValue = Math.max(1, Math.min(5, prev + delta));
        console.log(newValue);
        return newValue;
      });
      
      setTimeout(() => setScrolling(false), 150);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [setInputValue]);

  return {
    currentSection: Math.ceil(inputValue),
    progress: inputValue,
    isScrolling: scrolling
  };
};