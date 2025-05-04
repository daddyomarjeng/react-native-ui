// src/theme/defaultTheme.ts
export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  muted: string;
  text: string;
  background: string;
  disabledButtonBg: string;
  disabledButtonText: string;
}

export interface ThemeType {
  colors: ThemeColors;
}

export const defaultTheme: ThemeType = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    muted: '#ECECEC',
    dark: '#343a40',
    text: '#111',
    background: '#ffffff',

    //button
    disabledButtonBg: '#6c757d',
    disabledButtonText: '#ccc',
  },
};
