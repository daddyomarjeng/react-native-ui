import React, { forwardRef, type JSX } from 'react';
import {
  View,
  Text as RNText,
  TouchableOpacity as RNTouchableOpacity,
  type ViewProps,
  type TextProps as RNTextProps,
  type TouchableOpacityProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { parseSx, type SXProps } from '../../utils/sx';

// BaseRender: Renders the correct native element based on `variant`, supports ref forwarding
export type Variant = 'view' | 'text' | 'touchable';

interface BaseProps {
  variant?: Variant;
  style?: ViewStyle | TextStyle | (ViewStyle | TextStyle)[];
  children?: React.ReactNode;
  sx?: SXProps;
}

export const BaseRender = forwardRef<any, BaseProps & any>(
  ({ variant = 'view', sx, style, children, ...rest }: BaseProps, ref) => {
    const sxStyles = sx ? parseSx(sx) : {};
    console.log('====================================');
    console.log(sx);
    console.log('====================================');
    const composedStyle = [sxStyles, style];
    const mapping: Record<Variant, JSX.Element> = {
      view: (
        <View ref={ref} {...(rest as ViewProps)} style={composedStyle}>
          {children}
        </View>
      ),
      text: (
        <RNText ref={ref} {...(rest as RNTextProps)} style={composedStyle}>
          {children}
        </RNText>
      ),
      touchable: (
        <RNTouchableOpacity ref={ref} {...(rest as TouchableOpacityProps)} style={composedStyle}>
          {children}
        </RNTouchableOpacity>
      ),
    };
    return mapping[variant];
  }
);
