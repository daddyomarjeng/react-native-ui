import { StyleSheet, type ViewStyle, type TextStyle, type ImageStyle } from 'react-native';
import { parseSx, type SXProps } from './sx';

type RNStyle = ViewStyle | TextStyle | ImageStyle;

type StyleWithSx = RNStyle & SXProps;

type StylesDefinition = {
  [key: string]: StyleWithSx;
};

export function createStyles<T extends StylesDefinition>(styles: T) {
  const parsedStyles = Object.entries(styles).reduce(
    (acc, [key, value]) => {
      (acc as Record<string, RNStyle>)[key] = parseSx(value); // <-- Automatically parse shorthand into RN style
      return acc;
    },
    {} as { [K in keyof T]: RNStyle }
  );

  return StyleSheet.create(parsedStyles);
}
