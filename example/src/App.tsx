import {
  Box,
  Button,
  createStyles,
  defaultTheme,
  Text,
  ThemeProvider,
  type ThemeType,
} from '@doj/react-native-ui';
import { Text as RNText } from 'react-native';

const result = 25;

const customTheme: ThemeType = {
  colors: {
    ...defaultTheme.colors,
    primary: '#ff6347',
    secondary: '#6a5acd',
    background: '#f0f0f0',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box style={[styles.container, styles.container]} backgroundColor={'lightblue'} sx={{}}>
        <Text sx={{}}>Result: {result}</Text>
        <RNText>Result: {result}</RNText>
        <Button title="Hello" p={100} />
      </Box>
    </ThemeProvider>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    items: 'center',
    justify: 'center',
  },
});
