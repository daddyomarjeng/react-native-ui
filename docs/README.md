# @doj/react-native-ui

A powerful and flexible React Native UI toolkit designed to streamline development with pre-built, customizable components. Built for rapid styling and full customization, this package allows developers to quickly implement stunning and responsive UIs.

---

## ✨ Features

- 🛠️ **Utility-First SX Props** — Apply clean, flexible styles quickly
- 🎨 **Custom Theming** — Easily override colors and styles app-wide
- 📦 **Ready-to-Use Components** — Box, Text, Button & more
- ⚡ **Optimized Developer Experience** — Type-safe, tree-shakable, customizable

---

## 🚀 Quick Install

```bash
npm install @doj/react-native-ui
# or
yarn add @doj/react-native-ui
```

````

---

## 📦 Usage Example

```tsx
import {
  ThemeProvider,
  Box,
  Text,
  Button,
  defaultTheme,
} from '@doj/react-native-ui';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box p={16} bg="white" rounded={12} items="center">
        <Text color="primary" fs="lg" bold>
          Welcome
        </Text>
        <Button title="Get Started" p={12} />
      </Box>
    </ThemeProvider>
  );
}
```

---

## 📚 Documentation

- [⚡ SX Props & Styling](/styles.md)
- [🎨 Theming](/theming.md)
- [📦 Components](/components.md)

---

## 🛠️ Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © Daddy Omar Jeng
[www.daddyomarjeng.com](https://www.daddyomarjeng.com)

````

---

# 2️⃣ **theming.md**

````md
# 🎨 Theming

Customize your app’s colors and design system easily with **ThemeProvider**.

---

## 🚀 Quick Usage

```tsx
import { ThemeProvider, defaultTheme } from '@doj/react-native-ui';

const customTheme = {
  colors: {
    ...defaultTheme.colors,
    primary: '#ff6347',
    secondary: '#6a5acd',
    background: '#f0f0f0',
  },
};

<ThemeProvider theme={customTheme}>{/* Your app here */}</ThemeProvider>;
```
````

---

## 🎛️ Theme Structure

```ts
interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    [key: string]: string;
  };
}
```

---

## 🏆 Best Practices

✅ Always wrap your app in `<ThemeProvider>`
✅ Spread `defaultTheme.colors` to retain defaults
✅ Use theme-aware props (`color="primary"`, etc.)

---

## ▶️ Full Example

```tsx
<ThemeProvider theme={customTheme}>
  <Box p={16} bg="background" items="center">
    <Text color="primary" fs="lg">
      Themed Text
    </Text>
    <Button title="Click Me" />
  </Box>
</ThemeProvider>
```

````

---

# 3️⃣ **components.md**

```md
# 📦 Components

Our package ships with **pre-styled**, flexible components — all support `sx` props and theming out of the box.

---

## 📦 Box

A flexible `View` wrapper — supports all layout + SX props.

```tsx
<Box p={16} bg="#f5f5f5" rounded={12} items="center">
  <Text>Hello Box</Text>
</Box>
````

---

## 📝 Text

Text component with theme-aware colors, sizes & SX props.

```tsx
<Text color="primary" fs="lg" bold>
  Hello Text
</Text>
```

---

## 🔘 Button

A basic styled button.

```tsx
<Button title="Press Me" p={12} />
```

---

## ⚡ Component SX Support

| **Component**   | **Description** |
| --------------- | --------------- |
| `Box`           | View wrapper    |
| `Text`          | Typography      |
| `Button`        | Button          |
| `ThemeProvider` | App-wide theme  |

> ✨ Tip: All components accept **SX Props**
> See [⚡ SX Props & Styling](/styles.md)
