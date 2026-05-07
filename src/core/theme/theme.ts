import { useColorScheme } from 'react-native';
import { Colors } from './colors';

export const LightTheme = {
  dark: false,
  colors: {
    primary: Colors.primaryLight,
    secondary: Colors.secondaryLight,
    background: Colors.backgroundLight,
    surface: Colors.surfaceLight,
    error: Colors.errorLight,
    text: Colors.onBackgroundLight,
    onPrimary: Colors.onPrimaryLight,
    onSurface: Colors.onSurfaceLight,
    border: 'rgba(0,0,0,0.05)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  }
};

export const DarkTheme = {
  dark: true,
  colors: {
    primary: Colors.primaryDark,
    secondary: Colors.secondaryDark,
    background: Colors.backgroundDark,
    surface: Colors.surfaceDark,
    error: Colors.errorDark,
    text: Colors.onBackgroundDark,
    onPrimary: Colors.onPrimaryDark,
    onSurface: Colors.onSurfaceDark,
    border: 'rgba(255,255,255,0.05)',
  },
  spacing: LightTheme.spacing,
  borderRadius: LightTheme.borderRadius,
};

export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? DarkTheme : LightTheme;
};

export type AppTheme = typeof LightTheme;
