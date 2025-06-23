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
      
      const delta = e.deltaY * 0.005; // Increased multiplier for faster scrolling
      
      setInputValue(current => {
        const newValue = Math.max(0.5, Math.min(5, current + delta));
        return Number(newValue.toFixed(2));
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