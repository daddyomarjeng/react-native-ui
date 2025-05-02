import { createContext, useContext, type ReactNode, useMemo } from 'react';
import { type Theme, defaultTheme } from './defaultTheme';

interface ThemeProviderProps {
  theme?: Partial<Theme>; // Allow partial override
  children: ReactNode;
}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const mergedTheme = useMemo(() => {
    return {
      ...defaultTheme,
      ...theme,
      colors: { ...defaultTheme.colors, ...theme?.colors },
    };
  }, [theme]);

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
