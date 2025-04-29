import { View, type ViewStyle } from 'react-native';
import { mergeSx, parseSx, type StyleProp, type SXProps } from '../../utils/sx';
import { forwardRef } from 'react';

/**
 * Props for the VStack component
 * @extends ViewProps
 */
export interface VStackProps extends StyleProp {
  /** Shorthand styling props that get transformed into React Native styles */
  sx?: SXProps;
  /** Regular React Native style object */
  style?: ViewStyle | ViewStyle[];
  /** Content to be rendered inside the VStack */
  children?: React.ReactNode;
}

/**
 * VStack is a layout component that arranges its children vertically.
 * It's a specialized version of Box that automatically sets flexDirection to 'column'.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <VStack sx={{ gap: 10 }}>
 *   <Text>Top</Text>
 *   <Text>Bottom</Text>
 * </VStack>
 * ```
 *
 * @example
 * With alignment:
 * ```tsx
 * <VStack sx={{ gap: 8, item: 'center', justify: 'space-between' }}>
 *   <Text>Header</Text>
 *   <Text>Content</Text>
 *   <Text>Footer</Text>
 * </VStack>
 * ```
 */
export const VStack = forwardRef<View, VStackProps>(({ sx, style, children, ...rest }, ref) => {
  const sxStyles = parseSx({ ...(sx || {}), fld: 'column' });
  const { parsedSx } = mergeSx(rest);
  return (
    <View ref={ref} {...rest} style={[parsedSx, sxStyles, style]}>
      {children}
    </View>
  );
});

VStack.displayName = 'VStack';
