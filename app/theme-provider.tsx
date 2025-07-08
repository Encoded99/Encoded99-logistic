import React, { createContext, useContext } from 'react';
import { MD3DarkTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#f57c00',         // Vibrant orange
    secondary: '#8c9eff',       // Soft light orange
    background: '#0d1b2a',      // Deep navy blue
    surface: '#1b263b',         // Lighter navy for cards/containers
    text: '#ffffff',            // White text
    onPrimary: '#0d1b2a',       // Text on orange
    onSecondary: '#0d1b2a',     // Text on light orange
    outline: '#415a77',         // Border/accent lines
    error: '#ff6b6b',
    inverseOnSurface: '#f1f1f1', // For contrast text on surfaces
  },
  roundness: 10,
};

const ThemeContext = createContext(theme);

export const useAppTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};
