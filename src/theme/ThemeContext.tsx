import { createContext, useContext, type ReactNode, useMemo } from 'react';
import { type ThemeType, defaultTheme } from './defaultTheme';

/**
 * Props for the ThemeProvider component
 */
interface ThemeProviderProps {
  /**
   * Custom theme object that will be merged with the default theme.
   * Partial theme properties will override default theme values.
   */
  theme?: Partial<ThemeType>;

  /** Child components that will have access to the theme */
  children: ReactNode;
}

/**
 * Context that holds the current theme configuration
 * @default defaultTheme
 */
const ThemeContext = createContext<ThemeType>(defaultTheme);

/**
 * Provider component that makes the theme available to all child components
 *
 * @example
 * Basic usage:
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * @example
 * With custom theme:
 * ```tsx
 * import {
  defaultTheme,
  ThemeProvider,
  ThemeType,
} from '@doj/react-native-ui';
 * const customTheme = {
 *   colors: {
 *  ...defaultTheme.colors,
 *     primary: '#FF0000',
 *     secondary: '#00FF00'
 *   }
 * };
 *
 * <ThemeProvider theme={customTheme}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
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

/**
 * Hook to access the current theme values within a component
 *
 * @throws {Error} When used outside of ThemeProvider
 * @returns {Theme} The current theme object
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { colors } = useTheme();
 *
 *   return (
 *     <View style={{ backgroundColor: colors.primary }}>
 *       <Text>Themed Component</Text>
 *     </View>
 *   );
 * };
 * ```
 */
export const useTheme = () => useContext(ThemeContext);
