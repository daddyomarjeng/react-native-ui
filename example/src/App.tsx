import { Box, Button, defaultTheme, Text, ThemeProvider } from '@doj/react-native-ui';
import { StyleSheet, Text as RNText } from 'react-native';

const result = 25;

const customTheme = {
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
      <Box style={styles.container} backgroundColor={'lightblue'} sx={{}}>
        <Text sx={{}}>Result: {result}</Text>
        <RNText>Result: {result}</RNText>
        <Button title="Hello" p={100} />
      </Box>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
