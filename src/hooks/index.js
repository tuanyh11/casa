import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebounced, setIsDebounced] = useState(false);

  useEffect(() => {
    setIsDebounced(value ? true : false);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebounced( false)
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return {
    value: debouncedValue,
    isDebounced
  };
}


export function useClickInsideOutside(targetRef, callbackInside = () => {}, callbackOutside = () => {}) {
  useEffect(() => {
    function handleClick(event) {
      if (targetRef.current && targetRef.current.contains(event.target)) {
        callbackInside();
      } else {
        callbackOutside();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [targetRef, callbackInside, callbackOutside]);
}
