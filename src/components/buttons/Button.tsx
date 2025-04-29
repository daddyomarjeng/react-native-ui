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
import { mergeSx, parseSx, type StyleProp } from '../../utils/sx';
import { sizes } from '../../utils/sizes';
import { Text } from '../typography/Text';

/**
 * Props for the Button component
 */
export interface ButtonProps extends TouchableOpacityProps, StyleProp {
  /** Text to display inside the button */
  title?: string;

  /** Additional style for the button container */
  style?: ViewStyle | ViewStyle[];

  /** Style specifically for the button's text */
  textStyle?: TextStyle;

  /** When true, shows a loading spinner instead of content
   * @default false
   */
  loading?: boolean;

  /** Color of the loading spinner
   * @default same as textColor
   */
  loaderColor?: string;

  /** Component to render on the left side of the button text */
  leftComponent?: React.ReactNode;

  /** Component to render on the right side of the button text */
  rightComponent?: React.ReactNode;

  /** Background color when button is disabled
   * @default '#ccc'
   */
  disabledBg?: string;

  /** Text color when button is disabled
   * @default '#eee'
   */
  disabledTextColor?: string;

  /** Background color of the button
   * @default '#007bff'
   */
  bg?: string;

  /** Color of the button text
   * @default '#fff'
   */
  textColor?: string;

  /** Size of the button text. Can be a predefined size or number
   * @default 'md'
   */
  textSize?: keyof typeof sizes.fontSizes | number;
}

/**
 * A customizable button component that supports various states and styling options.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Button title="Click me" onPress={() => {}} />
 * ```
 *
 * @example
 * With custom styling:
 * ```tsx
 * <Button
 *   title="Submit"
 *   bg="#4CAF50"
 *   textColor="#fff"
 *   sx={{ p: 15, rounded: 8 }}
 * />
 * ```
 *
 * @example
 * Loading state:
 * ```tsx
 * <Button
 *   loading={isLoading}
 *   title="Loading..."
 *   loaderColor="#fff"
 * />
 * ```
 *
 * @example
 * With icons:
 * ```tsx
 * <Button
 *   title="Settings"
 *   leftComponent={<Icon name="settings" />}
 *   sx={{ gap: 8 }}
 * />
 * ```
 *
 * @component
 */
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
    const { parsedSx } = mergeSx(rest);

    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled || loading}
        style={[containerStyles, parsedSx]}
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
