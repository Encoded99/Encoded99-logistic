import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'enableFontScaling';

type FontScaleContextType = {
  scalingEnabled: boolean;
  toggleScaling: () => void;
};

const FontScaleContext = createContext<FontScaleContextType>({
  scalingEnabled: true,
  toggleScaling: () => {},
});

export const useFontScaling = () => useContext(FontScaleContext);

export const FontScaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [scalingEnabled, setScalingEnabled] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value !== null) setScalingEnabled(value === 'true');
    });
  }, []);

  const toggleScaling = () => {
    const newValue = !scalingEnabled;
    setScalingEnabled(newValue);
    AsyncStorage.setItem(STORAGE_KEY, newValue.toString());
  };

  return (
    <FontScaleContext.Provider value={{ scalingEnabled, toggleScaling }}>
      {children}
    </FontScaleContext.Provider>
  );
};
