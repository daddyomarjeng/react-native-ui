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
  text: string;
  background: string;
  disabledButtonBg: string;
  disabledButtonText: string;
}

export interface Theme {
  colors: ThemeColors;
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    text: '#212529',
    background: '#ffffff',

    disabledButtonBg: '#6c757d',
    disabledButtonText: '',
  },
};
