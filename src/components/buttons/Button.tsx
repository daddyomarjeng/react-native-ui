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
import { useTheme } from '../../theme/ThemeContext';
import { resolveColor } from '../../utils/colors';

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

  /** Component to render on the left side of the button text */
  leftComponent?: React.ReactNode;

  /** Component to render on the right side of the button text */
  rightComponent?: React.ReactNode;

  /** Size of the button text. Can be a predefined size or number
   * @default 'md'
   */
  textSize?: keyof typeof sizes.fontSizes | number;

  /** Background color of the button
   * If not provided, defaults to theme `primaryButtonBg`
   */
  bg?: string;

  /** Text color of the button
   * If not provided, defaults to theme `primaryButtonText`
   */
  textColor?: string;

  /** Background color when button is disabled
   * If not provided, defaults to theme `disabledButtonBg`
   */
  disabledBg?: string;

  /** Text color when button is disabled
   * If not provided, defaults to theme `disabledButtonText`
   */
  disabledTextColor?: string;
}

/**
 * A customizable button component that supports props-based or theme-based colors.
 *
 * Color priority:
 * - If `bg`, `textColor`, `disabledBg`, `disabledTextColor` props are provided → use them
 * - Otherwise fallback to theme values (`primaryButtonBg`, etc.)
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Button title="Click me" onPress={() => {}} />
 * ```
 *
 * @example
 * With custom colors:
 * ```tsx
 * <Button title="Danger" bg="red" textColor="#fff" />
 * ```
 *
 * @example
 * Loading state:
 * ```tsx
 * <Button loading={isLoading} title="Loading..." />
 * ```
 *
 * @example
 * With icons:
 * ```tsx
 * <Button title="Settings" leftComponent={<Icon name="settings" />} sx={{ gap: 8 }} />
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
      leftComponent,
      rightComponent,
      textSize = 'md',
      sx,
      children,
      disabled,
      bg,
      textColor,
      disabledBg,
      disabledTextColor,
      ...rest
    },
    ref
  ) => {
    const { colors } = useTheme();

    const backgroundColor = disabled
      ? resolveColor(disabledBg ?? colors?.disabledButtonBg)
      : resolveColor(bg ?? colors?.primary);

    const finalTextColor = disabled
      ? resolveColor(disabledTextColor ?? colors?.disabledButtonText)
      : resolveColor(textColor ?? colors?.text);

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
            <ActivityIndicator size="small" color={finalTextColor} style={styles.loader} />
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
