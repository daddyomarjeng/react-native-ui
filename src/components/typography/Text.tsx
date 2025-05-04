import React, { forwardRef } from 'react';
import { Text as RNText, type TextStyle } from 'react-native';
import { fontSizes, sizes } from '../../utils/sizes';
import { mergeSx, parseSx, type StyleProp, type SXProps } from '../../utils/sx';
import { useTheme } from '../../theme';

/** Supported text alignment options */
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

/** Text size can be either a predefined size from fontSizes or a custom number */
export type TextSize = keyof typeof fontSizes | number;

/**
 * Props for the Text component
 * @extends StyleProp
 */
export interface TextProps extends StyleProp {
  /** Content to be rendered inside the Text component */
  children?: React.ReactNode;

  /** Size of the text. Can be a predefined size key or a custom number
   * @default 'base'
   */
  size?: TextSize;

  /** Color of the text
   * @default '#000'
   */
  color?: string;

  /** Text alignment
   * @default undefined
   */
  align?: TextAlign;

  /** Makes the text appear muted (gray color)
   * @default false
   */
  muted?: boolean;

  /** Adds an underline to the text
   * @default false
   */
  underline?: boolean;

  /** Custom line height
   * @default undefined
   */
  lineHeight?: number;

  /** Custom letter spacing
   * @default undefined
   */
  letterSpacing?: number;

  /** Regular React Native style object */
  style?: TextStyle | TextStyle[];

  /** Shorthand styling props that get transformed into React Native styles */
  sx?: SXProps;
}

/**
 * A customizable text component that supports various typography options and styling.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Text size="lg" color="blue">Hello World</Text>
 * ```
 *
 * @example
 * With alignment and muted style:
 * ```tsx
 * <Text
 *   align="center"
 *   muted
 *   size="xl"
 * >
 *   Centered muted text
 * </Text>
 * ```
 *
 * @example
 * With custom styling:
 * ```tsx
 * <Text
 *   sx={{
 *     fs: 'xl2',
 *     fw: 'bold',
 *     color: '#333',
 *     mt: 10
 *   }}
 * >
 *   Custom styled text
 * </Text>
 * ```
 *
 * @example
 * With line height and letter spacing:
 * ```tsx
 * <Text
 *   size="lg"
 *   lineHeight={24}
 *   letterSpacing={0.5}
 *   underline
 * >
 *   Formatted text
 * </Text>
 * ```
 */
export const Text = forwardRef<RNText, TextProps>(
  (
    {
      sx,
      size = 'base',
      color,
      align,
      muted = false,
      underline,
      lineHeight,
      letterSpacing,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const { colors } = useTheme();
    const getFontSize = (textSize: TextSize) =>
      typeof textSize === 'number' ? textSize : sizes.fontSizes[textSize];

    const textStyle: TextStyle = {
      fontSize: getFontSize(size as TextSize),
      color: muted ? colors.muted : color || colors.text,
      textAlign: align,
      ...(underline && { textDecorationLine: 'underline' }),
      ...(lineHeight && { lineHeight }),
      ...(letterSpacing && { letterSpacing }),
    };

    const sxStyles = sx ? parseSx(sx) : {};
    const { parsedSx } = mergeSx(rest);
    return (
      <RNText ref={ref} {...rest} style={[sxStyles, parsedSx, textStyle, style]}>
        {children}
      </RNText>
    );
  }
);

Text.displayName = 'Text';
