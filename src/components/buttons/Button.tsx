import React, { forwardRef } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  StyleSheet,
  type TouchableOpacityProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { parseSx, type StyleProp } from '../../utils/sx';
import { sizes } from '../../utils/sizes';
import { Text } from '../typography/Text';

/**
 * A fully customizable Button component.
 *
 * ## Props
 * - `title`: Button title text.
 * - `loading`: Whether to show a loading indicator.
 * - `left`: Component to render on the left side.
 * - `right`: Component to render on the right side.
 * - `bg`: Background color.
 * - `disabledBg`: Background color when disabled.
 * - `textColor`: Text color.
 * - `disabledTextColor`: Text color when disabled.
 * - `textSize`: Text size ('sm', 'md', 'lg' or number).
 * - `sx`: Shortcut styles.
 * - `style`: Additional style for the button.
 * - `textStyle`: Additional style for the text.
 * - `children`: Render custom children instead of title.
 */
export interface ButtonProps extends TouchableOpacityProps, StyleProp {
  title?: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  loading?: boolean;
  loaderColor?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  disabledBg?: string;
  disabledTextColor?: string;
  bg?: string;
  textColor?: string;
  textSize?: keyof typeof sizes.fontSizes | number;
}

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      title,
      style,
      textStyle,
      loading = false,
      loaderColor,
      leftComponent,
      rightComponent,
      disabled,
      disabledBg = '#ccc',
      disabledTextColor = '#eee',
      bg = '#007bff', // Default blue background if none passed
      textColor = '#fff', // Default white text
      textSize = 'md',
      sx,
      children,
      ...rest
    },
    ref
  ) => {
    const backgroundColor = disabled ? disabledBg : bg;
    const finalTextColor = disabled ? disabledTextColor : textColor;

    const containerStyles = [{ backgroundColor }, parseSx({ p: 10, rounded: 5, ...sx }), style];

    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled || loading}
        style={containerStyles}
        activeOpacity={0.8}
        {...rest}
      >
        <View style={styles.content}>
          {leftComponent && <View style={styles.side}>{leftComponent}</View>}

          {loading ? (
            <ActivityIndicator
              size="small"
              color={loaderColor || finalTextColor}
              style={styles.loader}
            />
          ) : title ? (
            <Text size={textSize} color={finalTextColor} style={[styles.text, textStyle || {}]}>
              {title}
            </Text>
          ) : (
            children
          )}

          {rightComponent && <View style={styles.side}>{rightComponent}</View>}
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  side: {
    marginHorizontal: 4,
  },
  loader: {
    marginHorizontal: 4,
  },
  text: {
    textAlign: 'center',
  },
});

Button.displayName = 'Button';
