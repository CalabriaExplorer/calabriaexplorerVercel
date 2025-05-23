
import { useState, useEffect } from 'react';

type Audience = 'tourist' | 'relocator' | null;

export const useAudience = () => {
  const [audience, setAudience] = useState<Audience>(() => {
    const savedAudience = localStorage.getItem('calabria-audience');
    return (savedAudience as Audience) || null;
  });

  useEffect(() => {
    if (audience) {
      localStorage.setItem('calabria-audience', audience);
    }
  }, [audience]);

  const resetAudience = () => {
    localStorage.removeItem('calabria-audience');
    setAudience(null);
  };

  return { audience, setAudience, resetAudience };
};
