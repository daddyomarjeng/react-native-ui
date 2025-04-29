import { Box, Button, Text } from '@doj/react-native-ui';
import { StyleSheet, Text as RNText } from 'react-native';

const result = 25;

export default function App() {
  return (
    <Box style={styles.container} backgroundColor={'lightblue'} sx={{}}>
      <Text sx={{}}>Result: {result}</Text>
      <RNText>Result: {result}</RNText>
      <Button title="Hello" />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
