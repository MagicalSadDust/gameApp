import { useState, useEffect } from 'react';

const useTabManager = () => {
  const [isOutdated, setIsOutdated] = useState(false);
  const LAST_ACTIVE_KEY = 'lastActiveTab';
  const currentTabTime = Date.now(); 

  useEffect(() => {
    localStorage.setItem(LAST_ACTIVE_KEY, currentTabTime);

    const handleStorageChange = (event) => {
      if (event.key === LAST_ACTIVE_KEY) {
        const lastActiveTime = Number(localStorage.getItem(LAST_ACTIVE_KEY));

        if (lastActiveTime !== currentTabTime) {
          setIsOutdated(true);
        }
      }
    };

    const lastActiveTime = Number(localStorage.getItem(LAST_ACTIVE_KEY));
    if (lastActiveTime && lastActiveTime !== currentTabTime) {
      setIsOutdated(true);
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [currentTabTime]);

  return isOutdated;
};

export default useTabManager;

