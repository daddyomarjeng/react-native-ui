import React, { forwardRef } from 'react';
import { Text as RNText, type TextStyle } from 'react-native';
import { fontSizes, sizes } from '../../utils/sizes';
import { mergeSx, parseSx, type StyleProp, type SXProps } from '../../utils/sx';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type TextSize = keyof typeof fontSizes | number;

export interface TextProps extends StyleProp {
  children?: React.ReactNode;
  size?: TextSize;
  color?: string;
  align?: TextAlign;
  muted?: boolean;
  underline?: boolean;
  lineHeight?: number;
  letterSpacing?: number;
  style?: TextStyle | TextStyle[];
  sx?: SXProps;
}

export const Text = forwardRef<RNText, TextProps>(
  (
    {
      sx,
      size = 'base',
      color = '#000',
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
    const getFontSize = (textSize: TextSize) =>
      typeof textSize === 'number' ? textSize : sizes.fontSizes[textSize];

    const textStyle: TextStyle = {
      fontSize: getFontSize(size as TextSize),
      color: muted ? '#888' : color,
      textAlign: align,
      ...(underline && { textDecorationLine: 'underline' }),
      ...(lineHeight && { lineHeight }),
      ...(letterSpacing && { letterSpacing }),
    };

    const sxStyles = sx ? parseSx(sx) : {};
    const { parsedSx } = mergeSx(rest);
    return (
      <RNText ref={ref} {...rest} style={[parsedSx, sxStyles, textStyle, style]}>
        {children}
      </RNText>
    );
  }
);
