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


export function useWindowScroll() {

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return {
    scrollToTop,
    showButton,
    setShowButton,
    handleScroll
  }
}