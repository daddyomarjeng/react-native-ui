import { forwardRef } from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import { mergeSx, parseSx, type StyleProp } from '../../utils/sx';

export interface BoxProps extends ViewProps, StyleProp {
  /** Custom styles using the sx prop system */
  // sx?: SXProps;
  /** Regular React Native style object or array of style objects */
  style?: ViewStyle | ViewStyle[];
  /** Content to be rendered inside the Box */
  children?: React.ReactNode;
}

/**
 * Box is a fundamental layout component that serves as a wrapper.
 * It accepts all View props plus additional styling options through the sx prop.
 *
 * @example
 * ```tsx
 * <Box sx={{ p: 2, bg: 'primary' }}>
 *   <Text>Content</Text>
 * </Box>
 * ```
 *
 * @component
 * @param {BoxProps} props - The props for the Box component
 * @param {SXProps} [props.sx] - Custom styles using the sx prop system
 * @param {ViewStyle | ViewStyle[]} [props.style] - Regular React Native style object
 * @param {React.ReactNode} [props.children] - Content to be rendered inside the Box
 */
export const Box = forwardRef<View, BoxProps>(({ children, style, sx, ...rest }, ref) => {
  const sxStyles = sx ? parseSx(sx) : {};
  const { parsedSx } = mergeSx(rest);

  return (
    <View ref={ref} {...rest} style={[sxStyles, parsedSx, style]}>
      {children}
    </View>
  );
});

// Add display name for better debugging
Box.displayName = 'Box';
