import { View, type ViewProps, type ViewStyle } from 'react-native';
import { mergeSx, parseSx, type StyleProp, type SXProps } from '../../utils/sx';
import { forwardRef } from 'react';

/**
 * Props for the HStack component
 * @extends ViewProps
 */
export interface HStackProps extends ViewProps, StyleProp {
  /** Shorthand styling props that get transformed into React Native styles */
  sx?: SXProps;
  /** Regular React Native style object */
  style?: ViewStyle | ViewStyle[];
  /** Content to be rendered inside the HStack */
  children?: React.ReactNode;
}

/**
 * HStack is a layout component that arranges its children horizontally.
 * It's a specialized version of Box that automatically sets flexDirection to 'row'.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <HStack sx={{ gap: 10, justify: 'space-between' }}>
 *   <Text>Left</Text>
 *   <Text>Right</Text>
 * </HStack>
 * ```
 *
 * @example
 * With alignment:
 * ```tsx
 * <HStack sx={{ gap: 8, item: 'center', justify: 'center' }}>
 *   <Icon name="star" />
 *   <Text>Centered content</Text>
 * </HStack>
 * ```
 */
export const HStack = forwardRef<View, HStackProps>(({ sx, style, children, ...rest }, ref) => {
  const sxStyles = parseSx({ ...(sx || {}), fld: 'row' });
  const { parsedSx } = mergeSx(rest);
  return (
    <View ref={ref} {...rest} style={[parsedSx, sxStyles, style]}>
      {children}
    </View>
  );
});

HStack.displayName = 'HStack';
