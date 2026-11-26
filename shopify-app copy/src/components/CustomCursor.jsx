"use client";
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    // Ensure any previously attached custom cursor class is cleaned up
    document.documentElement.classList.remove('custom-cursor-active');
  }, []);

  return null;
}
